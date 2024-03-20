import './homepage.scss'
import phonedeskimage from '../../images/mainpage_deskphone.png'
import qrmenu from '../../images/image.png'
import { Link } from 'react-router-dom'

export default function Homepage() {

    return (
        <main className='homepage'>
            <section className='homepage__maincontent'>
                <h1 className='homepage__titel'>We help cafes and restaurants build a successful <br />online business!</h1>
                <div className='homepage__content'>
                    <div className='homepage__content--text'>
                        <p className='homepage__content--create'>Create a QR code menu and website to accept food delivery orders</p><br />
                        <p className='homepage__content--invest'>No start-up investment, no menu app installation and no commission to aggregators. To make a website for a cafe or QR menu, you will need only 1 day and minimum effort.</p><br />
                        <p className='homepage__content--ability'>The result is the ability to work online and increase profits.</p>

                    </div>

                    <div className='homepage__content--image'>
                        <img src={phonedeskimage} alt="Example image" />
                    </div>

                </div>
                <div className='homepage__content--wrapper'>
                    <button type='submit' className='homepage__content--createbtn'>
                        <Link to='/signup'> Create QR code menu </Link>
                    </button>
                </div>
            </section>
            <section className='homepage__help'>
                <h3>How we can help your business?</h3>
                <p>We've gathered all the necessary functionality for you to easily and quickly create a QR menu for an online cafe or a website for taking orders. Just register and follow our prompts.</p>
                <h3 className='homepage__help--qr'>QR code menu for cafes and restaurants:</h3>
                <div className='homepage__help--about'>
                    <img src={qrmenu} alt="QR menu" className='homepage__help--aboutimage' />
                    <div className='homepage__help--oport'>
                        <ol >
                            <li>• Accessible by QR code and link</li>
                            <li>• No menu app to install</li>
                            <li>• Large photos and detailed descriptions of dishes</li>
                            <li>• Increase average cheque</li>
                            <li>• Intuitive interface</li>
                            <li>• Cost 7.99 EUR/month</li>
                        </ol>
                        <div className='homepage__content--wrapper'>
                            <button type='submit' className='homepage__content--learnbtn'>
                                <Link to='/about'>Learn about QR code menu</Link>
                            </button>
                        </div>
                    </div>

                </div>

            </section>
        </main>
    )
}