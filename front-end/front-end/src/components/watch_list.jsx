import React from 'react';

const Watchlist = ({ watchlist }) => {
  return (
    <div style={styles.watchlist}>
      <h2>Watchlist</h2>
      {watchlist.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

const styles = {
  watchlist: {
    marginTop: '20px'
  }
};

export default Watchlist;
