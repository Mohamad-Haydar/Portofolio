import Numbers from '../Components/Numbers'

function Project3() {
  return (
    <div className=' py-10 flex relative '>
          <Numbers /*home={false}*//>
      
          <div className=' lg:ms-10 ms-1  '>
            <h2 className=' text-4xl '>Electronics E-Commerce Platform</h2>
            <ul className='dark:text-deg3 text-deg3-dark text-xs'>
              <li>Aug 2023 - Nov 2023 </li>
            </ul>
            <br />
            <div className='border-s-[1px] border-s-gray border-opacity-[0.5] px-5 max-w-5xl text-deg3-dark dark:text-deg3'>

              <h3 className='mb-1  w-fit dark:text-deg1 text-deg3-dark font-semibold text-xl'>Description</h3>
              <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
                <p className='text-sm'>
                Collaborating with a front-end developer, I contributed to the development of a comprehensive electronics e-commerce website. The project encompasses both a user-friendly client-facing website and a robust admin dashboard for efficient data control. My role as a back-end developer involved crafting a powerful API using the .NET framework and integrating it with an MSSQL database.                
                </p>
              </div>

              <br />

              <h3 className='mb-1  w-fit text-deg1 font-semibold text-xl'>Demo</h3>
            <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
                <div className='text-sm mb-5'>
                  The documentation of project is accessible online at:   
                  <a href='https://electronixapi.somee.com/swagger/' className='text-blue underline'>https://electronixapi.somee.com/swagger/</a>
                  <br />
                  Feel free to explore the features and functionalities implemented in the application.
                  <br />
                  <br />
                  E-Commerce Store demo:<a href=' https://electronics-rust.vercel.app/' className='text-blue underline'> https://electronics-rust.vercel.app/</a>
                  <br />
                  Dashboard store demo: <a href=' https://dashboard-electronics.netlify.app/login' className='text-blue underline'> https://dashboard-electronics.netlify.app/login</a>
                  <br />
                  <br />

                  Demo Account For Dashboard
                  <ul>
                      <li>Email: owner@example.com</li>
                      <li>Password: Pass1234!</li>
                  </ul>
                </div>
                
            </div>

              <h3 className='mb-1  w-fit dark:text-deg1 text-deg3-dark font-semibold text-xl'>Key Features</h3>
              <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
                <h4 className='text-lg dark:text-deg1 text-deg3-dark'>Role-Based Authentication</h4>
                <p className='text-sm ps-5 border-s-[1px] border-s-gray border-opacity-[0.5]'>
                    Implemented role-based authentication allowing users to explore the website without login for general browsing.
                    <br />
                    Secure areas, such as the shopping cart and checkout process, require user authentication via JSON Web Tokens (JWT).
                    <br />
                    Three user roles:
                    <br />
                    Client: Access to browse and purchase products.
                    <br />
                    Admin: Control over the dashboard and product management.
                    <br />
                    Owner: Has authority to add and remove admin accounts.
                </p>

                <br />

                <h4 className='text-lg dark:text-deg1 text-deg3-dark'>API Development</h4>
                <p className='text-sm ps-5 border-s-[1px] border-s-gray border-opacity-[0.5]'>
                Constructed a robust API using the .NET framework, providing seamless communication between the front-end and database.
                <br />
                Implemented endpoints for public access, user authentication, product interactions, and admin functionalities.
                </p>

                <br />

                <h4 className='text-lg dark:text-deg1 text-deg3-dark'>Secure Authentication and Forgot Password</h4>
                <p className='text-sm ps-5 border-s-[1px] border-s-gray border-opacity-[0.5]'>
                Utilized JSON Web Tokens for secure user authentication, ensuring data integrity and confidentiality.
                <br />
                Implemented a password recovery system through a dedicated API endpoint.
                </p>

                <br />

                <h4 className='text-lg dark:text-deg1 text-deg3-dark'>Payment Integration</h4>
                <p className='text-sm ps-5 border-s-[1px] border-s-gray border-opacity-[0.5]'>
                Integrated the Stripe API for a secure and streamlined checkout process.
                <br />
                Implemented payment functionalities, allowing users to seamlessly complete purchases.
                </p>

                <br />

                <h4 className='text-lg dark:text-deg1 text-deg3-dark'>Product Variation and Real-World Relations</h4>
                <p className='text-sm ps-5 border-s-[1px] border-s-gray border-opacity-[0.5]'>
                Modeled product relationships based on real-world scenarios, incorporating variations, quantities, and prices for each product
                <br />
                Considered the availability of each product variation, providing a dynamic shopping experience
                </p>

                <br />

                <h4 className='text-lg dark:text-deg1 text-deg3-dark'>Rating System</h4>
                <p className='text-sm ps-5 border-s-[1px] border-s-gray border-opacity-[0.5]'>
                Incorporated a user-friendly rating system, enabling customers to express their opinions and provide feedback on products
                </p>

              </div>
          </div>
      </div>
    </div>
  )
}

export default Project3