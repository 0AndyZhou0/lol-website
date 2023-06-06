"use client";
import LeagueChampions from "./leagueChampions";
import { useState } from "react";

import "./layout.css"

export default function Layout({ children }) {
    const [page, setPage] = useState(0);

    function prevPage() {
        if(page > 0){
            setPage(page - 1);
        }
    }

    function nextPage() {
        if (page < 8) {
            setPage(page + 1);
        }
    }

	return (
        <div>
            {children}
            <div className="page-controller">
                <button onClick={prevPage}>Previous</button>
                <h3>Page: {page+1}</h3>
                <button onClick={nextPage}>Next</button>
            </div>
            <LeagueChampions page={page} />
        </div>
	)
}
