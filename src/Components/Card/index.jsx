import { useContext } from "react";
import {CheckIcon, PlusIcon} from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";

const Card = ({ data }) => {
    const context = useContext(ShoppingCartContext);
    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
        
    }
    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
    }

    const renderIcon = (id) => {
        //devuelve un Booleano, para saber si el producto ya fue agregada al carrito
        const isInCart = context.cartProducts.filter(product => product.id == id).length > 0

        if (isInCart) {
            return (
                <div
                    className="absolute top-2 right-2 flex justify-center items-center bg-black w-8 h-8 rounded-full"
                >
                    <CheckIcon className="h-6 w-6 text-white"></CheckIcon>
                </div>
            )
        } else {
            return(
                <div
                    className="absolute top-2 right-2 flex justify-center items-center bg-white w-8 h-8 rounded-full"
                    onClick={(event) => addProductsToCart(event, data)}
                >
                    <PlusIcon className="h-6 w-6 text-black"></PlusIcon>
                </div>
            )
        }

    }

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-80 p-2 rounded-lg shadow-lg"
            onClick={() => {
                showProduct(data)}}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-2 left-2 bg-white/70 px-2 py-1 rounded-lg text-black text-sm">
                    {data.category}
                </span>
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover rounded-lg"
                />
                {renderIcon(data.id)}

            </figure>
            <div className="text-center">
                <p className="text-sm font-light truncate">{data.title}</p>
                <p className="text-lg font-medium">${data.price}</p>
            </div>
        </div>
    );
};

export default Card;