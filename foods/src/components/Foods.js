//Home

import React, { Component } from 'react';

import Food from './Food';

class Foods extends Component {
  render() {
    return (
      <div className="Foods">
        <h1>Welcome to GigaPets</h1>
        <ul>
          {this.props.foods.map(food => {
            return (
              <Food
              username={food.username}
                id={food.id}
                age={food.age}
                pet={food.pet}
                key={food.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Food.defaultProps = {
 foods: [],
};

export default Foods;
