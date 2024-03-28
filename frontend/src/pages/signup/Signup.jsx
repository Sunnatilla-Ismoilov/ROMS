import { Link } from 'react-router-dom'
import './signup.scss'

export default function Signup() {

    return (
        <div className="container">
            <div className="card">
                <div className="card_title">
                    <h1>Create Account</h1>
                    <span>Already have an account? <Link to='/signin'>Sign In</Link></span>
                </div>
                <div className="form">
                    <form action="/register" method="post">
                        <input type="text" name="fname" id="fname" placeholder="First name" />
                        <input type="text" name="lname" id="lname" placeholder="Last name" />
                        <input type="email" name="email" placeholder="Email" id="email" />
                        <input type="password" name="password" placeholder="Password" id="password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="card_terms">
                    <input type="checkbox" name="" id="terms" /> <span>I have read and agree to the <a href="">Terms of Service</a></span>
                </div>
            </div>
        </div>
    )
}