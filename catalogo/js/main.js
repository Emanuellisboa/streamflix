// importa dados das categorias e função para criar carrosséis
import { catalogs } from './data.js';
import { createCarousel } from './components/Carousel.js';

// executa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Dados dos perfis - caminhos absolutos para funcionar do catálogo
    const baseUrl = window.location.origin;
    const profiles = {
        jennifer: {
            nome: 'Jennifer',
            imagem: `${baseUrl}/assets/perfil-jennifer.png`
        },
        gurgel: {
            nome: 'Gurgel',
            imagem: `${baseUrl}/assets/batman-gurgel.jpg`
        },
        mota: {
            nome: 'Mota',
            imagem: `${baseUrl}/assets/emanuel-luffy.jpg`
        }
    };

    // Tentar obter perfil do localStorage primeiro
    let nomePerfil = localStorage.getItem('perfilAtivoNome');
    let imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    // Se não encontrou no localStorage, tentar obter da URL
    if (!nomePerfil || !imagemPerfil) {
        const urlParams = new URLSearchParams(window.location.search);
        const profileParam = urlParams.get('profile');

        if (profileParam && profiles[profileParam]) {
            const profile = profiles[profileParam];
            nomePerfil = profile.nome;
            imagemPerfil = profile.imagem;

            // Salvar no localStorage para futuras visitas
            localStorage.setItem('perfilAtivoNome', nomePerfil);
            localStorage.setItem('perfilAtivoImagem', imagemPerfil);
            localStorage.setItem('selectedProfile', profileParam);
        }
    }

    // Atualizar a interface com os dados do perfil
    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');

        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    // Conteúdo do catálogo
    const container = document.getElementById('main-content');
    if (container) {
        // Pegar o perfil selecionado
        const selectedProfile = localStorage.getItem('selectedProfile') || 'jennifer'; // padrão para Jennifer se não encontrar
        const categories = catalogs[selectedProfile] || catalogs.jennifer; // usar catálogo do perfil ou padrão

        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
