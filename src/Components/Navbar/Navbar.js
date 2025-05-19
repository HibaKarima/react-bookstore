import React from 'react'
import { TbHomeFilled } from 'react-icons/tb'
import { IoLibrary, IoMailOpen } from 'react-icons/io5'
import { FaRegWindowClose } from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
function Navbar({
  containerStyles,
  containerInlineStyles,
  toggleMenu,
  menuOpened,
}) {
  const navItems = [
    { to: '/', label: 'Home', icon: <TbHomeFilled /> },
    { to: '/shop', label: 'Shop', icon: <IoLibrary /> },
    {
      to: 'mailto:karemahiba810@gmail.com',
      label: 'Contact',
      icon: <IoMailOpen />,
    },
  ]

  return (
    <nav className={containerStyles} style={containerInlineStyles}>
      <style>{`
    .custom-top-1 {
      top: 4px;
    }
  `}</style>
      {menuOpened && (
        <>
          <FaRegWindowClose
            onClick={toggleMenu}
            className="fs-4 position-relative close-icon"
            style={{ cursor: 'pointer', left: '90%' }}
          />
          <Link
            to={'/'}
            className="fw-bold mb-2"
            style={{ textDecorationLine: 'none' }}
          >
            <h4 style={{ color: 'var(--color-txt-hover)', fontWeight: '800' }}>
              MY SPHERE
            </h4>
          </Link>
        </>
      )}
      {navItems.map(({ to, label, icon }) => (
        <div
          key={label}
          className="d-inline-flex position-relative custom-top-1"
        >
          {to.startsWith('mailto') ? (
            <a
              onClick={menuOpened ? toggleMenu : undefined}
              href={to}
              className="d-flex justify-content-center align-items-center gap-2"
              style={{
                textDecorationLine: 'none',
                color: 'var(--color-text-main)',
              }}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </a>
          ) : (
            <NavLink
              to={to}
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'active-link' : ''}`
              }
              style={{ color: 'var(--color-txt-hover)' }}
            >
              <span>{icon} </span>
              <span>{label}</span>
            </NavLink>
          )}
        </div>
      ))}
    </nav>
  )
}

export default React.memo(Navbar)
