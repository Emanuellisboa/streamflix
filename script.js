// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle'); // botão de alternar tema
const themeIcon = document.querySelector('.theme-icon'); // ícone do tema
const body = document.body; // elemento body

// Verifica se há preferência salva no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme); // aplica o tema salvo
    updateThemeIcon(savedTheme); // atualiza o ícone
}

// Função para alternar tema
function toggleTheme() {
    const currentTheme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode'; // determina tema atual
    const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode'; // alterna

    body.classList.remove(currentTheme); // remove tema antigo
    body.classList.add(newTheme); // adiciona novo tema

    // Salva a preferência no localStorage
    localStorage.setItem('theme', newTheme);

    updateThemeIcon(newTheme); // atualiza ícone
}

// Função para atualizar o ícone
function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'light-mode' ? '☀️' : '🌙'; // sol para light, lua para dark
}

// Função para salvar perfil selecionado
function selectProfile(profileName) {
    // Caminhos absolutos a partir da raiz do site, para funcionarem de qualquer página
    // (a raiz do servidor deve ser a pasta "Netflix")
    const profiles = { // dados dos perfis
        jennifer: {
            nome: 'Jennifer',
            imagem: `/assets/perfil-jennifer.png`
        },
        gurgel: {
            nome: 'Gurgel',
            imagem: `/assets/batman-gurgel.jpg`
        },
        mota: {
            nome: 'Mota',
            imagem: `/assets/emanuel-luffy.jpg`
        }
    };

    const profile = profiles[profileName];
    if (profile) {
        localStorage.setItem('perfilAtivoNome', profile.nome); // salva nome
        localStorage.setItem('perfilAtivoImagem', profile.imagem); // salva imagem
        localStorage.setItem('selectedProfile', profileName); // salva chave
    }
}

// Adicionar event listeners aos links dos perfis
document.addEventListener('DOMContentLoaded', () => { // quando DOM carregar
    const profileLinks = document.querySelectorAll('.profile-link'); // todos os links de perfil

    profileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Extrair o nome do perfil da URL
            const url = new URL(link.href);
            const profileName = url.searchParams.get('profile');
            if (profileName) {
                selectProfile(profileName); // salva o perfil
            }
        });
    });
});

// Event listener para o botão
themeToggle.addEventListener('click', toggleTheme); // alterna tema ao clicar