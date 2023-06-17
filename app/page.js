import LeagueChampions from "./champions/leagueChampions";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p >This is the home page</p>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Secret Link</a>
            <br />
            <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1" 
                    title="Never gonna give you up" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );
}