import Navbar from "@/components/navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <h1>Home</h1>
            <p class="text-white underline">This is the home page</p>
            <a class="text-black" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Secret Link</a>
        </div>
    );
}