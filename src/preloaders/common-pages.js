export default function ({ path }) {
    let isLoading = true;
    console.log(isLoading);
    const baseUrl = "https://swapi.co/api";
    return this.fetch(`${baseUrl}${path}`)
        .then(r => r.json())
        .then(cards => {
            isLoading = false;
            console.log(isLoading);
            return { cards: cards.results, isLoading };
        }
    );
}