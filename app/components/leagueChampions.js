import { use } from "react";

async function getChampions() {
    const champions = await fetch("https://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json");
    const json = await champions.json();
    return json.data;
}

export default function LeagueChampions() {
    let champions = use(getChampions());

    return (
        <div>
            <h1>Champions</h1>
            <ul>
                { Object.keys(champions).map((champion) => (
                        <li key={champion}>{champion}</li>
                ))}
            </ul>
        </div>
    );
}