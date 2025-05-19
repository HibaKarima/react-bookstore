import React, { useContext } from 'react'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { ShopContext } from '../Context/ShopContext'
function Item({ book, setSelectedBook }) {
  const { addToCart } = useContext(ShopContext)

  return (
    <div>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => setSelectedBook(book.name)}
        className="d-flex justify-content-center align-items-center  p-3 rounded-3 overflow-hidden position-relative group"
      >
        <img
          src={book.image}
          alt="bookImage"
          className=" w-100 shadow-lg rounded-3"
          style={{
            boxShadow:
              '0 10px 15px -3px rgba(28, 28, 30, 0.3), 0 4px 6px -2px rgba(28, 28, 30, 0.3)',
          }}
        />
      </div>
      <div className="p-3">
        <div className="d-flex justify-content-between">
          <h4 className="text-truncate my-0">{book.name}</h4>
          <span
            onClick={() => addToCart(book._id)}
            style={{ cursor: 'pointer' }}
          >
            <TbShoppingBagPlus className="text-lg" />
          </span>
        </div>
        <div className="d-flex justify-content-between pt-1">
          <p className="font-weight-bold text-capitalize">{book.category}</p>
          <h5 className=" text-secondary pr-2">${book.price}.00</h5>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Item)
