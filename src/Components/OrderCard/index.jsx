import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = (props) => {
    const { id, title, image, price, handleDelete } = props
    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={() => handleDelete(id)}/>
    }
    return (
        <div className="flex justify-between items-center py-4 px-2 gap-4 border-b border-gray-200">
            <div className='flex items-center gap-4'>
                <figure className='w-16 h-16'>
                    <img className='w-full h-full rounded-lg object-cover' src={image} alt={title} />
                </figure>
                <p className='text-sm font-light max-w-[150px] truncate'>{title}</p>
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-lg font-medium'>${price}</p>
                {renderXMarkIcon}
            </div>

        </div>
    )
}

export default OrderCard;
