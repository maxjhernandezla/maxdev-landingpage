import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './CardFlip.scss';
import { FaTimes } from 'react-icons/fa';

const CardFlip = ({ team, showTeam, setShowTeam }) => {
  const [isFlipped, setIsFlipped] = useState(Array(team.length).fill(false));

  const handleFlip = (idx) => {
    const newIsFlipped = [...isFlipped];
    newIsFlipped[idx] = !newIsFlipped[idx];
    setIsFlipped(newIsFlipped);
  };
  const handleShow = () => {
    setShowTeam(false);
  };

  return (
    <div className={showTeam ? 'flipCard expanded' : 'flipCard'}>
      <div className="icon" onTouchStart={handleShow}>
        <FaTimes />
      </div>
      {team.map((member, idx) => (
        <ReactCardFlip
          key={idx}
          isFlipped={isFlipped[idx]}
          flipDirection="horizontal"
        >
          <div onClick={() => handleFlip(idx)} className="front">
            <img src={member.src} alt={member.alt} />
            <div className="overlay">{member.clickFront}</div>
          </div>
          <div className="back" onClick={() => handleFlip(idx)}>
            <div className="backContainer">
              <h4>{member.name}</h4>
              <p>{member.position}</p>
              <div className="overlay">{member.clickBack}</div>
            </div>
          </div>
        </ReactCardFlip>
      ))}
    </div>
  );
};

export default CardFlip;
