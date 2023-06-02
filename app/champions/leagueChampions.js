import Link from "next/link";

async function getChampions() {
    const champions = await fetch("https://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json");
    const json = await champions.json();
    return json.data;
}

export default async function LeagueChampions() {
    let champions = await getChampions();

    const handleClick = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <ul>
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