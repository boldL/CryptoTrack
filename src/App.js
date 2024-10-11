import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { fetchCryptos } from './api';
import CoinDetail from './CoinDetail';
import './App.css';

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(() => {
    const getCryptos = async () => {
      const data = await fetchCryptos();
      setCryptos(data);
    };
    getCryptos();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="/logo.png" alt="CryptoTrack Logo" className="App-logo" />
          <h1>CryptoTrack</h1>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="label-box">
                  <span>#</span>
                  <span>Coin</span>
                  <span>Price</span>
                  <span>24h</span>
                  <span>Volume</span>
                  <span>Mkt Cap</span>
                </div>
                <ul className="crypto-list">
                  {cryptos.map((crypto, index) => (
                    <li key={crypto.id} className="crypto-item">
                      <Link to={`/coin/${crypto.id}`} className="crypto-button" onClick={() => setSelectedCoin(crypto)}>
                        <span>{index + 1}</span>
                        <img src={crypto.image} alt={crypto.name} className="crypto-icon" />
                        <span>${crypto.current_price}</span>
                        <span>{crypto.price_change_percentage_24h}%</span>
                        <span>${crypto.total_volume}</span>
                        <span>${crypto.market_cap}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            }
          />
          <Route path="/coin/:id" element={selectedCoin && <CoinDetail coin={selectedCoin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
