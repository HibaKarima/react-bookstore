import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../assets/bg.png'
import page from '../assets/page.png'
import { motion } from 'framer-motion'
const Hero = () => {
  const variants = {
    hidden: { opacity: 0, x: '-80%' },
    visible: { opacity: 1, x: '10%' },
  }
  return (
    <section
      className="container d-flex flex-column flex-xl-row justify-content-center align-items-center mt-5 pt-5 m-md-auto p-md-auto"
      style={{ height: '100vh' }}
    >
      <div>
        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          style={{
            fontFamily: 'Underdog, system-ui',
            fontWeight: '700',
            letterSpacing: '0.7px',
            wordSpacing: '1px',
            fontSize: '30px',
            color: 'var(--color-txt-link)',
          }}
          className="pe-4"
        >
          {' '}
          Leave the world and read books
        </motion.p>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          <Link to={'/store'} className="btn btnS">
            Explore now
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container" style={{ width: '100px', height: '100px' }}>
          <img
            src={page}
            alt="pageImg"
            width={'100%'}
            height={'100%'}
            className="motionRotate"
          />
        </div>
        <div className="d-flex justify-content-center flex-1 align-items-center">
          <div style={{ width: '100px', height: '100px' }}>
            <img
              src={page}
              alt="pageImg"
              width={'100%'}
              height={'100%'}
              className="motionRotate"
            />
          </div>
          <img
            src={bg}
            alt=""
            height={300}
            width={300}
            className="motionScale"
          />
          <div style={{ width: '100px', height: '100px' }}>
            <img
              src={page}
              alt="pageImg"
              width={'100%'}
              height={'100%'}
              className="motionRotate"
            />
          </div>
        </div>
        <div style={{ width: '100px', height: '100px' }}>
          <img
            src={page}
            alt="pageImg"
            width={'100%'}
            height={'100%'}
            className="motionRotate"
          />
        </div>
      </motion.div>
    </section>
  )
}
export default React.memo(Hero)
