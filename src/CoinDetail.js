import React from 'react';

function CoinDetail({ coin }) {
  return (
    <div className="coin-detail">
      <img src={coin.image} alt={coin.name} className="coin-detail-icon" />
      <h2>{coin.name}</h2>
      <h3>${coin.current_price}</h3>
      <p>{coin.description}</p>
      <div className="coin-stats">
        <p>24hr Low: ${coin.low_24h}</p>
        <p>24hr High: ${coin.high_24h}</p>
      </div>
      <div className="coin-chart">
        <h4>Price Change</h4>
        <ul>
          <li>1hr: {coin.price_change_percentage_1h_in_currency}%</li>
          <li>24hr: {coin.price_change_percentage_24h_in_currency}%</li>
          <li>7d: {coin.price_change_percentage_7d_in_currency}%</li>
          <li>14d: {coin.price_change_percentage_14d_in_currency}%</li>
          <li>30d: {coin.price_change_percentage_30d_in_currency}%</li>
          <li>1y: {coin.price_change_percentage_1y_in_currency}%</li>
        </ul>
      </div>
    </div>
  );
}

export default CoinDetail;
