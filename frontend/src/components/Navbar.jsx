import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar sticky top-0 z-50 bg-base-100/90 backdrop-blur-md shadow-lg border-b border-base-200">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-2xl text-primary font-black tracking-tight hover:scale-105 transition-transform">WatchShop</Link>
            </div>
            <div className="flex-none gap-2">
                <ul className="menu menu-horizontal px-1 font-semibold text-base-content/80">
                    <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                    <li><Link to="/add" className="hover:text-primary transition-colors">Add Watch</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
