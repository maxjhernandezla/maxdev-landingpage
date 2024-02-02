import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { getLanguageData } from '../../helpers/languageHelper';
import './CardFlip.scss';

const CardFlip = () => {
  const data = getLanguageData();
  const [isFlipped, setIsFlipped] = useState(
    Array(data.aboutUs.team.length).fill(false)
  );

  const handleFlip = (idx) => {
    const newIsFlipped = [...isFlipped];
    newIsFlipped[idx] = !newIsFlipped[idx];
    setIsFlipped(newIsFlipped);
  };

  return (
    <div className="flipCard">
      {data.aboutUs.team.map((member, idx) => (
        <ReactCardFlip
          key={idx}
          isFlipped={isFlipped[idx]}
          flipDirection="horizontal"
        >
          <div onClick={() => handleFlip(idx)} className="front">
            <img src={member.src} alt={member.alt} />
          </div>
          <div className="back" onClick={() => handleFlip(idx)}>
            <div className="backContainer">
              <h4>{member.name}</h4>
              <p>{member.position}</p>
            </div>
          </div>
        </ReactCardFlip>
      ))}
    </div>
  );
};

export default CardFlip;
