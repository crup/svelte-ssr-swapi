import { isSSR } from "../store";

export default function ({ path }) {
    let isSSRPage;
    const baseUrl = "https://swapi.dev/api";
    const apiPromise = this.fetch(`${baseUrl}${path}/`);

    const unsubscribe = isSSR.subscribe(value => {
        isSSRPage = value;
    });
    unsubscribe();
    
    if(!isSSRPage) {
        return { cards: apiPromise };
    }

    return apiPromise.then(r => r.json())
        .then(cards => {
            return { cards: cards.results };
        }
    );
}