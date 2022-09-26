import './LoginPage.css'
import React from 'react'
import logo from './logo.svg'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    // document.title="login";
    return (
        <>

        <div className='login-page'>
            <div className='logo-container'>
                <div className='text'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe voluptatum sapiente minus suscipit atque.</p></div>
            </div>

            <div className='login'>

                <div className='logo'><img src={logo} alt="" /></div>
                <div className='welcome'><h1>Welcome back</h1></div>

                <div className='login-form'>
                    <form>
                        <div className='username'>
                            <input className='username-input' type="text" placeholder='Username/Email' />
                        </div>
                        <div className='password'>
                            <input className='password-input' type="text" placeholder='Password' />
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
                                {/* <button className='forget-password'>forget password</button> */}
                                <Link className='forget-password' to='/forgetpassword' >forget password</Link>

                            </div>
                        </div>

                    </form>
                </div>

            </div>

        </div>
        </>
    )
}
export default LoginPage