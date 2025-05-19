import React, { useState, useEffect, useContext } from 'react'
import Title from './Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Item from './Item'
import { ShopContext } from '../Context/ShopContext'
import AboutBookWrapper from './AboutBookWrapper'

const NewArrivals = () => {
    const [selectedBook, setSelectedBook] = useState(null)

    const { books } = useContext(ShopContext)
    const [newArrivals, setNewArrivals] = useState([])

    useEffect(() => {
        const data = books.slice(0, 7)
        setNewArrivals(data.reverse())
    }, [books])

    return (
        <section
            className="container py-5"
            style={{ backgroundColor: 'var(--color-bg-main)' }}
        >
            <Title
                title1={'new'}
                title2={'Arrivals'}
                titleStyles={'pb-10'}
                paraStyles={'!bloke'}
            />
            {/* swiper */}
            <Swiper
                autoPlay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mt-4"
            >
                {newArrivals.map((book) => (
                    <SwiperSlide key={book._id}>
                        <Item book={book} setSelectedBook={setSelectedBook} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <AboutBookWrapper
                selectedBook={selectedBook}
                onClose={() => setSelectedBook(null)}
            />

            <style>
                {`
          @media (min-width: 640px) {
            .custom-height {
              height: 388px !important;
            }
          }
          @media (min-width: 1280px) {
            .custom-height {
              height: 499px !important;
            }
          }
        `}
            </style>
        </section>
    )
}

export default React.memo(NewArrivals)
