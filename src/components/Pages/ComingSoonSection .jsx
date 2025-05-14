import { Fade } from "react-awesome-reveal";

const comingSoonGames = [
    {
        id: 1,
        title: "Call of Duty",
        releaseDate: "October 25, 2019",
        coverUrl: "https://wallpapers.com/images/featured/call-of-duty-pictures-7lrqnchbx478ucgg.jpg",
    },
    {
        id: 2,
        title: "Battlefield 2042",
        releaseDate: "November 19, 2021",
        coverUrl: "https://coop-land.ru/uploads/posts/2024-07/1720549053_bf2042-tutorial-survive-deadspace-05.jpg",
    },
    {
        id: 3,
        title: "Squad",
        releaseDate: "September 23, 2020",
        coverUrl: "https://m.media-amazon.com/images/I/71+bAYWLVvL._AC_UF1000,1000_QL80_.jpg",
    },
];

const ComingSoonSection = () => {
    return (
        <section className="bg-base-200 py-20 px-4">
            <div className="max-w-7xl mx-auto px-4">
                <Fade triggerOnce>
                    <h2 className="text-3xl font-bold mb-12 text-base-content text-center">Coming Soon</h2>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <Fade cascade damping={0.2} triggerOnce>
                        {comingSoonGames.map((game) => (
                            <div
                                key={game.id}
                                className="bg-base-100 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-base-300 group"
                            >
                                <img
                                    src={game.coverUrl}
                                    alt={game.title}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="p-6 flex flex-col items-center text-center">
                                    <h3 className="text-xl font-semibold text-base-content mb-1">{game.title}</h3>
                                    <p className="text-base-content/70">Release Date: {game.releaseDate}</p>
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default ComingSoonSection;
