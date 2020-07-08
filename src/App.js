import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import { BounceLoader } from 'react-spinners';

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.magicthegathering.io/v1/cards', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setCards(data.cards);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className="flex justify-center mt-32">
          <BounceLoader loading size={150} color={'#123abc'} />
        </div>
      ) : (
        <div className="container mx-auto grid grid-cols-5 gap-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              image={
                card.imageUrl
                  ? card.imageUrl
                  : 'https://vignette.wikia.nocookie.net/magic-lassemblee/images/f/fe/Verso.jpg/revision/latest/scale-to-width-down/340?cb=20180428125459&path-prefix=fr'
              }
              name={card.name}
              rarity={card.rarity}
              text={card.text}
              types={card.types}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
