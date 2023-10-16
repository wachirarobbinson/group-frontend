import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Homepage from './pages/Homepage';
import EventsPage from './pages/EventsPage';
import { useEffect } from 'react';


function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken && location.pathname !== '/login') {
      // User is not authenticated, redirect to login
      navigate('/login');
    }
  }, [location, navigate]);

  useEffect(() => {
    let title = '';
    let metaDescription = '';

    switch (location.pathname) {
      case '/':
        title = '';
        metaDescription = '';
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/homepage" element={<Homepage />} />
      <Route path="/events" element={<EventsPage />} />
    </Routes>
  );
}

export default App;
