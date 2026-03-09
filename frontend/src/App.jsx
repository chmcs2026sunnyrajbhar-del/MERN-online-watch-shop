import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import WatchDetailPage from './pages/WatchDetailPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto p-4 max-w-6xl">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<CreatePage />} />
            <Route path="/edit/:id" element={<WatchDetailPage />} />
          </Routes>
        </div>
        <ToastContainer position="bottom-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;
