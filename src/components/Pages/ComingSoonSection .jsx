import React from "react";

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
        <section className="py-10 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">🎮 Coming Soon</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {comingSoonGames.map((game) => (
                        <div
                            key={game.id}
                            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center"
                        >
                            <img
                                src={game.coverUrl}
                                alt={game.title}
                                className="rounded-lg w-full h-48 object-cover"
                            />
                            <h3 className="mt-4 text-xl font-semibold">{game.title}</h3>
                            <p className="text-gray-600">Release: {game.releaseDate}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComingSoonSection;
