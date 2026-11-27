export const contacts = [
  { number: "244924814196", label: "924 814 196" },
  { number: "244953220160", label: "953 220 160" },
];
export const genericMessage =
  "Olá! Encontrei o vosso website e gostaria de personalizar um produto. Podem ajudar-me?";
export const cardMessage =
  "Olá! Tenho interesse na oferta de 50 cartões laminados com design grátis. Gostaria de saber mais informações.";
export const badgeMessage =
  "Olá! Gostaria de solicitar informações sobre crachás personalizados. Tenho interesse numa encomenda de pelo menos 10 unidades.";
export const whatsappUrl = (number, message) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
export const categories = [
  "Todos",
  "Vestuário",
  "Brindes",
  "Identificação",
  "Impressão gráfica",
  "Quadros",
];
export const prices = [
  { format: "A5", price: "5.000" },
  { format: "A4", price: "7.000" },
  { format: "A3", price: "10.000" },
  { format: "A2", price: "18.500" },
  { format: "A1", price: "25.000" },
  { format: "A0", price: "65.000" },
];
export const products = [
  {
    id: "tshirt",
    name: "T-shirts personalizadas",
    category: "Vestuário",
    description: "Vista a sua ideia. Uma peça única, com a sua identidade.",
    detail: "Design ao seu gosto",
    image: "tshirt",
    tag: "O seu estilo",
  },
  {
    id: "mug",
    name: "Chávenas personalizadas",
    category: "Brindes",
    description: "Um presente especial, para acompanhar todos os dias.",
    detail: "Fotografias, nomes e mensagens",
    image: "mug",
    tag: "Para oferecer",
  },
  {
    id: "cap",
    name: "Chapéus personalizados",
    category: "Vestuário",
    description: "A sua marca em destaque, em qualquer ocasião.",
    detail: "Personalização à sua medida",
    image: "cap",
  },
  {
    id: "cards",
    name: "Cartões laminados",
    category: "Impressão gráfica",
    description:
      "Uma primeira impressão que fica. Design grátis na oferta de 50 cartões.",
    detail: "Resistentes à água e ao calor",
    image: "cards",
    tag: "Design grátis",
    message: cardMessage,
  },
  {
    id: "tumbler",
    name: "Copos acrílicos",
    category: "Brindes",
    description: "Mais cor e personalidade para os seus eventos.",
    detail: "Para festas e ocasiões especiais",
    image: "tumbler",
  },
  {
    id: "badge",
    name: "Crachás personalizados",
    category: "Identificação",
    description: "Identificação profissional com a imagem da sua equipa.",
    detail: "Com numeração · Mínimo 10 unidades",
    image: "badge",
    message: badgeMessage,
  },
  {
    id: "vest",
    name: "Coletes personalizados",
    category: "Vestuário",
    description: "Uma equipa bem identificada, uma marca mais presente.",
    detail: "Para empresas e equipas",
    image: "vest",
  },
  {
    id: "frame",
    name: "Quadros digitais e em PVC",
    category: "Quadros",
    description: "As suas melhores memórias merecem um lugar especial.",
    detail: "Formatos A5 a A0",
    image: "frames",
    price: "Desde 5.000 Kz",
  },
  {
    id: "gifts",
    name: "Outros brindes personalizados",
    category: "Brindes",
    description: "Tem uma ideia diferente? Vamos explorar as possibilidades.",
    detail: "Disponibilidade sob consulta",
    image: "birthday",
  },
];
export const kits = [
  {
    name: "Kit de Aniversário",
    image: "birthday",
    description: "Festas com personalidade.",
    items: "Sugestões: elementos temáticos, brindes e lembranças.",
  },
  {
    name: "Kit de Casamento",
    image: "cards",
    description: "Detalhes para o vosso grande dia.",
    items: "Sugestões: lembranças e materiais gráficos para a cerimónia.",
  },
  {
    name: "Kit de Pedido",
    image: "mug",
    description: "Uma pergunta. Um momento único.",
    items: "Sugestões: produtos e elementos decorativos personalizados.",
  },
  {
    name: "Brindes para Funcionários",
    image: "badge",
    description: "Valorize quem faz parte da equipa.",
    items: "Sugestões: identificação, produtos e brindes corporativos.",
  },
];
