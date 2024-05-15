'use client';
import { useState } from 'react';

const UserInput = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !rating) {
      alert('Vänligen ange både titel och betyg.');
      return;
    }
    addMovie({ title, rating: parseInt(rating) });
    setTitle('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>

        <label>Film:</label>
        <input
          type="text"
          placeholder="Titel här..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

      <label>Betyg:</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Välj betyg här...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

      <button id="skickaKnapp" type="submit">Spara film</button>
    </form>
  );
};

export default UserInput;
