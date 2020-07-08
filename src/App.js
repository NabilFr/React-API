import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import CardSearch from './components/CardSearch';
import { BounceLoader } from 'react-spinners';

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch('https://api.magicthegathering.io/v1/cards', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setCards(
          data.cards.filter((card) => card.name.toLowerCase().includes(term))
        );
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <CardSearch searchText={(text) => setTerm(text)} />
      {!isLoading && cards.length === 0 && (
        <div className="flex justify-center mt-32 text-lg">No Cards found</div>
      )}
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
