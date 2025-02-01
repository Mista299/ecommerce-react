import { useContext } from "react";
import { Link } from 'react-router-dom';
import Layout from "../../Components/Layout"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  console.log(index)
  if (index === 'last') index = context.order?.length - 1

  return (
    <Layout>
      <div className="flex items-center justify-between w-80 mb-6">
        <Link to='/my-orders'>
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer mr-2"/> {/* Añadimos margen derecho */}
        </Link>
        <h1 className="font-medium text-xl mb-3">My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          // toma el ultimo elemento de la lista de ordenes lo corta a una lista a parte y mapea los objetos que fueron checkeados en el carrito
          context.order?.[index]?.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}


export default MyOrder
