import Navbar from "../components/layout/navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Atmos Racing League</h1>
                    <p className="mt-2">Feel the pressure</p>
                </div>
            </div>
        </div>
    );
}