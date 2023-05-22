/* eslint-disable react/prop-types */
import { slide as Menu } from 'react-burger-menu';

const Sidebar = ({navitems,handleClick}) => {



  return (

    <Menu className=' bg-gradient-to-b from-yellow-200 via-amber-400 to-yellow-200 text-black flex justify-between' right width={'40%'} md:width={'30%'}>
     <div className='flex flex-col'>
      {navitems.map((item) => {
        
          
       
        return (
          <a key={item.id} id="home" className="menu-item" href={item.path}>{item.item}</a>

        )
        
      })
      }
      </div>
       <button onClick={handleClick} className="duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>

    </Menu>
  );
}

export default Sidebar