import React from 'react';

const Card = ({ img, name, bio, changeName }) => {
  return (
    <div id='profile'>
      <img id='profile-pic' src={img} alt="Profile" />
      <h1 id='name'>{name}</h1>
      <p id='bio'>{bio}</p>
      <button onClick={changeName}>Follow</button>
    </div>
  );
};

export default Card;