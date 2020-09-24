import React from 'react'
import Container from './Container'
import Article from './Article/Article'
import ImageConfetti from './Article/image-confetti.jpg'
import ImageCurrency from './Article/image-currency.jpg'
import ImagePlane from './Article/image-plane.jpg'
import ImageRestaurant from './Article/image-restaurant.jpg'

const LatestArticles = () => {
  return (
    <Container className="latest-articles-container">
      <h1>Latest Articles</h1>
      <div className="latest-articles-articles">
        <Article img={ImageCurrency} alt='Article image of currency'/>
        <Article img={ImageRestaurant} alt='Article image of a restaurant'/>
        <Article img={ImagePlane} alt='Article image of a plane'/>
        <Article img={ImageConfetti} alt='Article image of a confetti'/> 
      </div>
    </Container>
  )
}

export default LatestArticles
