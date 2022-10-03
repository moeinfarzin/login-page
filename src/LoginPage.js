import './LoginPage.scss'
import React from 'react'
import logo from './logo.svg'

const LoginPage = () => {
    return (
        <div className='login-page'>
            <div className='logo-container'>
                <div className='text'><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p></div>
            </div>

            <div className='login'>

                <div className='logo'><img src={logo} alt="" /></div>
                <div className='welcome'><h1>Welcome back</h1></div>

                <div className='login-form'>
                    <form>
                        <div className='username'>
                            <input className='username-input' type="text" placeholder='Username/Email *' />
                        </div>
                        <div className='password'>
                            <input className='password-input' type="text" placeholder='Password *' />
                        </div>
                        <div className='login-btn'>
                            <button className='btn'>Login</button>
                        </div>
                        <div className='remember-forget'>
                            <div className='remember'>
                                <input className='checkbox' id='checkbox' type="checkbox" />
                                <label className='remember-me' htmlFor='checkbox'>Remember me</label>
                            </div>
                            <div className='forget'>
                                <a className='forget-password' href='forgetpassword'>forget password?</a>
                                

                            </div>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    )
}
export default LoginPage