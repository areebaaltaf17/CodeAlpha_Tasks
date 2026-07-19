function filterSongs() {
    let query = document.getElementById('searchBar').value.toLowerCase();
    let cards = document.querySelectorAll('.music-card');

    cards.forEach(card => {
        let singer = card.getAttribute('data-singer').toLowerCase();
        card.style.display = singer.includes(query) ? "block" : "none";
    });
}