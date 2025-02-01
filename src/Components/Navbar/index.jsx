import { NavLink } from "react-router-dom"
import { useContext, useState } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeStyle = 'underline underline-offset-4'

  const handleMenuToggle = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const renderNavLinks = (isMobile = false) => (
    <>
      <li>
        <NavLink to='/' onClick={() => { context.setSearchByCategory(null); if (isMobile) closeMenu() }}
          className={({ isActive }) => isActive ? `${activeStyle} text-white` : 'hover:text-gray-400 transition duration-300'}>
          All
        </NavLink>
      </li>
      <li>
        <NavLink to='/mensClothing' onClick={() => { context.setSearchByCategory("men's clothing"); if (isMobile) closeMenu() }}
          className={({ isActive }) => isActive ? `${activeStyle} text-white` : 'hover:text-gray-400 transition duration-300'}>
          Men's Clothing
        </NavLink>
      </li>
      <li>
        <NavLink to='/womenClothing' onClick={() => { context.setSearchByCategory("women's clothing"); if (isMobile) closeMenu() }}
          className={({ isActive }) => isActive ? `${activeStyle} text-white` : 'hover:text-gray-400 transition duration-300'}>
          Women's Clothing
        </NavLink>
      </li>
      <li>
        <NavLink to='/electronics' onClick={() => { context.setSearchByCategory('electronics'); if (isMobile) closeMenu() }}
          className={({ isActive }) => isActive ? `${activeStyle} text-white` : 'hover:text-gray-400 transition duration-300'}>
          Electronics
        </NavLink>
      </li>
      <li>
        <NavLink to='/jewelery' onClick={() => { context.setSearchByCategory('jewelery'); if (isMobile) closeMenu() }}
          className={({ isActive }) => isActive ? `${activeStyle} text-white` : 'hover:text-gray-400 transition duration-300'}>
          Jewelery
        </NavLink>
      </li>
      <li>
        <NavLink to='/others' onClick={() => { context.setSearchByCategory('others'); if (isMobile) closeMenu() }}
          className={({ isActive }) => isActive ? `${activeStyle} text-white` : 'hover:text-gray-400 transition duration-300'}>
          Others
        </NavLink>
      </li>
    </>
  )

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-4 px-6 bg-gray-900 text-gray-300 shadow-lg">
      <div className="flex justify-between items-center w-full">
        <div className="font-bold text-2xl text-white">
          <NavLink to='/' className="hover:text-gray-400 transition duration-300">
            Shopi
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="text-white focus:outline-none">
            {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Main Menu */}
        <ul className="hidden md:flex items-center gap-5">
          {renderNavLinks()}
        </ul>

        <ul className="hidden md:flex items-center gap-6">
          <li className="text-white/70 text-sm">
            michaelt@gmail.com
          </li>
          <li>
            <NavLink to='/mt-orders' className={({ isActive }) => isActive ? `${activeStyle} text-white` : 'hover:text-gray-400 transition duration-300'}>
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink to='/my-account' className={({ isActive }) => isActive ? `${activeStyle} text-white` : 'hover:text-gray-400 transition duration-300'}>
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink to='/sign-in' className={({ isActive }) => isActive ? `${activeStyle} text-white` : 'hover:text-gray-400 transition duration-300'}>
              Sign In
            </NavLink>
          </li>
          <li className="relative flex items-center text-white">
            <ShoppingBagIcon className="h-6 w-6"></ShoppingBagIcon>
            <div className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs">
              {context.cartProducts.length}
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col md:hidden gap-4 mt-4">
          {renderNavLinks(true)}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
