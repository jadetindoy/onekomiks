import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/navbar.tsx/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Add your child routes here */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;