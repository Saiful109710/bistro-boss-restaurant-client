import React from 'react'
import { Helmet } from 'react-helmet-async'

import menuImg from '../../assets/menu/banner3.jpg'
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import Cover from '../shared/Cover/Cover'
import useMenu from '../../hooks/useMenu'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import MenuCategory from './MenuCategory/MenuCategory'



const Menu = () => {
    const [menus] = useMenu()
    const dessert = menus.filter(menu=>menu.category==='dessert')
    const soup = menus.filter(menu=>menu.category==='soup')
    const salad = menus.filter(menu=>menu.category==='salad')
    const pizza = menus.filter(menu=>menu.category==='pizza')
    const offered = menus.filter(menu=>menu.category==='offered')
  return (
    <div>
        <Helmet>
            <title>Menu | Bistro Boss</title>
        </Helmet>
        <Cover img={menuImg} title='Our Menu'></Cover>
        {/* main cover */}
        <SectionTitle subheading="Don't Miss" heading="Today's Offer"></SectionTitle>
        {/* offered menu items */}
        <MenuCategory items={offered}></MenuCategory>
        {/* desert menu items */}
        <MenuCategory
        items={dessert}
        title='dessert'
        img={desertImg}

        >

        </MenuCategory>
        {/* Pizza items */}
        <MenuCategory items={pizza} title='pizza' img={pizzaImg}></MenuCategory>
        {/* salad items */}
        <MenuCategory items={salad} title='salad' img={saladImg}></MenuCategory>
        {/* Soup items */}
        <MenuCategory items={soup} title='soup' img={soupImg}></MenuCategory>
       
    </div>
  )
}

export default Menu
