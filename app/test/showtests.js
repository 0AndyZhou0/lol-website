import RemoveTest from "./removetest";
import PocketBase from 'pocketbase';



export default async function Page() {
    const getTests = async () => {
        const res = await fetch("http://127.0.0.1:8090/api/collections/test/records");
        const tests = await res.json();
        // console.log(tests.items);
        return tests.items;
    }

    const tests = await getTests();

    if (!tests) {
        return <div>No tests</div>
    }

    return (
        tests.map((test) => (
            <div key={test.id}>
                <h2>{test.title}</h2>
                <p>{test.text}</p>
                <RemoveTest id={test.id} />
            </div>
        ))
    )
}
