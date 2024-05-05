import React from 'react';
import KatherineJohnsonImage from '../images/KatherineJohnson.jpg'; // Adjusted import path to navigate one level up to the images directory

export default function Profile() {
  return (
    <img
      src={KatherineJohnsonImage}
      alt="Katherine Johnson"
    />
  );
}
