import { createCard } from './Card.js';

export function createCarousel(category) {
    const section = document.createElement('div');
    section.className = 'slider-section';

    // HEADER
    const header = document.createElement('div');
    header.className = 'slider-header';

    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    header.appendChild(title);
    section.appendChild(header);

    // CONTAINER (IMPORTANTE)
    const container = document.createElement('div');
    container.className = 'slider-container';

    // BOTÕES DE NAVEGAÇÃO
    const prev = document.createElement('button');
    prev.className = 'slider-nav prev';
    prev.innerHTML = '&#10094;'; // seta esquerda

    const next = document.createElement('button');
    next.className = 'slider-nav next';
    next.innerHTML = '&#10095;'; // seta direita

    // ROW (TRILHO)
    const row = document.createElement('div');
    row.className = 'movie-row';

    category.items.forEach(item => {
        const card = createCard(item);
        row.appendChild(card);
    });

    // EVENTOS
    next.addEventListener('click', () => {
        row.scrollBy({ left: 400, behavior: 'smooth' });
    });

    prev.addEventListener('click', () => {
        row.scrollBy({ left: -400, behavior: 'smooth' });
    });

    // MONTAGEM
    container.appendChild(prev);
    container.appendChild(row);
    container.appendChild(next);

    section.appendChild(container);

    return section;
}