import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'

import Title from './Title'
import Item from './Item'
import AboutBookWrapper from './AboutBookWrapper'
const PopularBooks = () => {
    const [selectedBook, setSelectedBook] = useState(null)

    const { books } = useContext(ShopContext)
    const [popularBooks, setPopularBooks] = useState([])
    useEffect(() => {
        const data = books.filter((item) => item.popular)
        setPopularBooks(data.slice(0, 5))
    }, [books])
    return (
        <section className="container py-5">
            <Title
                title1={'Popular'}
                title2={'Books'}
                titleStyles={'pb-5'}
                paraStyles={'d-block'}
            />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
                {popularBooks.map((book) => (
                    <div key={book._id} className="">
                        <Item book={book} setSelectedBook={setSelectedBook} />
                    </div>
                ))}
                <AboutBookWrapper
                    selectedBook={selectedBook}
                    onClose={() => setSelectedBook(null)}
                />
            </div>
        </section>
    )
}
export default PopularBooks
