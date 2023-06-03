"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateTest() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const router = useRouter();

    const createTest = async () => {
        const res = await fetch("http://127.0.0.1:8090/api/collections/test/records", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                text: text,
            })
        });
        const test = await res.json();
        console.log(test);

        setTitle("");
        setText("");

        router.refresh();
    }

    return (
        <div>
            <form> 
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Text" value={text} onChange={(e) => setText(e.target.value)} />
                <button type="button" onClick={createTest}>Create Test</button>
            </form>
        </div>
    )
}
