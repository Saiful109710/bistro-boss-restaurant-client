import React from 'react'
import { Helmet } from 'react-helmet-async'

import menuImg from '../../assets/menu/banner3.jpg'
import Cover from '../shared/Cover/Cover'
import PopularMenu from '../Home/PopularMenu/PopularMenu'


const Menu = () => {
  return (
    <div>
        <Helmet>
            <title>Menu | Bistro Boss</title>
        </Helmet>
        <Cover img={menuImg} title='Our Menu'></Cover>
        <PopularMenu></PopularMenu>
        <Cover img={menuImg} title='Our Menu'></Cover>
        <PopularMenu></PopularMenu>
        <Cover img={menuImg} title='Our Menu'></Cover>
        <PopularMenu></PopularMenu>
    </div>
  )
}

export default Menu
