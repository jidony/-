
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import MemorialHall from './pages/MemorialHall';
import { FuneralTrack } from './types';

const App: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<FuneralTrack | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route 
            path="/" 
            element={<Home onSelectTrack={(track) => setSelectedTrack(track)} />} 
          />
          <Route 
            path="/booking" 
            element={
              <Booking 
                track={selectedTrack || FuneralTrack.DIRECT} 
                onComplete={() => setIsBooked(true)} 
              />
            } 
          />
          <Route 
            path="/dashboard" 
            element={<Dashboard />} 
          />
          <Route 
            path="/memorial" 
            element={<MemorialHall />} 
          />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
