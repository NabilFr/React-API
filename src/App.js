import React, { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://api.magicthegathering.io/v1/cards', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setCards(data.cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.imageUrl}
          name={card.name}
          rarity={card.rarity}
          text={card.text}
          types={card.types}
        />
      ))}
    </div>
  );
}

export default App;
