import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Counter from './pages/Counter';
import './App.css';

const Home: React.FC = () => (
  <>
    <div>
      React19学習用です。
    </div>
  </>
);

const App: React.FC = () => (
  <Router>
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </main>
  </Router>
);

export default App;
