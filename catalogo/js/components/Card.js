// importa funções utilitárias compartilhadas
import {
  getYouTubeId,
  getRandomMatchScore,
  getRandomAgeBadge,
  getAgeBadgeClass
} from '../utils.js';

// cria o cartão de filme usando dados do item
export function createCard(item) {
  // elemento raiz do card
  const card = document.createElement('div');
  card.className = 'movie-card';

  // se tiver progresso, adiciona classe extra
  if (item.progress) {
    card.classList.add('has-progress');
  }

  // imagem principal do poster/capa
  const img = document.createElement('img');
  img.src = item.img;
  img.alt = `Movie cover`;

  // iframe que abriga o vídeo (preview)
  const iframe = document.createElement('iframe');
  iframe.frameBorder = '0';
  iframe.allow = 'autoplay; encrypted-media';

  // extrai id do YouTube (utils)
  const videoId = getYouTubeId(item.youtube);

  // ordem: iframe embaixo e imagem por cima (CSS define visual)
  card.appendChild(iframe);
  card.appendChild(img);

  // badge de faixa etária gerada via utils: se o item passar textBadge, usa essa informação;
  // caso contrário, mantém o aleatório antigo.
  const ageBadge = item.textBadge
    ? getAgeBadgeClass(item.textBadge)
    : getRandomAgeBadge();

  // se o item tiver score definido, usa ele; senão usa random
  const matchScore = item.matchScore !== undefined ? item.matchScore : getRandomMatchScore();

  // painel de detalhes com botões e info
  const details = document.createElement('div');
  details.className = 'card-details';
  details.innerHTML = `
    <div class="details-buttons">
      <div class="left-buttons">
        <button class="btn-icon btn-play-icon">
          <i class="fas fa-play" style="margin-left:2px;"></i>
        </button>
        ${item.progress
          ? '<button class="btn-icon"><i class="fas fa-check"></i></button>'
          : '<button class="btn-icon"><i class="fas fa-plus"></i></button>'}
        <button class="btn-icon"><i class="fas fa-thumbs-up"></i></button>
      </div>
      <div class="right-buttons">
        <button class="btn-icon"><i class="fas fa-chevron-down"></i></button>
      </div>
    </div>
    <div class="details-info">
      <span class="match-score">${matchScore}% relevante</span>
      <span class="age-badge ${ageBadge.class}">${ageBadge.text}</span>
      <span class="duration">${item.time || '—'}</span>
      
      <span class="resolution">HD</span>
    </div>
    <div class="details-tags">
      ${(item.tags || ['Sem tags']).map(tag => `<span>${tag}</span>`).join('')}
    </div>
  `;
  card.appendChild(details);

  // barra de progresso se existir progresso no item
  if (item.progress) {
    const pbContainer = document.createElement('div');
    pbContainer.className = 'progress-bar-container';
    const pbValue = document.createElement('div');
    pbValue.className = 'progress-value';
    pbValue.style.width = `${item.progress}%`;
    pbContainer.appendChild(pbValue);
    card.appendChild(pbContainer);
  }

  // efeito hover + delay para iniciar preview de vídeo
  let playTimeout;
  card.addEventListener('mouseenter', () => {
    const rect = card.getBoundingClientRect();
    const windowWidth = window.innerWidth;

    // desloca o card para o lado quando está perto das bordas
    if (rect.left < 100) {
      card.classList.add('origin-left');
    } else if (rect.right > windowWidth - 100) {
      card.classList.add('origin-right');
    }

    // 600ms de delay antes de carregar preview
    playTimeout = setTimeout(() => {
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`;
      iframe.classList.add('playing');
      img.classList.add('playing-video');
    }, 600);
  });

  // Remove o preview quando sai do hover
  card.addEventListener('mouseleave', () => {
    clearTimeout(playTimeout);
    iframe.classList.remove('playing');
    img.classList.remove('playing-video');
    iframe.src = '';
    card.classList.remove('origin-left');
    card.classList.remove('origin-right');
  });

  // retorna o card pronto para ser exibido
  return card;
}
