import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo1.webp'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../assets/data'
const Footer = () => {
    return (
        <footer
            className="mt-5 mb-0 container"
            style={{ backgroundColor: 'var(--color-bg-main)' }}
        >
            <div className="rounded-top">
                <h3 style={{ color: 'var(--color-text-main)' }}>
                    Discover books that ignite your imagination
                </h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
                    ducimus iste?
                </p>
                <hr className="my-4 bg-secondary " style={{ height: '2px' }} />
                <div className="d-flex flex-column flex-md-row">
                    <div className="" style={{ width: '20rem' }}>
                        <Link to={'/'} className="d-flex text-decoration-none">
                            <img
                                src={logo}
                                alt="logo"
                                height={36}
                                width={36}
                                className="me-2"
                            />
                            <h4
                                className="fw-bold"
                                style={{ color: 'var(--color-txt-hover)' }}
                            >
                                MY SPHERE
                            </h4>
                        </Link>
                        <p className="py-4" style={{ color: 'var(--color-text-main)' }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                            recusandae voluptatibus excepturi nostrum cum delectus repellat?
                        </p>
                        <div className="pb-5 d-flex">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className=" rounded border-0 outline-0 shadow p-1"
                            />
                            <button
                                className="btn p-1 border-0 rounded "
                                style={{
                                    right: '24px',
                                    backgroundColor: 'var(--color-btn-link)',
                                    color: 'var(--color-txt-link)',
                                }}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5 w-100">
                        {FOOTER_LINKS.map((col) => (
                            <FooterColumn
                                key={col.title}
                                title={col.title}
                                style={{ color: 'var(--color-txt-hover)' }}
                            >
                                <ul
                                    className=""
                                    style={{
                                        fontSize: '14px',
                                        color: '#e5e7eb',
                                        lineHeight: '30px',
                                    }}
                                >
                                    {col.links.map((link) => (
                                        <li key={link}>
                                            <Link
                                                to="/"
                                                className="text-decoration-none"
                                                style={{ color: 'var(--color-txt-link)' }}
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </FooterColumn>
                        ))}
                        <div>
                            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                <ul>
                                    {' '}
                                    {FOOTER_CONTACT_INFO.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                to="/"
                                                className="text-decoration-none"
                                                style={{ color: 'var(--color-txt-link)' }}
                                            >
                                                <p>{link.label} : </p>
                                                <p className="font-weight-bold">{link.value}</p>
                                            </Link>
                                        </li>
                                    ))}{' '}
                                </ul>
                            </FooterColumn>
                        </div>
                        <div className="">
                            <FooterColumn title={SOCIALS.title}>
                                <ul className="d-flex flex-md-column flex-row ">
                                    {SOCIALS.links.map((link) => (
                                        <Link
                                            to="/"
                                            key={link.id}
                                            className="fs-4 mx-3"
                                            style={{ color: 'var(--color-txt-hover)' }}
                                        >
                                            {link.icon}
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        </div>
                    </div>
                </div>
            </div>
            <p
                className="my-4 d-flex justify-content-between rounded p-4"
                style={{ backgroundColor: 'var(--color-title-second)' }}
            >
                <span>2025 MY_SPHERE</span>
                <span>&copy;All Rights Reserved</span>
            </p>
        </footer>
    )
}
export default Footer

const FooterColumn = ({ title, children }) => {
    return (
        <div className="bg-red ">
            <h4 className="text-secondary">{title}</h4>
            {children}
        </div>
    )
}
