import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import MenuItem from '../../shared/MenuItem/MenuItem'
import useMenu from '../../../hooks/useMenu'

const PopularMenu = () => {

    const [menus] = useMenu()
    const popular = menus.filter(menu=>menu.category==='popular')

  
  return (
    <section className='mb-12 space-y-5'>
        <SectionTitle 
        subheading='From Our Menu' 
        heading='Popular Items'
        >

        </SectionTitle>
        <div className='grid md:grid-cols-2 gap-10'>
            {
                popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
        <div className='text-center'>
         <button className='btn btn-outline border-0 border-b-4'>View Full Menu</button>
        </div>
    </section>
  )
}

export default PopularMenu
