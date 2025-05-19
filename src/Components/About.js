import React from 'react'
import Title from './Title'
import { FaBook } from 'react-icons/fa'
import about from '../assets/about.png'
import { motion } from 'framer-motion'
import { FaPenAlt } from 'react-icons/fa'
const About = () => {
    const variants = {
        hidden: { opacity: 0, x: '-50%' },
        visible: { opacity: 1, x: 7 },
    }
    const variants1 = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
    }
    const variants2 = {
        hidden: { opacity: 0, x: '50%' },
        visible: { opacity: 1, x: '-3%' },
    }
    return (
        <section className="container py-5 py-xl-8">
            <Title
                title1={'Unveiling Our'}
                title2={' Store`s key features!'}
                titleStyles={'p-5'}
                paraStyles={'d-block'}
            />

            <div className="d-flex flex-column align-items-center justify-content-around gap-4 gap-xl-2 flex-xl-row">
                <div>
                    <div
                        className="d-flex flex-column align-items-between"
                        style={{ rowGap: '1rem' }}
                    >
                        <motion.div
                            className="d-flex align-items-center "
                            style={{ columnGap: '1rem' }}
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div
                                className="shadow d-flex flex-column align-items-center justify-content-center rounded"
                                style={{ height: '4rem', minWidth: '4rem' }}
                            >
                                <FaBook
                                    className="fs-4 "
                                    style={{ color: 'var(--color-txt-link)' }}
                                />
                            </div>
                            <div>
                                <h4
                                    className="mt-4"
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: '500',
                                        color: 'var( --color-txt-hover)',
                                    }}
                                >
                                    Easy Returns Process
                                </h4>
                                <p style={{ color: 'var(--color-txt-second)' }}>
                                    {' '}
                                    lorem ipsum dolor sit a met consectetur lorem ipsum dolor{' '}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="d-flex align-items-center "
                            style={{ columnGap: '1rem' }}
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                        >
                            {' '}
                            <div
                                className=" min-w-100 shadow d-flex flex-column align-items-center justify-content-center rounded"
                                style={{ height: '4rem', minWidth: '4rem' }}
                            >
                                <FaBook
                                    className="fs-4 "
                                    style={{ color: 'var(--color-txt-link)' }}
                                />
                            </div>
                            <div>
                                <h4
                                    className="mt-4"
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: '500',
                                        color: 'var(--color-txt-hover)',
                                    }}
                                >
                                    Secure Payment Options
                                </h4>
                                <p style={{ color: 'var(--color-txt-second)' }}>
                                    {' '}
                                    lorem ipsum dolor sit a met consectetur lorem ipsum dolor{' '}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="d-flex align-items-center "
                            style={{ columnGap: '1rem' }}
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1.4 }}
                        >
                            <div
                                className=" min-w-100 shadow d-flex flex-column align-items-center justify-content-center rounded"
                                style={{ height: ' 4rem', minWidth: '4rem' }}
                            >
                                <FaBook
                                    className="fs-4 "
                                    style={{ color: 'var(--color-txt-link)' }}
                                />
                            </div>
                            <div>
                                <h4
                                    className="mt-4"
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: '500',
                                        color: 'var(--color-txt-hover)',
                                    }}
                                >
                                    Live Customer Support
                                </h4>
                                <p style={{ color: 'var(--color-txt-second)' }}>
                                    {' '}
                                    lorem ipsum dolor sit a met consectetur lorem ipsum dolor{' '}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div>
                    <motion.div
                        variants={variants2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.7 }}
                        className=" d-flex flex-column align-items-center justify-content-center position-relative"
                    >
                        <img
                            src={about}
                            alt="aboutImg"
                            height={350}
                            className=" rounded-lg w-100 "
                            style={{ zIndex: '-1' }}
                        />
                        <motion.div
                            className="position-absolute d-flex gap-5 justify-content-evenly flex-1 w-100"
                            variants={variants1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 2.2 }}
                        >
                            <div>
                                <h4>More features</h4>
                                <p>
                                    <FaPenAlt /> feature1
                                </p>
                                <p>
                                    <FaPenAlt /> feature2
                                </p>
                                <p>
                                    <FaPenAlt /> feature2
                                </p>
                            </div>
                            <div>
                                <p>
                                    <br />
                                </p>
                                <p>
                                    <FaPenAlt /> feature1
                                </p>
                                <p>
                                    <FaPenAlt /> feature2
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
export default About
