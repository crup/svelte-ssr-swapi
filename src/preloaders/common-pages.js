import { isSSR } from "../store";

export default function ({ path }) {
    let isSSRPage;

    const unsubscribe = isSSR.subscribe(value => {
        isSSRPage = value;
    });
    unsubscribe();
    
    if(!isSSRPage) {
        return { cards: undefined };
    }

    const baseUrl = "https://swapi.co/api";
    return this.fetch(`${baseUrl}${path}`)
        .then(r => r.json())
        .then(cards => {
            return { cards: cards.results };
        }
    );
}