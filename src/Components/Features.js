import React from 'react'
import filter from '../assets/features/filter.png'
import rating from '../assets/features/rating.png'
import wishlist from '../assets/features/wishlist.png'
import secure from '../assets/features/secure.png'
const Features = () => {
  return (
    <section className="container py-5 shadow-lg ">
      <div style={{ width: '80%', margin: 'auto' }}>
        <div className="row">
          <div className="shadow-lg  d-flex flex-column align-items-center justify-content-center col-12 col-md-3 col-lg-6 p-5 ">
            <img
              src={filter}
              alt="featureIcon"
              height={44}
              width={44}
              className="featureDiv"
            />
            <div className="d-flex flex-column align-items-center justify-content-center ">
              <h5>Advanced search and Filters</h5>
              <hr
                className=" bg-secondary h-1 rounded-pill border-0 featureHr"
                style={{ width: '50%', height: '0.25rem' }}
              />
            </div>
            <p className="text-center">
              Effortlessly search books by title, author, genre, or price range.
            </p>
          </div>
          <div className=" shadow-lg  d-flex flex-column align-items-center justify-content-center col-12 col-md-3 col-lg-6 p-5 feature">
            <img src={rating} alt="featureIcon" height={44} width={44} />
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h5>User Reviews and Ratings</h5>
              <hr
                className=" bg-secondary h-1 rounded-pill border-0 featureHr"
                style={{ width: '50%', height: '0.25rem' }}
              />
            </div>
            <p className="text-center">
              Customers can share reviews, rate books, and guide future readers.{' '}
            </p>
          </div>
          <div className="shadow-lg  d-flex flex-column align-items-center justify-content-center col-12 col-md-3 col-lg-6 p-5 feature">
            <img src={wishlist} alt="featureIcon" height={44} width={44} />
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h5>Wishlist and Favorites</h5>
              <hr
                className=" bg-secondary h-1 rounded-pill border-0 featureHr"
                style={{ width: '50%', height: '0.25rem' }}
              />
            </div>
            <p className="text-center">
              Save books to wishlist for future purchases or easy access.{' '}
            </p>
          </div>
          <div className="shadow-lg  d-flex flex-column align-items-center justify-content-center col-12 col-md-3 col-lg-6 p-5 feature">
            <img src={secure} alt="featureIcon" height={44} width={44} />
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h5>Secure Online Payments</h5>
              <hr
                className=" bg-secondary h-1 rounded-pill border-0 featureHr"
                style={{ width: '50%', height: '0.25rem' }}
              />
            </div>
            <p className="text-center">
              Enjoy seamless checkout with multiple secure payment options.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default React.memo(Features)
