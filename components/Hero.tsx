import { WorldMapDemo } from "./World-map";

function Hero() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <WorldMapDemo />
        </div>
    );
}

export default Hero;