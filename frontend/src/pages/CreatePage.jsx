import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreatePage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        brand: '',
        price: '',
        description: '',
        category: '',
        image: '',
        type: 'men',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.post('http://localhost:3000/api/watches', formData);
            if (data.success) {
                toast.success('Watch added successfully!');
                navigate('/');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to add watch');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto py-8">
            <h1 className="text-4xl font-black text-center mb-8 text-base-content tracking-tight">Add New Watch</h1>

            <div className="bg-base-200/50 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-base-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Title</span></label>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} required className="input input-bordered w-full" placeholder="Watch Model Name" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Brand</span></label>
                            <input type="text" name="brand" value={formData.brand} onChange={handleChange} required className="input input-bordered w-full" placeholder="e.g. Casio, Rolex" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Price ($)</span></label>
                            <input type="number" name="price" value={formData.price} onChange={handleChange} required min="0" step="0.01" className="input input-bordered w-full" placeholder="0.00" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Category</span></label>
                            <select name="category" value={formData.category} onChange={handleChange} required className="select select-bordered w-full">
                                <option value="" disabled>Select Category</option>
                                <option value="Analog">Analog</option>
                                <option value="Digital">Digital</option>
                                <option value="Smartwatch">Smartwatch</option>
                                <option value="Chronograph">Chronograph</option>
                                <option value="Mechanical">Mechanical</option>
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Type</span></label>
                            <select name="type" value={formData.type} onChange={handleChange} required className="select select-bordered w-full">
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="kids">Kids</option>
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Image URL</span></label>
                            <input type="url" name="image" value={formData.image} onChange={handleChange} required className="input input-bordered w-full" placeholder="https://example.com/image.jpg" />
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-semibold">Description</span></label>
                        <textarea name="description" value={formData.description} onChange={handleChange} required className="textarea textarea-bordered h-24" placeholder="Brief description of the watch..."></textarea>
                    </div>

                    <button type="submit" className={`btn btn-primary w-full mt-4 ${loading ? 'loading' : ''}`} disabled={loading}>
                        {loading ? 'Adding...' : 'Save Watch'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePage;
