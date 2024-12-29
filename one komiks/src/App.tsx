import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/navbar.tsx/Layout';
import BeOne from './pages/BeOne';
import Trending from './pages/trending';
import Komiks from './pages/Komiks';
import Genre from './pages/Genre';
import Rankings from './pages/Rankings';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trending />} />
          <Route path="beone" element={<BeOne />} />
          <Route path="komiks" element={<Komiks />} />
          <Route path="genre" element={<Genre />} />
          <Route path="ranking" element={<Rankings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;