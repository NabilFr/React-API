import React from 'react';

const Card = ({ image, name, rarity, text, types }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col">
      <img src={image} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-pink-500 text-xl mb-2">{name}</div>
        <ul>
          <li>
            <strong>Rarity: </strong>
            {rarity}
          </li>
          <li>
            <strong>Description: </strong>
            {text}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4 mt-auto">
        {types.map((type, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold
        text-gray-700 mr-2"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
