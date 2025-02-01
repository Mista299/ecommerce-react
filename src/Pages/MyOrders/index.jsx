import { useContext } from "react"
import { Link } from 'react-router-dom';
import {OrdersCard} from "../../Components/OrdersCard/index.jsx"
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout"



function MyOrders() {
  const context = useContext(ShoppingCartContext)
  
  return (
    <Layout>
      <div className="flex items-center justify-center mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>

      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts}/>
          </Link>
        ))
      }
      
    </Layout>
  )
}

export default MyOrders
