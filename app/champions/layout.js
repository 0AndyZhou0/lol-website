"use client";
import LeagueChampions from "./leagueChampions";
import { useState } from "react";

import "./layout.css"

export default function Layout({ children }) {
    const [page, setPage] = useState(0);

	return (
        <div>
            {children}
            <div className="page-controller">
                <button onClick={() => setPage(page - 1)}>Previous</button>
                <h3>Page: {page}</h3>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
            <LeagueChampions page={page} />
        </div>
	)
}
