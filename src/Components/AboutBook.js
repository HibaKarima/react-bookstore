import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { FaRegStar, FaStar } from 'react-icons/fa'

function AboutBook({ bookName }) {
  const { books } = useContext(ShopContext)
  const [bookData, setBookData] = useState(null)

  useEffect(() => {
    const found = books.find((item) => item.name === bookName)
    setBookData(found)
  }, [bookName, books])

  if (!bookData) return <div>Loading ...</div>

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center gap-md-5 gap-1">
        <div className="d-none d-md-block">
          <img src={bookData.image} alt="BookImage" className="h-auto" />
        </div>
        <div className="d-flex flex-column w-50" style={{ flex: '1' }}>
          <h1 className="text-black">{bookData.name}</h1>
          <div>
            <FaStar style={{ color: 'yellow' }} />
            <FaStar style={{ color: 'yellow' }} />
            <FaStar style={{ color: 'yellow' }} />
            <FaStar style={{ color: 'yellow' }} />
            <FaRegStar />
            <span>(175)</span>
          </div>
          <p>{bookData.price}.00$</p>
          <p>{bookData.description}</p>
          <h4>{bookData.category}</h4>
        </div>
      </div>
    </div>
  )
}

export default React.memo(AboutBook)
