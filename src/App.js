import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('https://api.magicthegathering.io/v1/cards', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-pink-500 text-xl mb-2">Card title</div>
        <ul>
          <li>
            <strong>Rarity: </strong>
            Rare
          </li>
          <li>
            <strong>Description: </strong>
            How the card works
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold
        text-gray-700 mr-2"
        >
          Type
        </span>
      </div>
    </div>
  );
}

export default App;
