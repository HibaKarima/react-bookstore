import React, { useContext, useMemo } from 'react'
import Title from './Title'
import { ShopContext } from '../Context/ShopContext'
import page2 from '../assets/page22.png'
function CartTotal() {
  const { getCartAmount, delivery_charges } = useContext(ShopContext)

  const subtotal = useMemo(() => getCartAmount(), [getCartAmount])
  const shippingFee = useMemo(() => (subtotal === 0 ? 0 : delivery_charges), [
    subtotal,
    delivery_charges,
  ])
  const total = useMemo(
    () => (subtotal === 0 ? 0 : subtotal + delivery_charges),
    [subtotal, delivery_charges],
  )

  return (
    <div className="w-100 position-relative m-3 d-flex flex-column justify-content-center align-items-center">
      <Title title1={'Cart'} title2={'Total'} title1Styles={'text-center'} />
      <div
        style={{
          width: '110%',
          height: '110%',
          position: 'absolute',
          zIndex: '-1',
        }}
      >
        <img
          src={page2}
          alt="page2Image"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="text-center px-5 py-5 ">
        <div>
          <h5>SubTotal : </h5>
          <p>${subtotal}.00</p>
        </div>
        <hr
          className="mx-auto w-100 my-1 text-danger"
          style={{ height: '2px' }}
        />
        <div>
          <h5>Shipping fee : </h5>
          <p>${shippingFee}.00</p>
        </div>
        <hr
          className="mx-auto w-100 my-1 text-danger"
          style={{ height: '2px' }}
        />
        <div>
          <h5>Total : </h5>
          <p>${total}.00</p>
        </div>
        <hr
          className="mx-auto w-100 my-1  text-danger"
          style={{ height: '2px' }}
        />
      </div>
    </div>
  )
}

export default React.memo(CartTotal)
