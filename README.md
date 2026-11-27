# Gráfica Yuri-Designer

**Demo online:** https://grafica-yuri-designer.vercel.app/

Vitrine comercial responsiva orientada para encomendas pelo WhatsApp. Desenvolvida em **React + Vite**, JavaScript/JSX, CSS3, Lucide React e Framer Motion.

## Executar localmente

Requisitos: Node.js 22 LTS e npm. Não são necessárias variáveis de ambiente nem backend.

```bash
git clone --branch arena/cc6073a3-graficayuridesigner https://github.com/djey-py/graficayuridesigner-.git
cd graficayuridesigner-
npm ci
npm run dev
```

O servidor aceita ligações em `0.0.0.0:5173`.

```bash
npm run build     # produção, resultado em dist/
npm run preview   # servir o build local
npm test          # testes de browser desktop e mobile
```

## Funcionalidades

- Catálogo de nove entradas, com filtros por cinco categorias.
- Galeria ampliada acessível, fecho por Escape e gestão de foco.
- Selector de formatos de quadros, com os seis preços fornecidos.
- Encomendas individuais com mensagens codificadas por `encodeURIComponent`.
- Escolha entre os dois contactos oficiais em cada fluxo de encomenda.
- Campo opcional para acrescentar quantidade, ideia ou ocasião à mensagem.
- Oferta de 50 cartões laminados com design grátis, sem preço inventado.
- Kits, personalização, contactos, menu mobile e botão flutuante de WhatsApp.
- Animações de entrada com respeito pela preferência de movimento reduzido.
- Fontes locais, imagens WebP, lazy loading e metadados Open Graph.

### Preços preservados

| Formato | Preço     |
| ------- | --------- |
| A5      | 5.000 Kz  |
| A4      | 7.000 Kz  |
| A3      | 10.000 Kz |
| A2      | 18.500 Kz |
| A1      | 25.000 Kz |
| A0      | 65.000 Kz |

Contactos oficiais: **+244 924 814 196** e **+244 953 220 160**.
Crachás personalizados: **mínimo de 10 unidades**.

## Estrutura

```text
src/
  App.jsx                 # secções da vitrine e fluxos de encomenda
  components/Modal.jsx    # diálogo reutilizável e acessível
  data.js                 # catálogo, kits, preços, contactos e mensagens
  main.jsx                # entrada e tipografia local
  styles.css              # identidade visual e layouts responsivos
public/
  images/                 # 10 mockups ilustrativos optimizados em WebP
  favicon.svg             # monograma provisório, não logótipo oficial
scripts/test-browser.js   # configuração de Chromium para o ambiente de testes
tests/store.spec.js       # testes funcionais desktop e mobile
vercel.json               # configuração de publicação
```

## Conteúdo e limites da demo

Os dez mockups de produtos foram gerados por IA para esta demonstração. **Não representam fotografias do portefólio real nem confirmam os acabamentos disponíveis.** As imagens dos kits são inspirações ilustrativas; composição, disponibilidade, quantidades, materiais e entrega devem ser confirmados com a equipa. Não há avaliações, estatísticas, morada, e-mail, redes sociais ou prazos inventados.

A apresentação tipográfica da marca e o favicon são provisórios e substituíveis. Os preços e contactos estão centralizados em `src/data.js`.

As encomendas são tratadas externamente pelo WhatsApp. O site não processa pagamentos, não guarda os detalhes introduzidos e não envia automaticamente mensagens. O cliente revê e envia o pedido no WhatsApp.

## Testes

A suite Playwright inclui oito cenários (quatro em desktop, quatro em mobile): filtros, galeria, seis preços, mensagens para ambos os números, todos os produtos, oferta, kits, detalhes opcionais, imagens, âncoras, menu mobile, erros JavaScript e ausência de overflow entre 320 e 1920 px.

O Chromium é obtido através do npm para funcionar mesmo em ambientes sem acesso ao CDN do Playwright. O helper configura as bibliotecas Linux necessárias automaticamente. Num sistema com outro browser instalado, pode definir `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`.

Para testar uma publicação acessível:

```bash
TEST_BASE_URL=https://<url-publicada> npm test
```

Os testes verificam os destinos e o texto dos links WhatsApp sem enviar mensagens aos contactos. O envio e a recepção reais exigem uma conta WhatsApp e confirmação humana. Testes mobile usam emulação Chromium, não aparelhos Android/iPhone físicos.

## Publicação

Preset: **Vite** · instalação: `npm ci` · build: `npm run build` · saída: `dist`.
Não são necessárias variáveis de ambiente. A configuração de headers encontra-se em `vercel.json`.

Consulte `PUBLICACAO.md` para os resultados efectivamente verificados nesta sessão.
