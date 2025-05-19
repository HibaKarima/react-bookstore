import React, { lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const AboutBook = lazy(() => import('./AboutBook'))
const AboutBookWrapper = ({ selectedBook, onClose }) => {
  if (!selectedBook) return null

  return (
    <AnimatePresence>
      {selectedBook && (
        <motion.div
          className="modal-overlay"
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content bg-white p-4 rounded"
            style={{ maxWidth: '90%', maxHeight: '90%', overflowY: 'auto' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <AboutBook bookName={selectedBook} />
            </Suspense>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AboutBookWrapper
