# Estado da publicação

## Demo online

**https://grafica-yuri-designer.vercel.app/**

Projecto Vercel: `grafica-yuri-designer`.

Deployment de produção confirmado no estado **READY / PROMOTED**: `dpl_2CKw6bWwznLpVMZciYqQf3Jn6wJ2`, a partir do commit `6cf21bd3b02c38ffb2deceaac7032c5797280e54`.

A página pública foi aberta através da ferramenta de consulta web: devolveu o título, o catálogo, os seis formatos com preços correctos, os kits, a personalização e os dois contactos. A última actualização, com URL canónica, imagem Open Graph absoluta e sitemap, foi republicada no mesmo endereço e confirmada no estado READY / PROMOTED. Este registo posterior altera apenas a documentação, não o código da vitrine.

## GitHub

Código-fonte enviado com sucesso:

**https://github.com/djey-py/graficayuridesigner-/tree/arena/cc6073a3-graficayuridesigner**

A tentativa de criar **um novo** repositório `djey-py/grafica-yuri-designer` foi recusada:

```text
GraphQL: Resource not accessible by integration (createRepository)
```

Por isso, foi utilizado o repositório já ligado à sessão. **Não foi criado o novo repositório pedido.** A integração GitHub precisa de permissão para criar repositórios para concluir essa etapa exacta. Nenhuma outra branch foi criada ou modificada.

## Testes executados

- Build local de produção concluído: `npm run build`.
- **8/8 testes** aprovados no servidor de desenvolvimento.
- **8/8 testes** aprovados no build de produção servido localmente.
- Destinos e texto dos dois contactos WhatsApp, sem envio real de mensagens.
- Os seis preços exactos, actualização dinâmica e mensagens com o formato escolhido.
- Todos os produtos, oferta de cartões, kits e detalhes adicionais.
- Filtros, galeria, navegação, menu mobile e imagens sem falhas.
- Ausência de scroll horizontal em larguras entre 320 e 1920 px.
- Nenhuma excepção JavaScript nos cenários testados.
- `npm audit`: **zero vulnerabilidades**.

## Limite da verificação online

O build e a promoção em produção foram confirmados pela integração Vercel, e a página pública foi lida com sucesso pela ferramenta web. O browser Playwright do ambiente não consegue aceder directamente a domínios Vercel (`net::ERR_CONNECTION_CLOSED`, restrição de rede). Por isso **não foi executada a suite interactiva contra o domínio público**. Os testes desktop e mobile foram feitos contra o mesmo build de produção local.

Não se testou o envio/recepção real de mensagens WhatsApp, nem aparelhos Android/iPhone físicos. A validação dos links não pressupõe confirmação de que cada número tem uma conta WhatsApp activa.

## Configuração

- Framework: Vite / React.
- Instalação: `npm ci`.
- Build: `npm run build`.
- Pasta publicada: `dist`.
- Variáveis de ambiente: nenhuma necessária.
- Fonte do deployment: branch da sessão `arena/cc6073a3-graficayuridesigner`.
- A branch de produção padrão do projecto permanece `main`; esta publicação foi accionada explicitamente da branch da sessão, sem modificar `main`.
- Imagens locais WebP e fontes locais; sem dependência de um CDN de fotografias ou tipografia.
