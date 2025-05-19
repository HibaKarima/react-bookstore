import React, {
  useEffect,
  useState,
  useContext,
  useMemo,
  useCallback,
} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo1.webp'
import Navbar from '../Navbar/Navbar'
import { CgMenuLeft } from 'react-icons/cg'
import { TbUserCircle } from 'react-icons/tb'
import { RiUserLine, RiShoppingBag4Line } from 'react-icons/ri'
import './Header.css'
import { ShopContext } from '../../Context/ShopContext'
function Header() {
  const { navigate, token, getCartCount } = useContext(ShopContext)
  const [active, setActive] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)
  const containerStyles = useMemo(() => {
    return menuOpened
      ? 'd-flex flex-column position-absolute start-0 top-0 bg-white shadow-lg px-4 py-3 shadow w-50'
      : 'd-none d-xl-flex justify-content-center px-2 py-1'
  }, [menuOpened])
  const containerInlineStyles = useMemo(() => {
    return {
      height: menuOpened ? '100vh' : 'auto',
      width: menuOpened ? '122px' : 'auto',
      zIndex: menuOpened ? 50 : 'auto',
      rowGap: menuOpened ? '4rem' : '0',
      columnGap: !menuOpened ? '56px' : '0',
      backgroundColor: menuOpened ? 'var(--color-btn-hover)' : '',
    }
  }, [menuOpened])
  const toggleMenu = useCallback(() => {
    setMenuOpened((prev) => !prev)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && menuOpened) {
        if (menuOpened) {
          setMenuOpened(false)
        }
      }
      setActive(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [menuOpened])

  return (
    <header>
      <div
        className={` ${active ? 'custom-header' : 'position-absolute'
          }  w-100 container-fluid d-flex justify-content-between align-items-center`}
        style={{
          paddingTop: '10px',
          paddingBottom: '10px',
          borderColor: 'rgba(15, 23, 42, 0.1)',
          transition: 'all 300ms ease',
        }}
      >
        <div className="mainLogo">
          <Link
            to="/"
            className="text-decoration-none flex-fill d-flex align-items-center justify-content-start"
          >
            <img
              src={logo}
              alt="logo"
              height={36}
              width={36}
              className="d-none d-sm-flex me-2 "
            />
            <h4 className="fw-bold" style={{ color: 'var(--color-txt-hover)' }}>
              MY SPHERE
            </h4>
          </Link>
        </div>
        <div
          className="flex-flow"
          style={{ color: ' var(--color-txt-second)' }}
        >
          <Navbar
            menuOpened={menuOpened}
            toggleMenu={toggleMenu}
            containerStyles={containerStyles}
            containerInlineStyles={containerInlineStyles}
          />
        </div>

        <div
          className="d-flex flex-flow align-items-center custom-gap p-3 rounded"
          style={{ columnGap: '1rem' }}
        >
          <style>
            {`
    @media (min-width: 640px) {
      .custom-gap {
        column-gap: 2.5rem;
      }
    }
  `}
          </style>
          <CgMenuLeft
            onClick={toggleMenu}
            className="d-xl-none"
            style={{
              fontSize: '1.5rem',
              color: 'var( --color-txt-link)',
              cursor: 'pointer',
            }}
          />
          <Link to="/cart" className="d-flex position-relative">
            <RiShoppingBag4Line
              className=" p-1 rounded-circle"
              style={{
                width: '30px',
                backgroundColor: 'var(--color-title-details)',
                height: '30px',
                color: 'var(--color-txt-second)',
              }}
            />
            <span
              className="position-absolute rounded-circle shadow d-flex justify-content-center align-items-center bg-white"
              style={{
                width: '20px',
                height: '20px',
                left: '1.25rem',
                top: '-0.4rem',
                fontSize: '13px',
                color: 'red',
              }}
            >
              {getCartCount()}
            </span>
          </Link>
          <div className="position-relative   login-group">
            <div>
              {token ? (
                <div>
                  <TbUserCircle />
                </div>
              ) : (
                <button
                  onClick={() => navigate('./login')}
                  className="border-0 shadow btn btn-outline-primary d-flex justify-content-center align-items-center gap-2"
                  style={{
                    color: 'var(--color-txt-second)',
                    backgroundColor: 'var(--color-btn-link)',
                  }}
                >
                  login
                  <RiUserLine />
                </button>
              )}
            </div>
            {token && (
              <ul
                className="login-drop group-hover:flex bg-white p-2 shadow rounded position-absolute end-0 d-none top-100 flex-column"
                style={{ width: '8rem', fontSize: '14px', zIndex: '1050' }}
              >
                <li className="drop-item px-2 py-1 text-dark rounded ">
                  Orders
                </li>
                <li className="drop-item px-2 py-1 text-dark rounded ">
                  logout
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default React.memo(Header)
