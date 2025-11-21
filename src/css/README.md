# Guia do Bairro

O **Guia do Bairro** é uma plataforma digital desenvolvida com o objetivo de conectar moradores e comerciantes locais, facilitando a descoberta de serviços, produtos e profissionais dentro da comunidade.

## Equipe de Desenvolvimento
- Bruno Reis  
- Cauã Torbes Vieira  
- William Oliveira  

## Objetivo do Projeto
- Proporcionar visibilidade digital para pequenos negócios e profissionais liberais.  
- Facilitar a busca de serviços e produtos por moradores do bairro de forma rápida e confiável.  
- Contribuir para o fortalecimento da economia local.  

## Estrutura do Projeto
- **index.html** – Página inicial com mapa interativo (em construção) e categorias de comércio.  
- **catalogo.html** – Catálogo de negócios organizados por categorias.  
- **registrocomercio.html** – Página de cadastro de comércio.  
- **padaria.html** – Página individual de um comércio fictício (Padaria do João).  
- **oficina.html** – Página individual de um comércio fictício (Oficina Mecânica Souza).  
- **sobre.html** – Página institucional "Sobre Nós".  
- **ajuda.html** – Página de Perguntas Frequentes (FAQ).  
- **politicadeprivacidade.html** – Página de Política de Privacidade.  

## Funcionalidades
- **Mapa interativo**: espaço reservado para integração futura com APIs de mapas (ex.: Google Maps, Leaflet).  
- **Catálogo categorizado**: organização dos negócios por categorias como Alimentação, Saúde e Bem-Estar, Serviços Domésticos, Educação e Outros.  
- **Páginas individuais de negócios**: cada comércio possui uma página com descrição, informações de contato e horário de funcionamento.  
- **Formulário de registro**: interface inicial para simular o cadastro de novos comércios.  
- **FAQ e páginas institucionais**: fornecem informações adicionais sobre o projeto e suporte ao usuário.  

**Arquivos modificados nesta versão**
- `src/index.html` — adicionada integração com Leaflet e carregamento de marcadores salvos.
- `src/registrocomercio.html` — formulário atualizado com mapa de seleção de coordenadas e salvamento em `localStorage`.
- `src/js/validacao.js` — validação de formulário e mensagens de erro.

**Estrutura relevante**
- `src/index.html`: página inicial com o mapa interativo.
- `src/registrocomercio.html`: formulário para registrar um comércio e escolher sua localização no mapa.
- `src/js/validacao.js`: validação do formulário de registro.
- `src/js/main.js`: scripts da aplicação.

**Fluxo de teste — registrar um comércio e ver no mapa**
1. Abra `registrocomercio.html` no navegador (via servidor local): `http://localhost:8000/registrocomercio.html`.
2. Preencha o formulário:
	 - Nome do comércio (obrigatório).
	 - Categoria, descrição, horário, contato.
3. Clique no mapa pequeno para definir a localização — isso preenche automaticamente `latitude` e `longitude`.
4. Clique em **Cadastrar e adicionar ao mapa**.
5. Você será redirecionado para `index.html` e verá o novo marcador no mapa junto com os exemplos.

**Como limpar os registros salvos**
Abra o Console do navegador (F12) e rode:

```javascript
localStorage.removeItem('comercios');
location.reload();
```