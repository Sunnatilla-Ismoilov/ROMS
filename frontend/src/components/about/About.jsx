import './about.scss';

export default function About() {

    return (
        <div className='aboutpage'>
            <div className='about_container'>
                <h2>About Our Project</h2>
                <p>Welcome to our innovative order management system designed to revolutionize the dining experience.</p>
                <h3>In-Restaurant Ordering</h3>
                <p>Imagine sitting at a restaurant table equipped with a QR code. As a customer, you simply scan the code and instantly access the menu on our web application. You can browse through the menu at your leisure, make your selection, and place your order directly from the app.</p>
                <p>Once your order is placed, it is immediately sent to the kitchen where our talented chefs begin preparing your meal. Payment for your meal can be completed directly through the web application using a payment card, or in cash at the cash register.</p>
                <h3>Home Delivery</h3>
                <p>Our system isn’t limited to in-restaurant dining. You can also use our web application to place orders from the comfort of your home. Your food will be delivered right to your doorstep. Please note that for home delivery orders, payment is available only by card through our secure online payment system.</p>
                <h3>Monetization</h3>
                <p>Our monetization model is simple and transparent. We charge a percentage of sales made by home delivery. There is no monetization for in-restaurant orders. We believe that providing an efficient in-restaurant ordering system will not only enhance the dining experience but also encourage customers to use our service for home delivery in the future.</p>
                <h3>Technology</h3>
                <p>Our system is built using cutting-edge technology. We’ve used React for building user interfaces, Tailwind CSS for styling, PostgreSQL for database management, and Django as our backend framework. This robust technological foundation ensures a smooth and efficient ordering experience for all our users.</p>
            </div>
        </div>
    )
}