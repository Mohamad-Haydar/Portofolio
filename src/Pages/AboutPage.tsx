import Numbers from '../Components/Numbers';
// import { useSelectTheme } from '../Context/ThemeContextProvider';

function AboutPage() {

  return (
    <div className=' py-10 flex relative '>
          <Numbers /*home={false}*//>
          
          <div className=' lg:ms-10 ms-1  '>
            <h2 className=' text-4xl '>About me</h2>
            <br />
            <div className='border-s-[1px] border-s-gray border-opacity-[0.5] px-5 max-w-5xl text-deg3-dark dark:text-deg3'>
              <p className='text-sm'>
                Hello! I'm Mohamad Haydar, a passionate and dedicated computer and telecom engineer based in Lebanon. Having recently graduated from the Lebanese University Faculty of Engineering with a strong academic record, including a final year project that earned me a remarkable 86/100, I am excited to share my journey and skills with you.  
              </p>

              <br />

              <h3 className='mb-1  w-fit dark:text-deg1 text-deg3-dark font-semibold text-xl'>Academic Background</h3>
              <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
                <p className='text-sm'>
                I completed my studies with a focus on computer and telecom engineering, and my final year project delved into the fascinating realms of Natural Language Processing and Machine Learning. The project was dedicated to enhancing compliance checks for PV systems and inverters certificates, showcasing my commitment to leveraging cutting-edge technology for real-world problem-solving.
                </p>
              </div>

              <br />

              <h3 className='mb-1  w-fit dark:text-deg1 text-deg3-dark font-semibold text-xl'>Technical Proficiencies</h3>
              <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
                <p className='text-sm '>My journey into the world of technology didn't stop there. I delved into the front-end realm, mastering React and honing my skills in <strong className='dark:text-deg1 text-deg3-dark'>HTML, CSS, and JavaScript with TypeScript</strong>. My experience extends beyond the front-end, as I am proficient in<strong className='dark:text-deg1 text-deg3-dark'> Python</strong>, a language I embraced during my machine learning projects.
                </p>

                <br />
                <p className='text-sm '>
                  To ensure a comprehensive skill set, I ventured into <strong className='dark:text-deg1 text-deg3-dark'> .NET</strong>, completing projects that showcased my ability to design scalable applications from inception to completion. Notably, I developed an<strong className='dark:text-deg1 text-deg3-dark'> MVC book store e-commerce platform and an API for an electronics e-commerce application.</strong>
                </p>
              </div>
              <br />

              <h3 className='mb-1  w-fit dark:text-deg1 text-deg3-dark font-semibold text-xl'>Database Expertise</h3>

              <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
              <p className='text-sm'>
                Database design is a crucial aspect of software engineering, <strong className='dark:text-deg1 text-deg3-dark'>and I have a solid foundation in SQL.</strong> This enables me to create well-structured and efficient databases, ensuring seamless integration with applications.
              </p>
              </div>

              <br />

              <h3 className='mb-1  w-fit dark:text-deg1 text-deg3-dark font-semibold text-xl'>Why Me?</h3>
              <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
              <p className='text-sm'>My diverse skill set, ranging from machine learning and software development to database design, positions me as a versatile professional capable of handling complex projects. With a keen eye for detail and a commitment to staying current with industry trends, I am excited about the prospect of contributing my skills to innovative and challenging projects.</p>
              <br />
              <p className='text-sm'>Explore my portfolio for detailed insights into each project, and feel free to reach out for collaborations, discussions, or just to connect. I look forward to the exciting opportunities that lie ahead!</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default AboutPage