import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import {ShoppingBagIcon} from '@heroicons/react/24/solid'


const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink 
            to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/'
            onClick={() => context.setSearchByCategory(null)}
            className={({isActive}) => 
              isActive ? activeStyle : undefined
            
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/mensClothing'
            onClick={() => context.setSearchByCategory("men's clothing")}
            className={({isActive}) => 
              isActive ? activeStyle : undefined
            }
          >
            men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/womenClothing'
            onClick={() => context.setSearchByCategory("women's clothing")}
            className={({isActive}) => 
              isActive ? activeStyle : undefined
            }
          >
            women's clothing
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({isActive}) => 
              isActive ? activeStyle : undefined
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/jewelery'
            onClick={() => context.setSearchByCategory('jewelery')}
            className={({isActive}) => 
              isActive ? activeStyle : undefined
            }
          >
            jewelery
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({isActive}) => 
              isActive ? activeStyle : undefined
            }
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          michaelt@gmail.com
        </li>
        <li>
          <NavLink 
            to='/mt-orders'
            className={({isActive}) => 
              isActive ? activeStyle : undefined
            }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account'
            className={({isActive}) => 
              isActive ? activeStyle : undefined
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in'
            className={({isActive}) => 
              isActive ? activeStyle : undefined
            }
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
          <div>
            {context.cartProducts.length}
          </div>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar