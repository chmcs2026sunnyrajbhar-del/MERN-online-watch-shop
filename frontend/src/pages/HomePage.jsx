import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

const HomePage = () => {
    const [watches, setWatches] = useState([]);
    const [loading, setLoading] = useState(true);

    // Filters and sort state
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [sort, setSort] = useState('price');
    const [order, setOrder] = useState('asc');

    const fetchWatches = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams();
            if (brand) params.append('brand', brand);
            if (category) params.append('category', category);
            if (type) params.append('type', type);
            if (sort) params.append('sort', sort);
            if (order) params.append('order', order);

            const { data } = await axios.get(`http://localhost:3000/api/watches?${params.toString()}`);
            if (data.success) {
                setWatches(data.data);
            }
        } catch (error) {
            toast.error('Failed to fetch watches');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWatches();
    }, [brand, category, type, sort, order]);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this watch?')) {
            try {
                const { data } = await axios.delete(`http://localhost:3000/api/watches/${id}`);
                if (data.success) {
                    toast.success('Watch deleted successfully');
                    fetchWatches(); // Refresh list
                }
            } catch (error) {
                toast.error('Failed to delete watch');
            }
        }
    };

    return (
        <div className="py-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h1 className="text-4xl font-black text-base-content tracking-tight">Shop Watches</h1>
                <Link to="/add" className="btn btn-primary shadow-lg hover:shadow-primary/50 transition-shadow">Add New Watch</Link>
            </div>

            {/* Filters & Sorting */}
            <div className="bg-base-200/50 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-base-300 mb-8 flex flex-wrap gap-4 items-end">
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text font-medium">Brand</span></label>
                    <input type="text" placeholder="e.g. Rolex" className="input input-bordered" value={brand} onChange={(e) => setBrand(e.target.value)} />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text font-medium">Category</span></label>
                    <select className="select select-bordered" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">All Categories</option>
                        <option value="Analog">Analog</option>
                        <option value="Digital">Digital</option>
                        <option value="Smartwatch">Smartwatch</option>
                        <option value="Chronograph">Chronograph</option>
                        <option value="Mechanical">Mechanical</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text font-medium">Type</span></label>
                    <select className="select select-bordered" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="">All Types</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text font-medium">Sort By Price</span></label>
                    <select className="select select-bordered" value={order} onChange={(e) => setOrder(e.target.value)}>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>
            </div>

            {/* Watch Grid */}
            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
            ) : watches.length === 0 ? (
                <div className="text-center py-16 bg-base-200/50 backdrop-blur-sm rounded-2xl shadow-sm border border-base-300">
                    <h2 className="text-2xl font-bold text-base-content/70 mb-3">No watches found</h2>
                    <p className="text-base-content/50">Try adjusting your filters or add a new watch.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {watches.map(watch => (
                        <BookCard key={watch._id} watch={watch} onDelete={handleDelete} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;
