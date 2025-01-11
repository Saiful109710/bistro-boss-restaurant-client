import React, { useState } from "react";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import Cover from "../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad','pizza','dessert','soup','drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex,setTabIndex] = useState(initialIndex)
    const [menus] = useMenu()
    
    console.log(category)
    const dessert = menus.filter(menu=>menu.category==='dessert')
    const soup = menus.filter(menu=>menu.category==='soup')
    const salad = menus.filter(menu=>menu.category==='salad')
    const pizza = menus.filter(menu=>menu.category==='pizza')
    const drinks = menus.filter(menu=>menu.category==='drinks')
  return (
    <div>
      <Helmet>
        <title>Order Food | Bistro Boss</title>
      </Helmet>
      <Cover img={orderCoverImg} title="Order Food"></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
            <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
