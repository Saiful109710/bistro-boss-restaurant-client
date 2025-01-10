import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PopularMenu from '../PopularMenu/PopularMenu'
import ChefRecommendation from '../ChefRecomendation/ChefRecommendation'
import Featured from '../Featured/Featured'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <ChefRecommendation></ChefRecommendation>
        <Featured></Featured>
    </div>
  )
}

export default Home
