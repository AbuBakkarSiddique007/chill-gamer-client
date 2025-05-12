import { Fade } from "react-awesome-reveal";
const comingSoonGames = [
    {
        id: 1,
        title: "CyberWorld 2",
        releaseDate: "2025-07-12",
        coverUrl: "https://i.ibb.co/3nSzZs9/5.png",
    },
    {
        id: 2,
        title: "Galaxy Strikers",
        releaseDate: "2025-09-01",
        coverUrl: "https://i.ibb.co/3nSzZs9/5.png",
    },
    {
        id: 3,
        title: "Legends Unite",
        releaseDate: "2025-10-22",
        coverUrl: "https://i.ibb.co/3nSzZs9/5.png",
    },
];

const ComingSoonSection = () => {
    return (
        <section className="bg-slate-800 py-20 px-4">
            <div className="max-w-7xl mx-auto px-4">
                <Fade triggerOnce>
                    <h2 className="text-3xl font-bold mb-8 text-white text-center">Coming Soon</h2>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Fade cascade damping={0.2} triggerOnce>
                        {comingSoonGames.map((game) => (
                            <div
                                key={game.id}
                                className="bg-slate-700 rounded-2xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition duration-300 ease-in-out"
                            >
                                <img
                                    src={game.coverUrl}
                                    alt={game.title}
                                    className="rounded-lg w-full object-contain mb-4 max-h-64"
                                />
                                <h3 className="text-2xl font-semibold text-white text-center">{game.title}</h3>
                                <p className="text-gray-300 text-center">Release: {game.releaseDate}</p>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </section >
    );
};

export default ComingSoonSection;
