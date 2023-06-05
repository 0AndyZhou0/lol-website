import Link from "next/link";
import "./leagueChampions.css"

async function getChampions() {
    let version = "13.11.1"
    const naversions = await fetch("https://ddragon.leagueoflegends.com/realms/na.json");
    const naversionslist = await naversions.json();
    // console.log(naversionslist.v)
    version = naversionslist.v;
    const champions = await fetch("https://ddragon.leagueoflegends.com/cdn/" + version + "/data/en_US/champion.json");
    const json = await champions.json();
    return json.data;
}

export default async function LeagueChampions({page}) {
    let champions = await getChampions();

    return (
        <div>
            <ul className="grid">
                { Object.keys(champions).slice(page*20, (page+1)*20).map((champion) => (
                    <li key={champions[champion]["id"]}>{
                        <Link href={`/champions/${champions[champion]["id"]}`}>
                            <img src={"https://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/" + champion + ".png"} />
                            {champions[champion]["name"]}
                        </Link>
                    }</li>
                ))}
            </ul>
        </div>
    );
}