import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class StarRating extends Component {
  static defaultProps = {
    //controls the lowerbound value of our rating. Defaults to 0
    minRating: 0,
    //controls the upperbound value of our rating. Defaults to 10
    maxRating: 10,
    //actual value of our rating. Defaults to 5
    rating: 5,
    //controls how many rating points it takes to render a full star. Defaults to 2, 
    //which means it takes a rating of 2 to render a single star. With a default rating of 5, this will result in rendering two and a half stars.
    starRatio: 2,
    //limit for how large the min/max rating values can be
    limit: 1000
  }

  render() {
    return (
      <div className="star-rating">
    
      </div>
    )
  }
}