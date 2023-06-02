import CreateTest from "./createtest";
import RemoveTest from "./removetest";

async function getTests() {
    const res = await fetch("http://127.0.0.1:8090/api/collections/test/records", {cache: "no-store"});
    const tests = await res.json();
    return tests.items;
}

export default async function Page() {
    const tests = await getTests();

    return (
        <div>
            <h1>Page</h1>
            <CreateTest />
            { tests && tests.map((test) => (
                <div key={test.id}>
                    <h2>{test.title}</h2>
                    <p>{test.text}</p>
                    <RemoveTest id={test.id} />
                </div>
            ))}
        </div>
    )
}
