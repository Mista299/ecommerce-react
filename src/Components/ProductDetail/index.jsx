import { useContext } from 'react';
import {XMarkIcon} from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import Card from '../Card';
import './styles.css'


const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    return(
        <aside 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
            
        >
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-6'>Detail</h2>
                <div>
                    <XMarkIcon 
                        className="h-6 w-6 text-black cursor-pointer"
                        onClick={() => context.closeProductDetail()}
                    ></XMarkIcon>
                </div>

            </div>
            <figure className='px-6'>
                <img 
                src={context.productToShow.image} 
                alt={context.productToShow.title}/>
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-2lg mb-2'>{context.productToShow.title}</span>
                <span className='font-medium text-2sm mb-2'>{context.productToShow.description}</span>




            </p>
        </aside>
    )
}

export default ProductDetail