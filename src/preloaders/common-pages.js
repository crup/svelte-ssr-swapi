export default function ({ path }) {
    let isLoading = false;
    const baseUrl = "https://swapi.co/api";
    return this.fetch(`${baseUrl}${path}`)
        .then(r => r.json())
        .then(cards => {
            return { cards: cards.results, isLoading };
        }
    );
}