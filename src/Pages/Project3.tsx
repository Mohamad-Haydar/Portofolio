import Numbers from '../Components/Numbers'

function Project3() {
  return (
    <div className=' py-10 flex relative '>
    <Numbers /*home={false}*//>

    <div className=' lg:ms-10 ms-1  '>
      <h2 className=' text-4xl '>Online Book Store</h2>
      <ul className='dark:text-deg3 text-deg3-dark text-xs'>
        <li>Aug 2023 - Sep 2023 </li>
      </ul>
      <br />
      <div className='border-s-[1px] border-s-gray border-opacity-[0.5] px-5 max-w-5xl text-deg3-dark dark:text-deg3'>

        <h3 className='mb-1  w-fit dark:text-deg1 text-deg3-dark font-semibold text-xl'>Description</h3>
        <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
          <p className='text-sm'>
          I developed an MVC (Model-View-Controller) application focused on managing an online book store. The project employs a robust architecture utilizing the repository pattern with a unit of work, ensuring efficient data management. The application features a user-friendly interface allowing visitors to browse the book catalog. To enhance user interaction, I implemented a secure login system.
          </p>
        </div>

        <br />

        <h3 className='mb-1  w-fit dark:text-deg1 text-deg3-dark font-semibold text-xl'>Key Features</h3>
        <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
          <h4 className='text-lg text-deg1'>User Authentication</h4>
          <ul className='text-sm'>
              Users can explore the website without authentication, but to add items to the shopping cart, a secure login is required.
              <br /><br />
              Two user roles: <br />
              Client: Can browse and purchase books, manage their shopping cart, and view order history.
              <br />
              Admin: Has access to a control management page for adding new products and creating product categories
          </ul>
        </div>

        <br />

        <h3 className='mb-1  w-fit dark:text-deg1 text-deg3-dark font-semibold text-xl'>Admin Control Panel</h3>
        <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
        <p className='text-sm'>
          Exclusive access for admin users to manage the bookstore efficiently.
          <br />
          Admins can add new products to the catalog and create categories to organize the inventory.
        </p>
        </div>

        <br />

        <h3 className='mb-1  w-fit dark:text-deg1 text-deg3-dark font-semibold text-xl'>Repository Pattern with Unit of Work</h3>
        <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
          <p className='text-sm'>
          Implemented a robust data management system using the repository pattern and a unit of work to ensure maintainability and scalability.
          </p>
        </div>

        <br />

        
        <h3 className='mb-1  w-fit dark:text-deg1 text-deg3-dark font-semibold text-xl'>Demo</h3>
        <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
          <div className='text-sm mb-5'>
            The project is accessible online at http://mohamad.somee.com
            <br />
            Feel free to explore the features and functionalities implemented in the application.
            <br />
            <br />
            Demo Client Account:
            <ul>
              <li>Email: demo</li>
              <li>Password: demo</li>
            </ul>
            <br />

            Demo Admin Account:
            <ul>
                <li>Email: demo</li>
                <li>Password: demo</li>
            </ul>
          </div>

          <a href="http://mohamad.somee.com" className='general-btn'>Demo</a>
          
      </div>

      </div>
</div>
</div>
  )
}

export default Project3