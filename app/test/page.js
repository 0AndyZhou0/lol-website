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
            { tests.map((test) => (
                <div key={test._id}>
                    <h2>{test.title}</h2>
                    <p>{test.text}</p>
                </div>
            ))}
        </div>
    )
}
