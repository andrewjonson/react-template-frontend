/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

export function AuthPage() {
  useEffect(() => {
    document.body.classList.add('bg-dark')
    return () => {
      document.body.classList.remove('bg-dark')
    }
  }, [])

  return (
    <div>
      {/* begin::Content */}
      <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
        {/* begin::Wrapper */}
        <div className='w-lg-500px bg-white rounded shadow-sm p-10 mt-20 p-lg-15 mx-auto'>
          <Switch>
            <Route path='/auth/login' component={Login} />
            <Route path='/auth/registration' component={Registration} />
            <Route path='/auth/forgot-password' component={ForgotPassword} />
            <Redirect from='/auth' exact={true} to='/auth/login' />
            <Redirect to='/auth/login' />
          </Switch>
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Content */}
      {/* begin::Footer */}
      <div className='d-flex flex-center flex-column-auto p-10'>
        <div className='d-flex align-items-center fw-bold fs-6'>
          <a href='#' className='text-muted text-hover-primary px-2'>
            About
          </a>

          <a href='#' className='text-muted text-hover-primary px-2'>
            Contact
          </a>

          <a href='#' className='text-muted text-hover-primary px-2'>
            Contact Us
          </a>
        </div>
      </div>
      {/* end::Footer */}
    </div>
  )
}
