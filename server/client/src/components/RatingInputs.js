import React, { Component } from 'react'

export default class RatingInputs extends Component {
  static defaultProps = {
    minRating: 0,
    maxRating: 10,
    rating: 5,
    starRatio: 2,
    limit: 1000
  }

  render() {
    return (
      <div className="rating-inputs">
        <label htmlFor="rating">Rating</label>
        <input type="number" name="rating" />
      </div>
    )
  }
}