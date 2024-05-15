import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StockDetails = () => {
  const { symbol: urlSymbol } = useParams(); // Get the symbol parameter from the URL
  const [symbol, setSymbol] = useState(urlSymbol || 'IBM'); // Default to 'IBM' if no symbol in URL
  const [latestPrice, setLatestPrice] = useState(null);
  const [searchSymbol, setSearchSymbol] = useState('');

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=8UG4CL12BDZGG4OM`);
        const latestPrice = response.data['Time Series (5min)'] ? response.data['Time Series (5min)'][Object.keys(response.data['Time Series (5min)'])[0]]['4. close'] : null;
        setLatestPrice(latestPrice);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
  }, [symbol]);

  const handleSearch = async () => {
    setSymbol(searchSymbol.toUpperCase());
  };

  return (
    <div style={styles.container}>
      <h1>Stock Details for {symbol}</h1>
      <div>
        <input
          type="text"
          value={searchSymbol}
          onChange={(e) => setSearchSymbol(e.target.value)}
          placeholder="Enter stock symbol"
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>Search</button>
      </div>
      <div className="stock-price-box" style={styles.stockBox}>
        <h2>Latest Price:</h2>
        <p>{latestPrice ? `$${latestPrice}` : 'Fetching data...'}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh', // Set height to 100% of the viewport height
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    marginRight: '8px',
    border: '1px solid #ccc',
    fontSize: '16px'
  },
  button: {
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    marginLeft: '8px'
  },
  stockBox: {
    backgroundColor: '#f0f0f0', // Set your desired background color
    padding: '10px', // Add padding for spacing
    borderRadius: '4px', // Add border radius for rounded corners
    width: '200px', // Set width of the box
    textAlign: 'center', // Center-align text
    marginTop: '20px' // Add margin top
  }
};

export default StockDetails;
