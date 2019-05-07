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
  //maxRating and divide it by the starRatio, then round the answer up to the next integer
  maxStars() {
    let { maxRating, starRatio } = this.props
    return Math.ceil(maxRating / starRatio)
  }
  // rating and divide it by the starRatio, then round the answer down to the next integer
  fullStars() {
    let { rating, starRatio } = this.props
    return Math.floor(rating / starRatio)
  }
  //remainder) of rating and starRatio, get half the value of starRatio, and compare the two using a ternary operator. If `x` is greater than or equal to `i`, we return one half-star; otherwise, we return no half-stars
  halfStars() {
    let { rating, starRatio } = this.props
    let x = rating % starRatio
    let i = (1 / 2) * starRatio
    return x >= i ? 1 : 0
  }
  //maxStars and subtract from it fullStars and halfStars
  emptyStars() {
    return this.maxStars() - this.fullStars() - this.halfStars()
  }
render() {
    return (
      <div className="star-rating">
    
      </div>
    )
  }
}