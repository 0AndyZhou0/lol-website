"use client";

import { useRouter } from "next/navigation";

export default function RemoveTest({ id }) {
    const router = useRouter();

    const removeTest = async () => {
        const res = await fetch("http://127.0.0.1:8090/api/collections/test/records/"+id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });

        router.refresh();
    }

    return (
        <div>
            <button type="button" onClick={removeTest}>Remove Test</button>
        </div>
    )
}
