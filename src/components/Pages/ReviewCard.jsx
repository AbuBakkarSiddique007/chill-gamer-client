import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
    const {
        _id,
        coverUrl,
        title,
        genre,
        rating,
        year,
    } = review;

    return (
        <div className="bg-gradient-to-r from-[#1e293b] to-[#0f172a] text-white rounded-2xl shadow-md overflow-hidden border hover:shadow-xl transition duration-300">
            <img
                src={coverUrl}
                alt={title}
                className="w-full h-48 object-contain bg-slate-900"
            />
            <div className="p-4 space-y-1">
                <h2 className="text-lg font-semibold text-white">{title}</h2>
                <p className="text-sm text-gray-300">🎮 Genre: {genre}</p>
                <p className="text-sm text-gray-300">⭐ Rating: {rating}/5</p>
                <p className="text-sm text-gray-300">📅 Released: {year}</p>

                <Link
                    to={`/review/${_id}`}
                    className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                >
                    Explore Details
                </Link>
            </div>
        </div>
    );
};

export default ReviewCard;
