import './FloatingButton.css'
import { Link } from 'react-router-dom'
import recommendedImg from '../../assets/reco1.png'
const FloatingButton = () => {
  return (
    <div
      className="m-2 floating-button"
      style={{
        position: 'fixed',
        zIndex: 1000,
        transition: 'top 0.3s ease',
      }}
    >
      <Link
        to="/recommendations"
        style={{ textDecoration: 'none' }}
        className="d-flex flex-column align-items-center justify-content-center image-container"
      >
        <img
          src={recommendedImg}
          alt="recoImg"
          width={'100px'}
          height={'70px'}
          className="m-0 fw-bold hover-image"
        />
        <div className="text-hover p-3"> Take A Recommendation</div>
      </Link>
    </div>
  )
}

export default FloatingButton
