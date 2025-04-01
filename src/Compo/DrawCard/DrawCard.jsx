import React, { useState } from 'react';
import axios from 'axios';

const DrawCard = () => {
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const drawCard = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/blackjack/draw-card/');
      setCard(response.data.card);
    } catch (err) {
      setError('Failed to draw card');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={drawCard} disabled={loading}>
        {loading ? 'Drawing...' : 'Draw Card'}
      </button>
      {card && (
        <div>
          <p>Card drawn: {card.rank} of {card.suit}</p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default DrawCard;
