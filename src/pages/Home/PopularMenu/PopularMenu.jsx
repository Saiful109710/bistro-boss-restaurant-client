import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import MenuItem from '../../shared/MenuItem/MenuItem'

const PopularMenu = () => {
    const [menus,setMenus] = useState([])
    console.log(menus)

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const filteredMenus = data.filter(menu=>menu.category==='popular')
            setMenus(filteredMenus)
        }
            
        )
    },[])
  return (
    <section className='mb-12 space-y-5'>
        <SectionTitle 
        subheading='From Our Menu' 
        heading='Popular Items'
        >

        </SectionTitle>
        <div className='grid md:grid-cols-2 gap-10'>
            {
                menus.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
        <div className='text-center'>
         <button className='btn btn-outline border-0 border-b-4'>View Full Menu</button>
        </div>
    </section>
  )
}

export default PopularMenu
