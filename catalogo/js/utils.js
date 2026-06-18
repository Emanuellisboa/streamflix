// extrai o ID do vídeo do YouTube da URL
export function getYouTubeId(url) {
    if (!url) return "7RUA0IOfar8"; // fallback se não houver URL
    if (url.includes('v=')) {
        return url.split('v=')[1].split('&')[0]; // para URLs com parâmetro v=
    }
    return url.split('/').pop(); // para URLs curtas
}

// gera um score de match aleatório entre 80-99%
export function getRandomMatchScore() {
    return Math.floor(Math.random() * 20 + 80);
}

// gera badge de idade aleatório (A16 ou 16)
export function getRandomAgeBadge() {
    return Math.random() > 0.5 ? { text: 'A16', class: 'red-accent' } : { text: '16', class: 'red-accent' };
}

// converte texto de faixa etária para classe de cor
export function getAgeBadgeClass(textBadge) {
    if (!textBadge) return { text: 'Livre', class: 'green-accent' };

    const onlyNumber = parseInt(String(textBadge).replace(/\D/g, ''), 10);
    if (Number.isNaN(onlyNumber)) return { text: textBadge, class: 'gray-accent' };

    let cssClass = 'green-accent';
    if (onlyNumber < 10) cssClass = 'green-accent';
    else if (onlyNumber <= 11) cssClass = 'blue-accent';
    else if (onlyNumber <= 13) cssClass = 'yellow-accent';
    else if (onlyNumber <= 15) cssClass = 'orange-accent';
    else if (onlyNumber <= 17) cssClass = 'red-accent';
    else cssClass = 'black-accent';

    return { text: textBadge, class: cssClass };
}
