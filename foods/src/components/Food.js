import React from 'react';
import { Route, NavLink } from 'react-router-dom';


const Food = props => {
  return (
    <div className="Food">
      <h3>{props.username}</h3>
      <strong>{props.child} I'm </strong> */}
      <p>{props.pet} food years old</p>
    </div>
  );
};

Food.defaultProps = {
  username: '',
  child: '',
  pet: ''
};

export default Food;

