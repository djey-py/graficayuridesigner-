import { test, expect } from "@playwright/test";
const amounts = {
  A5: "5.000",
  A4: "7.000",
  A3: "10.000",
  A2: "18.500",
  A1: "25.000",
  A0: "65.000",
};
test("catálogo, filtros e galeria", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("A sua ideia.");
  await expect(page.locator(".product-card")).toHaveCount(9);
  for (const [cat, count] of [
    ["Vestuário", 3],
    ["Brindes", 3],
    ["Identificação", 1],
    ["Impressão gráfica", 1],
    ["Quadros", 1],
    ["Todos", 9],
  ]) {
    await page.getByRole("button", { name: cat, exact: true }).click();
    await expect(page.locator(".product-card")).toHaveCount(count);
  }
  await page
    .getByRole("button", { name: "Ampliar imagem de T-shirts personalizadas" })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.locator(".gallery-image")).toHaveJSProperty(
    "naturalWidth",
    900,
  );
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
});
test("seis preços exactos e ambas as mensagens WhatsApp", async ({ page }) => {
  await page.goto("/");
  for (const [format, price] of Object.entries(amounts)) {
    await page
      .getByRole("button", {
        name: new RegExp(`^${format} ${price.replace(".", "\\.")} Kz$`),
      })
      .click();
    await expect(page.locator(".price-summary strong")).toContainText(price);
    await page.getByRole("button", { name: "Encomendar este quadro" }).click();
    for (const number of ["244924814196", "244953220160"]) {
      const link = page.locator(
        `.whatsapp-options a[href^="https://wa.me/${number}"]`,
      );
      const url = new URL(await link.getAttribute("href"));
      expect(url.searchParams.get("text")).toContain(`formato ${format}`);
      expect(url.searchParams.get("text")).toContain(`${price} Kz`);
    }
    await page.getByRole("button", { name: "Fechar janela" }).click();
  }
});
test("encomendas individuais, oferta, kits e detalhes", async ({ page }) => {
  await page.goto("/");
  for (const card of await page.locator(".product-card").all()) {
    await card.locator(".product-order").click();
    await expect(page.locator(".whatsapp-options a")).toHaveCount(2);
    const text = new URL(
      await page.locator(".whatsapp-options a").first().getAttribute("href"),
    ).searchParams.get("text");
    expect(text.length).toBeGreaterThan(50);
    if ((await card.locator("h3").textContent()) === "Crachás personalizados")
      expect(text).toContain("10 unidades");
    await page.getByRole("button", { name: "Fechar janela" }).click();
  }
  await page.getByRole("button", { name: "Quero os meus cartões" }).click();
  await expect(page.locator(".message-preview")).toContainText(
    "50 cartões laminados com design grátis",
  );
  await page
    .getByLabel("Quer acrescentar algum detalhe?")
    .fill("Quero azul e laranja, 100 unidades.");
  expect(
    new URL(
      await page.locator(".whatsapp-options a").first().getAttribute("href"),
    ).searchParams.get("text"),
  ).toContain("Detalhes: Quero azul e laranja, 100 unidades.");
  await page.getByRole("button", { name: "Fechar janela" }).click();
  for (const kit of await page.locator(".kit-card").all()) {
    const name = await kit.locator("h3").textContent();
    await kit.getByRole("button").click();
    await expect(page.locator(".message-preview")).toContainText(name);
    await page.getByRole("button", { name: "Fechar janela" }).click();
  }
});
test("imagens, âncoras, consola, responsividade e navegação", async ({
  page,
}, testInfo) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  for (const img of await page.locator("img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect(img).toHaveJSProperty("complete", true);
    expect(await img.evaluate((i) => i.naturalWidth)).toBeGreaterThan(0);
  }
  const links = await page
    .locator('a[href^="#"]')
    .evaluateAll((as) => as.map((a) => a.getAttribute("href")));
  for (const href of links) {
    expect(await page.locator(href).count()).toBeGreaterThan(0);
  }
  for (const width of testInfo.project.name === "mobile"
    ? [320, 375, 390, 768]
    : [1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBeTruthy();
  }
  if (testInfo.project.name === "mobile") {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.getByRole("button", { name: "Abrir menu" }).click();
    await expect(
      page.getByRole("navigation", { name: "Navegação principal" }),
    ).toBeVisible();
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "Produtos", exact: true })
      .click();
    await expect(
      page.getByRole("button", { name: "Abrir menu" }),
    ).toHaveAttribute("aria-expanded", "false");
  }
  expect(errors).toEqual([]);
  await page.goto("/");
  await page.screenshot({
    path: `test-results/${testInfo.project.name}.png`,
    fullPage: true,
  });
});
