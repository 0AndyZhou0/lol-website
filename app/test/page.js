import CreateTest from "./createtest";
import RemoveTest from "./removetest";
import ShowTests from "./showtests";

export default async function Page() {
    return (
        <div>
            <h1>Page</h1>
            <CreateTest />
            <ShowTests />
        </div>
    )
}
