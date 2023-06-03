import CreateTest from "./createtest";
import RemoveTest from "./removetest";
import PocketBase from 'pocketbase';

async function getTests() {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const tests = await pb.collection('test').getFullList({});
    console.log(tests);
    return tests;
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
