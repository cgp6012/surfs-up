import React, { Component } from "react";

export default class StarRating extends Component {
  static defaultProps = {
    minRating: 0,
    maxRating: 10,
    rating: 5,
    starRatio: 2,
    limit: 1000
  }

  render() {
    return (
      <div className="star-rating">
    
      </div>
    )
  }
}