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
        <div className="bg-base-100 rounded-2xl shadow-md overflow-hidden border border-base-content/20 hover:shadow-xl transition duration-300">
            <img
                src={coverUrl}
                alt={title}
                className="w-full h-48 object-contain bg-base-300 p-2"
            />
            <div className="p-4 space-y-1">
                <h2 className="text-lg font-semibold text-base-content">{title}</h2>
                <p className="text-sm text-base-content/70">🎮 Genre: {genre}</p>
                <p className="text-sm text-base-content/70">⭐ Rating: {rating}/10</p>
                <p className="text-sm text-base-content/70">📅 Released: {year}</p>

                <Link
                    to={`/review/${_id}`}
                    className="inline-block mt-3 px-4 py-2 bg-primary text-primary-content rounded-lg text-sm font-medium hover:bg-primary-focus"
                >
                    Explore Details
                </Link>
            </div>
        </div>
    );
};

export default ReviewCard;