import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TreeViewer from './TreeViewer';
import Dashboard from './Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/tree/:id" element={<TreeViewer/>} />
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
};

export default App;
