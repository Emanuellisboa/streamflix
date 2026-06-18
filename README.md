<!-- Este é o README do projeto Netflix Profile Selector -->
<!-- Descreve funcionalidades, estrutura e como usar -->

# Netflix Profile Selector

<!-- Título principal do projeto -->

Uma página de seleção de perfis inspirada na Netflix com dark/light mode.

<!-- Descrição breve -->

## 🚀 Funcionalidades

<!-- Lista de funcionalidades implementadas -->
- ✅ Seleção de perfis com hover effects
- ✅ Dark/Light mode toggle
- ✅ Design responsivo (desktop, tablet, mobile)
- ✅ Animações suaves
- ✅ Acessibilidade com ARIA labels
- ✅ Links para catálogo personalizado por perfil

## 📱 Responsividade

<!-- Detalhes sobre responsividade -->
- **Desktop**: Perfis em grid responsivo (até 3 colunas)
- **Tablet**: Sempre 2 colunas
- **Mobile**: Sempre 2 colunas

## 🛠️ Tecnologias

<!-- Tecnologias usadas -->
- HTML5 semântico
- CSS3 com variáveis CSS
- JavaScript vanilla
- Design inspirado na Netflix

## 📂 Estrutura do Projeto

<!-- Estrutura de pastas -->
```
netflix/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── perfil-jennifer.png
    ├── batman-gurgel.jpg
    └── emanuel-luffy.jpg
```

## 🚀 Como usar

<!-- Instruções de uso -->
1. Clone o repositório
2. Abra o `index.html` no navegador
3. Clique no emoji 🌙/☀️ para alternar entre dark/light mode
4. Clique em qualquer perfil para acessar o catálogo personalizado

## 🔗 Links dos Perfis

<!-- Explicação dos links -->
Cada perfil redireciona para o catálogo com um parâmetro específico:
- **Jennifer**: `catalogo/catalogo.html?profile=jennifer`
- **Gurgel**: `catalogo/catalogo.html?profile=gurgel`
- **Mota**: `catalogo/catalogo.html?profile=mota`

O perfil selecionado é salvo no `localStorage` para personalização.

## 🖼️ Imagens dos Perfis

<!-- Detalhes sobre imagens -->
As imagens são carregadas usando caminhos absolutos baseados na origem do site:
- Funciona tanto localmente quanto no GitHub Pages
- As imagens ficam na pasta `assets/` na raiz do projeto
- O catálogo acessa as imagens usando `window.location.origin + '/assets/nome-imagem.ext'`

### 📤 Fazendo Upload no GitHub

<!-- Instruções para GitHub -->
Para que as imagens apareçam no GitHub Pages:

1. **Certifique-se** de que as imagens estão na pasta `assets/`
2. **Faça commit** e **push** das imagens junto com os outros arquivos
3. **Aguarde** alguns minutos para o GitHub Pages atualizar
4. **Verifique** se as imagens estão acessíveis em: `https://seu-usuario.github.io/seu-repo/assets/`

### 🔧 Solução de Problemas

<!-- Troubleshooting -->
Se as imagens não carregarem:
- Verifique se os arquivos estão na pasta `assets/`
- Certifique-se de que foram feitos commit e push
- Use a URL completa do GitHub Pages para testar

## 🔧 Problemas comuns

<!-- Problemas comuns -->
### Imagens não aparecem
- Verifique se a pasta `assets/` existe
- Certifique-se de que os caminhos estão corretos: `./assets/nome-imagem.ext`

### Responsivo não funciona
- Verifique se a meta tag viewport está presente no HTML
- Teste em diferentes navegadores
- Limpe o cache do navegador

### Dark mode não funciona
- Verifique se o JavaScript está carregado
- Certifique-se de que o `localStorage` está habilitado

## 📝 Notas

<!-- Notas finais -->
- O projeto usa `localStorage` para salvar a preferência de tema
- As imagens são placeholders - substitua pelas suas próprias
- Compatível com navegadores modernos

## 🎨 Personalização

Para alterar cores, edite as variáveis CSS em `:root`:
```css
:root {
    --netflix-red: #E50914;
    --dark-bg: #141414;
    --secondary-bg: #221f1f;
    --text-primary: #ffffff;
}
```