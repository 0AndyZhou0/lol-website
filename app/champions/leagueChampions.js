import Link from "next/link";
import "./leagueChampions.css"

async function getChampions() {
    let version = "13.11.1"
    const versions = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
    const versionslist = await versions.json();
    version = versionslist[0];
    const champions = await fetch("https://ddragon.leagueoflegends.com/cdn/" + version + "/data/en_US/champion.json");
    const json = await champions.json();
    return json.data;
}

export default async function LeagueChampions() {
    let champions = await getChampions();

    return (
        <div>
            <ul className="grid">
                { Object.keys(champions).map((champion) => (
                    <li key={champions[champion]["id"]}>{
                        <Link href={`/champions/${champions[champion]["id"]}`}>
                            {champions[champion]["name"]}
                        </Link>
                    }</li>
                ))}
            </ul>
        </div>
    );
}