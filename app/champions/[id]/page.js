import { use } from "react";

async function getChampionBlurb(id) {
    const champions = await fetch("https://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json");
    const json = await champions.json();
    console.log(json.data[id]);
    return json.data[id]["blurb"];
}

export default function Page({ params }) {
    let id = params.id;
    let champion_blurb = use(getChampionBlurb(id));

    return (
        <div>
            <h1>Champions</h1>
            <h2>Selected Champion: {id}</h2>
            <p>{champion_blurb}</p>
        </div>
    );
}