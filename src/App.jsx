import { useState, useEffect, useCallback } from "react";
import { motion, MotionConfig } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  Menu,
  X,
  Sparkles,
  Truck,
  Palette,
  Check,
  Shirt,
  Gift,
  BadgeCheck,
  Printer,
  Frame,
  Expand,
  Phone,
  Layers,
  Heart,
  ChevronDown,
} from "lucide-react";
import {
  products,
  categories,
  prices,
  kits,
  contacts,
  genericMessage,
  cardMessage,
  whatsappUrl,
} from "./data";
import Modal from "./components/Modal";
const nav = [
  ["Início", "inicio"],
  ["Produtos", "produtos"],
  ["Serviços", "servicos"],
  ["Kits", "kits"],
  ["Preços", "precos"],
  ["Contactos", "contactos"],
];
const image = (name) => `/images/${name}.webp`;
function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Yuri-Designer, início">
      <span className="brand-top">GRÁFICA & PERSONALIZAÇÃO</span>
      <span>
        yuri<span className="brand-hyphen">-</span>designer
        <span className="brand-dot">.</span>
      </span>
    </a>
  );
}
function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  );
}
function App() {
  const [menu, setMenu] = useState(false),
    [scrolled, setScrolled] = useState(false),
    [category, setCategory] = useState("Todos"),
    [format, setFormat] = useState("A3"),
    [order, setOrder] = useState(null),
    [gallery, setGallery] = useState(null),
    [custom, setCustom] = useState("");
  const closeOrder = useCallback(() => setOrder(null), []),
    closeGallery = useCallback(() => setGallery(null), []);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    const escape = (e) => e.key === "Escape" && setMenu(false);
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, []);
  const openOrder = (
    message = genericMessage,
    title = "Vamos dar vida à sua ideia?",
  ) => {
    setCustom("");
    setOrder({ message, title });
    setMenu(false);
  };
  const selected = prices.find((p) => p.format === format);
  const frameMessage = `Olá! Tenho interesse num quadro personalizado no formato ${format}, com o preço anunciado de ${selected.price} Kz. Gostaria de saber como posso encomendar.`;
  return (
    <MotionConfig reducedMotion="user">
      <a href="#produtos" className="skip-link">
        Saltar para os produtos
      </a>
      <div className="announcement">
        <span>Ideias únicas. Produtos com a sua identidade.</span>
        <span>
          <Truck size={14} /> Entregas disponíveis{" "}
          <span className="announcement-divider">|</span> Feito ao seu gosto{" "}
          <Sparkles size={13} />
        </span>
      </div>
      <header className={scrolled ? "header scrolled" : "header"}>
        <div className="container header-inner">
          <Brand />
          <nav
            aria-label="Navegação principal"
            className={menu ? "nav is-open" : "nav"}
          >
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
          </nav>
          <button
            className="button button-blue header-order"
            onClick={() => openOrder()}
          >
            Fazer Encomenda <ArrowUpRight size={17} />
          </button>
          <button
            className="mobile-toggle icon-button"
            aria-expanded={menu}
            aria-label={menu ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="hero-grain" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="small-star">✳</span> CRIATIVIDADE QUE GANHA
                FORMA
              </div>
              <h1>
                A sua ideia.
                <br />O nosso design.
                <br />
                <span>
                  O seu estilo
                  <svg viewBox="0 0 380 20" aria-hidden="true">
                    <path d="M4 13 Q180 -3 375 9" />
                  </svg>
                </span>
                <em>!</em>
              </h1>
              <p>
                Transformamos ideias em produtos personalizados. Da impressão
                aos brindes, criamos soluções gráficas que dão vida à sua
                criatividade.
              </p>
              <div className="hero-actions">
                <a className="button button-orange" href="#produtos">
                  Explorar Produtos <ArrowUpRight size={19} />
                </a>
                <button
                  className="button button-outline"
                  onClick={() => openOrder()}
                >
                  <MessageCircle size={19} /> Fazer Encomenda
                </button>
              </div>
              <div className="hero-note">
                <span>
                  <Check size={14} /> Personalização ao seu gosto
                </span>
                <span>
                  <Check size={14} /> Design personalizado
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-orbit" />
              <img
                className="hero-image"
                src={image("hero")}
                alt="Composição ilustrativa de t-shirt, chávena, chapéu, cartões, crachá e copo personalizados"
                fetchPriority="high"
                width="1000"
                height="900"
              />
              <div className="hero-label top">
                <span className="label-icon">
                  <Palette size={20} />
                </span>
                <div>
                  <strong>À sua imagem.</strong>
                  <small>Do primeiro traço ao produto final.</small>
                </div>
              </div>
              <div className="round-sticker">
                FEITO PARA
                <br />
                <strong>ser seu.</strong>
                <Sparkles size={21} />
              </div>
              <div className="hero-label bottom">
                <span className="orange-dot" />
                <span>
                  Pequenos detalhes. <strong>Grandes ideias.</strong>
                </span>
              </div>
              <span className="visual-caption">
                MOCKUPS ILUSTRATIVOS · A SUA IDEIA É O PONTO DE PARTIDA
              </span>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>PERSONALIZE. OFEREÇA. SURPREENDA.</span>
            <a href="#produtos">
              Descubra o que podemos criar <ChevronDown size={15} />
            </a>
            <span className="hero-page">01 — CRIAR SEM LIMITES</span>
          </div>
        </section>
        <section className="benefit-strip" aria-label="Vantagens">
          <div className="container">
            {[
              [Palette, "Personalização ao seu gosto"],
              [Sparkles, "Design com criatividade"],
              [Truck, "Entregas disponíveis"],
              [Layers, "Quantidades conforme o produto"],
            ].map(([Icon, text]) => (
              <div key={text}>
                <Icon size={21} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="section catalog container" id="produtos">
          <Reveal>
            <div className="section-heading">
              <div>
                <div className="eyebrow">UM MUNDO DE POSSIBILIDADES</div>
                <h2>
                  Dê vida às suas <span className="serif">ideias!</span>
                </h2>
              </div>
              <p>
                Produtos personalizados para destacar a sua marca, celebrar
                momentos especiais e oferecer presentes únicos.
              </p>
            </div>
            <div className="filters" role="group" aria-label="Filtrar produtos">
              {categories.map((cat, i) => {
                const Icon = [Layers, Shirt, Gift, BadgeCheck, Printer, Frame][
                  i
                ];
                return (
                  <button
                    key={cat}
                    className={category === cat ? "filter active" : "filter"}
                    onClick={() => setCategory(cat)}
                    aria-pressed={category === cat}
                  >
                    <Icon size={16} />
                    {cat}
                  </button>
                );
              })}
            </div>
          </Reveal>
          <div className="product-grid" aria-live="polite">
            {products
              .filter((p) => category === "Todos" || p.category === category)
              .map((p) => (
                <motion.article
                  layout
                  key={p.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="product-card"
                >
                  <div className={`product-image image-${p.image}`}>
                    {p.tag && (
                      <span
                        className={`product-tag ${p.id === "cards" ? "tag-orange" : ""}`}
                      >
                        {p.tag}
                      </span>
                    )}
                    <button
                      className="image-open"
                      onClick={() => setGallery(p)}
                      aria-label={`Ampliar imagem de ${p.name}`}
                    >
                      <img
                        src={image(p.image)}
                        alt={`Exemplo ilustrativo: ${p.name}`}
                        loading="lazy"
                        width="600"
                        height="600"
                      />
                      <span className="zoom-icon">
                        <Expand size={18} />
                      </span>
                    </button>
                  </div>
                  <div className="product-info">
                    <span className="product-category">{p.category}</span>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <div className="product-detail">
                      <span>{p.detail}</span>
                    </div>
                    <div className="product-bottom">
                      <strong className={p.price ? "has-price" : ""}>
                        {p.price || "Preço sob consulta"}
                      </strong>
                      <button
                        className="product-order"
                        aria-label={`Encomendar ${p.name} pelo WhatsApp`}
                        onClick={() =>
                          openOrder(
                            p.message ||
                              `Olá! Tenho interesse em ${p.name.toLowerCase()}. Gostaria de saber mais informações e solicitar um orçamento.`,
                            p.name,
                          )
                        }
                      >
                        <MessageCircle size={17} />
                        <span>Encomendar pelo WhatsApp</span>
                        <ArrowUpRight size={17} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
          <div className="catalog-note">
            <span>
              <Sparkles size={17} /> A sua criatividade não tem catálogo.
            </span>
            <button onClick={() => openOrder()}>
              Tem outra ideia? Fale connosco <ArrowRight size={16} />
            </button>
          </div>
        </section>
        <section className="cards-promo container" id="oferta">
          <Reveal className="promo-grid">
            <div className="promo-copy">
              <div className="eyebrow">
                <span className="orange-dot" /> UMA BOA IMPRESSÃO COMEÇA AQUI
              </div>
              <h2>
                Os seus cartões,
                <br />
                com mais resistência
                <br />e <span className="serif">qualidade!</span>
              </h2>
              <p>
                A sua marca merece um cartão à altura. Um acabamento cuidado,
                para levar a sua identidade mais longe.
              </p>
              <div className="promo-checks">
                <span>
                  <Check size={16} /> Resistentes à água
                </span>
                <span>
                  <Check size={16} /> Resistentes ao calor
                </span>
              </div>
              <div className="offer">
                <strong>50 CARTÕES</strong>
                <span>
                  + DESIGN GRÁTIS <Sparkles size={19} />
                </span>
              </div>
              <button
                className="button button-orange"
                onClick={() =>
                  openOrder(cardMessage, "Os seus novos cartões começam aqui.")
                }
              >
                Quero os meus cartões <ArrowUpRight size={19} />
              </button>
              <small className="promo-footnote">
                Consulte o valor e as condições pelo WhatsApp.
              </small>
            </div>
            <div className="promo-image">
              <img
                src={image("cards")}
                alt="Mockup ilustrativo de cartões de visita laminados em azul e laranja"
                loading="lazy"
                width="900"
                height="900"
              />
              <span className="finish-label">
                <Layers size={18} /> O detalhe faz a diferença.
              </span>
            </div>
          </Reveal>
        </section>
        <section className="section frames-section container" id="precos">
          <Reveal className="frames-grid">
            <div className="frames-visual">
              <img
                src={image("frames")}
                alt="Exemplo de quadros decorativos de diferentes tamanhos num ambiente interior"
                loading="lazy"
                width="900"
                height="900"
              />
              <span className="photo-label">
                <Frame size={17} /> MEMÓRIAS QUE MERECEM DESTAQUE
              </span>
            </div>
            <div className="frames-copy">
              <div className="eyebrow">O SEU MOMENTO. A SUA PAREDE.</div>
              <h2>
                Transforme as suas
                <br />
                fotografias em <span className="serif">arte!</span>
              </h2>
              <p>
                Quadros digitais e em PVC para decorar os seus espaços e
                eternizar os seus melhores momentos.
              </p>
              <h4>Escolha o formato do seu quadro</h4>
              <div
                className="format-options"
                role="group"
                aria-label="Formato do quadro"
              >
                {prices.map((p) => (
                  <button
                    key={p.format}
                    className={format === p.format ? "format active" : "format"}
                    aria-pressed={format === p.format}
                    onClick={() => setFormat(p.format)}
                  >
                    <Frame size={20} />
                    <strong>{p.format}</strong>
                    <small>{p.price} Kz</small>
                  </button>
                ))}
              </div>
              <div className="price-summary" aria-live="polite">
                <div>
                  <span>O seu quadro · Formato {format}</span>
                  <strong>
                    {selected.price} <small>Kz</small>
                  </strong>
                </div>
                <span className="price-badge">
                  Feito para si <Heart size={15} />
                </span>
              </div>
              <button
                className="button button-blue full-width"
                onClick={() =>
                  openOrder(frameMessage, `Quadro personalizado · ${format}`)
                }
              >
                Encomendar este quadro <ArrowUpRight size={19} />
              </button>
              <small className="muted-small">
                Confirme o material, a personalização e a entrega com a nossa
                equipa.
              </small>
            </div>
          </Reveal>
        </section>
        <section className="kits-section" id="kits">
          <div className="container section">
            <Reveal>
              <div className="section-heading">
                <div>
                  <div className="eyebrow">
                    PARA CADA OCASIÃO, UMA IDEIA ESPECIAL
                  </div>
                  <h2>
                    Celebrar começa
                    <br />
                    nos <span className="serif">detalhes.</span>
                  </h2>
                </div>
                <div>
                  <p>
                    Criamos kits personalizados para tornar cada ocasião ainda
                    mais especial.
                  </p>
                  <span className="muted-small">
                    Inspirações para celebrar momentos especiais.
                  </span>
                </div>
              </div>
            </Reveal>
            <div className="kit-grid">
              {kits.map((kit, i) => (
                <Reveal className="kit-card" key={kit.name}>
                  <div className={`kit-image kit-${i}`}>
                    <img
                      src={image(kit.image)}
                      alt={`Inspiração ilustrativa para ${kit.name.toLowerCase()}`}
                      loading="lazy"
                      width="500"
                      height="500"
                    />
                    <span>0{i + 1}</span>
                  </div>
                  <h3>{kit.name}</h3>
                  <p>{kit.description}</p>
                  <small>{kit.items}</small>
                  <button
                    onClick={() =>
                      openOrder(
                        `Olá! Gostaria de conhecer os kits personalizados da Gráfica Yuri-Designer. Tenho interesse em preparar uma encomenda. Categoria: ${kit.name}.`,
                        kit.name,
                      )
                    }
                  >
                    Criar o meu kit <ArrowUpRight size={18} />
                  </button>
                </Reveal>
              ))}
            </div>
            <p className="kits-disclaimer">
              Imagens e composições ilustrativas. Os elementos de cada kit são
              sugestões; confirme a disponibilidade e a composição pelo
              WhatsApp.
            </p>
          </div>
        </section>
        <section className="section container" id="servicos">
          <Reveal className="custom-section">
            <div className="custom-art">
              <span className="art-ring" />
              <img
                src={image("vest")}
                alt="Exemplo de colete personalizado"
                loading="lazy"
                width="500"
                height="500"
              />
              <img
                src={image("badge")}
                alt="Exemplo de crachás com numeração"
                loading="lazy"
                width="500"
                height="500"
              />
              <span className="custom-star">✳</span>
              <span className="art-label">
                A SUA MARCA,
                <br />
                <strong>em todo o lado.</strong>
              </span>
            </div>
            <div className="custom-copy">
              <div className="eyebrow">PERSONALIZAÇÃO SEM COMPLICAÇÕES</div>
              <h2>
                Não encontra exactamente o que procura?
                <br />
                <span className="serif">Criamos ao seu gosto!</span>
              </h2>
              <p>
                Uma ideia para a sua marca, um presente diferente ou uma equipa
                com identidade. Conte-nos o que tem em mente.
              </p>
              <div className="custom-tags">
                {[
                  "T-shirts",
                  "Chávenas",
                  "Chapéus",
                  "Coletes",
                  "Crachás",
                  "Copos acrílicos",
                  "Brindes personalizados",
                ].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="minimum">
                <BadgeCheck size={21} />
                <span>
                  <strong>Crachás personalizados</strong>
                  <br />
                  Quantidade mínima de 10 unidades.
                </span>
              </div>
              <button
                className="button button-blue"
                onClick={() =>
                  openOrder(genericMessage, "O que gostaria de personalizar?")
                }
              >
                Personalizar o meu produto <ArrowUpRight size={18} />
              </button>
            </div>
          </Reveal>
        </section>
        <section className="why-section container">
          <Reveal>
            <div className="why-heading">
              <div className="eyebrow">CRIATIVIDADE COM PROPÓSITO</div>
              <h2>
                Porquê escolher a <span className="serif">Yuri-Designer?</span>
              </h2>
            </div>
            <div className="why-grid">
              {[
                [
                  Palette,
                  "Ao seu gosto",
                  "Produtos com a sua personalidade e a identidade da sua marca.",
                ],
                [
                  Sparkles,
                  "Design e criatividade",
                  "Ideias que ganham forma através de um design personalizado.",
                ],
                [
                  Gift,
                  "Para cada ocasião",
                  "Soluções para oferecer, celebrar ou dar destaque ao seu negócio.",
                ],
                [
                  BadgeCheck,
                  "Preços acessíveis",
                  "Opções competitivas. Peça um orçamento à medida da sua ideia.",
                ],
                [
                  Truck,
                  "Entrega disponível",
                  "Combine os detalhes da entrega directamente com a nossa equipa.",
                ],
              ].map(([Icon, title, text]) => (
                <div className="why-card" key={title}>
                  <Icon size={25} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
        <section className="final-cta" id="contactos">
          <div className="container">
            <Reveal className="cta-inner">
              <span className="cta-star">✳</span>
              <div className="eyebrow">VAMOS CRIAR ALGO ESPECIAL?</div>
              <h2>
                A sua ideia merece
                <br />
                sair do <span className="serif">papel!</span>
              </h2>
              <p>
                Conte-nos o que pretende personalizar. A nossa equipa está
                pronta para transformar a sua ideia num produto especial.
              </p>
              <button
                className="button button-orange"
                onClick={() => openOrder()}
              >
                <MessageCircle size={20} /> Falar com a Yuri-Designer{" "}
                <ArrowUpRight size={19} />
              </button>
              <div className="contact-options">
                {contacts.map((c) => (
                  <a
                    href={whatsappUrl(c.number, genericMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={c.number}
                  >
                    <Phone size={16} />
                    <span>+244 {c.label}</span>
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
              <span className="delivery-note">
                <Truck size={16} /> Entregas disponíveis · Vamos combinar os
                detalhes.
              </span>
            </Reveal>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Brand />
              <p>
                Personalização, criatividade e qualidade gráfica. A sua ideia,
                com o nosso design e o seu estilo.
              </p>
              <span className="demo-tag">
                DEMO COMERCIAL · IMAGENS ILUSTRATIVAS
              </span>
            </div>
            <div>
              <h4>Explore</h4>
              {nav.slice(0, 5).map(([label, id]) => (
                <a href={`#${id}`} key={id}>
                  {label}
                </a>
              ))}
            </div>
            <div>
              <h4>O que criamos</h4>
              {categories.slice(1).map((cat) => (
                <a href="#produtos" key={cat} onClick={() => setCategory(cat)}>
                  {cat}
                </a>
              ))}
            </div>
            <div>
              <h4>Vamos conversar?</h4>
              {contacts.map((c) => (
                <a
                  key={c.number}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={whatsappUrl(c.number, genericMessage)}
                >
                  <MessageCircle size={15} /> +244 {c.label}{" "}
                  <ArrowUpRight size={13} />
                </a>
              ))}
              <span className="footer-delivery">
                <Truck size={16} /> Entregas disponíveis
              </span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Gráfica Yuri-Designer. Todos os
              direitos reservados.
            </span>
            <span>
              Feito de ideias. Criado para si.{" "}
              <span className="orange-star">✳</span>
            </span>
          </div>
        </div>
      </footer>
      <button
        className="floating-whatsapp"
        aria-label="Falar pelo WhatsApp, escolher contacto"
        onClick={() => openOrder()}
      >
        <MessageCircle size={26} />
        <span>Vamos conversar?</span>
      </button>
      {order && (
        <Modal title={order.title} onClose={closeOrder}>
          <p className="modal-description">
            Escolha o contacto de WhatsApp. O seu pedido vai consigo, pronto
            para enviar.
          </p>
          <div className="message-preview">{order.message}</div>
          <label className="custom-label" htmlFor="order-details">
            Quer acrescentar algum detalhe? <span>(opcional)</span>
          </label>
          <textarea
            id="order-details"
            placeholder="Conte-nos a sua ideia, quantidade ou ocasião…"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            rows={3}
          />
          <div className="whatsapp-options">
            {contacts.map((c) => (
              <a
                key={c.number}
                href={whatsappUrl(
                  c.number,
                  order.message +
                    (custom.trim() ? `\n\nDetalhes: ${custom.trim()}` : ""),
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={23} />
                <span>
                  <small>ENVIAR PEDIDO PELO WHATSAPP</small>
                  <strong>+244 {c.label}</strong>
                </span>
                <ArrowUpRight size={21} />
              </a>
            ))}
          </div>
          <small className="muted-small">
            Será aberto o WhatsApp. A encomenda e as condições são confirmadas
            com a equipa.
          </small>
        </Modal>
      )}
      {gallery && (
        <Modal title={gallery.name} onClose={closeGallery} wide>
          <img
            className="gallery-image"
            src={image(gallery.image)}
            alt={`Visualização ampliada: ${gallery.name}`}
          />
          <p className="muted-small">
            Mockup ilustrativo. Personalização e disponibilidade sob consulta.
          </p>
          <button
            className="button button-blue"
            onClick={() => {
              closeGallery();
              openOrder(
                gallery.message ||
                  `Olá! Tenho interesse em ${gallery.name.toLowerCase()}. Gostaria de solicitar informações.`,
                gallery.name,
              );
            }}
          >
            Encomendar pelo WhatsApp <ArrowUpRight size={17} />
          </button>
        </Modal>
      )}
    </MotionConfig>
  );
}
export default App;
