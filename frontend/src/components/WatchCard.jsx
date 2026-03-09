import { Link } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';

const WatchCard = ({ watch, onDelete }) => {
    return (
        <div className="card bg-base-200/50 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-base-300">
            <figure className="h-48 overflow-hidden bg-base-300 flex items-center justify-center p-4">
                <img
                    src={watch.image}
                    alt={watch.title}
                    className="object-contain h-full w-full rounded-t-xl"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=No+Image' }}
                />
            </figure>
            <div className="card-body p-5">
                <div className="flex justify-between items-start mb-2">
                    <h2 className="card-title text-lg font-bold line-clamp-1" title={watch.title}>
                        {watch.title}
                    </h2>
                    <div className="badge badge-accent badge-sm">{watch.type}</div>
                </div>

                <p className="text-sm text-base-content/60 font-medium">{watch.brand} • {watch.category}</p>

                <p className="text-2xl font-bold text-primary my-2">${watch.price}</p>

                <p className="text-sm text-base-content/70 line-clamp-2 mb-4" title={watch.description}>
                    {watch.description}
                </p>

                <div className="card-actions justify-end mt-auto pt-4 border-t border-base-300">
                    <Link to={`/edit/${watch._id}`} className="btn btn-sm btn-outline btn-info">
                        <FaEdit /> Edit
                    </Link>
                    <button
                        onClick={() => onDelete(watch._id)}
                        className="btn btn-sm btn-outline btn-error"
                    >
                        <FaTrash /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WatchCard;
