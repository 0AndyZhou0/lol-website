import { use } from "react";

async function getChampionBlurb(id) {
    const champion = await fetch("https://ddragon.leagueoflegends.com/cdn/13.11.1/data/en_US/champion/" + id + ".json");
    const json = await champion.json();
    // console.log(json.data);
    return json.data[id].blurb;
}

async function getChampionImage(id) {
    const champion = "https://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/" + id + ".png"
    return champion;
}

export default function Page({ params }) {
    let id = params.id;
    let champion_blurb = use(getChampionBlurb(id));
    let champion_image = use(getChampionImage(id));

    return (
        <div>
            <h1>Champions</h1>
            <img src={champion_image} />
            <h2>Selected Champion: {id}</h2>
            <p>{champion_blurb}</p>
        </div>
    );
}