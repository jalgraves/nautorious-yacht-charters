import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import GalleryShell from './pages/GalleryShell';
import GalleryHub from './pages/GalleryHub';
import BoatGallery from './pages/BoatGallery';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryShell />}>
          <Route index element={<GalleryHub />} />
          <Route path=":boatId" element={<BoatGallery />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
