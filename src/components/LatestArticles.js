import React from 'react'
import Container from './Container'
import Article from './Article/Article'

const LatestArticles = () => {
  return (
    <Container className="latest-articles-container">
      <h1>Latest Articles</h1>
      <Article />
      <Article />
    </Container>
  )
}

export default LatestArticles
