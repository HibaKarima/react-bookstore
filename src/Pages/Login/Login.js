import React, { useState } from 'react'
import './Login.css'
function Login() {
  const [currState, setCurrState] = useState('Sign Up')

  return (
    <section
      className="d-flex justify-content-center align-items-center form-section"
      style={{ minHeight: '100vh' }}
    >
      <div className="p-5 formBox">
        <form className="d-flex flex-column align-items-center w-100 max-w-sm-50 m-auto gap-y-3 text-secondary ">
          <div>
            <h3>{currState}</h3>
          </div>
          {currState === 'Sign Up' && (
            <div className="w-100 py-2">
              <label htmlFor="name" className="medium-14">
                Name
              </label>
              <input
                required
                type="text"
                placeholder="Name"
                className="w-100 px-3 py-1 shadow rounded border-0 mt-1"
              />
            </div>
          )}
          <div className="w-100 py-2">
            <label htmlFor="email" className="medium-14">
              Email
            </label>
            <input
              required
              type="email"
              placeholder="Email"
              className="w-100 px-3 py-1 shadow rounded border-0 mt-1"
            />
          </div>
          <div className="w-100 py-2">
            <label htmlFor="password" className="medium-14">
              Password
            </label>
            <input
              required
              type="password"
              placeholder="Password"
              name="password"
              minLength="8"
              maxLength="16"
              className="form-control w-100 px-3 py-1 shadow rounded border-0 mt-1"
            />
          </div>
          <button
            type="submit"
            className="btn-dark w-100 mt-3 py-2 rounded shadow border-0"
          >
            {' '}
            {currState === 'Sign Up' ? 'Sign Up' : 'Login'}
          </button>

          <div
            className="w-100 d-flex flex-column gap-y-2 medium-14 mt-2 text-decoration-underline"
            style={{ cursor: 'pointer' }}
          >
            <div onClick={() => setCurrState('Sign Up')}>
              Forgot your password?
            </div>

            {currState === 'Login' ? (
              <div onClick={() => setCurrState('Sign Up')}>
                Don`t have an account ? <span>Create account</span>
              </div>
            ) : (
              <div onClick={() => setCurrState('Login')}>
                Already have an account ? <span>Login</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default React.memo(Login)
