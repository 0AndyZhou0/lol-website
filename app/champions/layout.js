import LeagueChampions from "./leagueChampions";

export default function Layout({ children }) {
	return (
        <div>
            {children}
            <LeagueChampions />
        </div>
	)
}
