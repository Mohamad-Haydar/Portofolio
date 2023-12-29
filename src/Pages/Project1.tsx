import Numbers from '../Components/Numbers'

function Project1() {
  return (
    <div className=' py-10 flex relative '>
          <Numbers home={false}/>
      
          <div className=' lg:ms-10 ms-1  '>
            <h2 className=' text-4xl '>Compatibility Verification of Photovoltaic Models and Inverters Based On Natural Language Processing</h2>
            <ul className='dark:text-deg3 text-deg3-dark text-xs'>
              <li>March 2023 - July 2023 </li>
              <li>Supervised by: Dr. Rima Assaf </li>
              <li>Defended on 26 July 2023 in front of the jury: </li>
              <li>Dr. Haidar El Mokdad President </li>
              <li>Dr. Youssef Harkous Member </li>
            </ul>
            <br />
            <div className='border-s-[1px] border-s-gray border-opacity-[0.5] px-5 max-w-5xl text-deg3-dark dark:text-deg3'>

              <h3 className='mb-1  w-fit dark:text-deg1 text-deg3-dark font-semibold text-xl'>Overview of the Project</h3>
              <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
                <p className='text-sm'>
                This project addresses the evolving landscape of renewable energy, specifically the surge in solar power adoption and the challenges faced by grid operator companies in ensuring the compliance and quality of Photovoltaic (PV) systems. The traditional manual verification processes for PV models and inverters have proven to be time-consuming and error-prone. To streamline and enhance this process, we've developed a machine learning-based tool that automates compatibility assessments.
                </p>
              </div>

              <br />

              <h3 className='mb-1  w-fit dark:text-deg1 text-deg3-dark font-semibold text-xl'>Importance of Compliance Checks</h3>
              <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
              <p className='text-sm'>
              In the realm of PV system installations, compliance with industry standards is paramount. Traditionally, compliance checks involved manual efforts, posing challenges and limitations. This project aims to revolutionize this approach by leveraging machine learning and automation, offering a more efficient, accurate, and user-friendly solution for verifying the compatibility of PV models, inverters, and their certificates.
              </p>
              </div>

              <br />

              <h3 className='mb-1  w-fit dark:text-deg1 text-deg3-dark font-semibold text-xl'>Project Phases</h3>
              <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
              <p className='text-sm'>
              The project unfolds through well-defined phases, each contributing to the development of an innovative automated compatibility verification system for PV systems and inverters. In the initial chapter, "Problem Analysis," we explore the existing challenges, review the state of the art, and define our problem statement. This chapter sets the foundation for our approach, detailing the methodology we employ. Moving to the second chapter, "Compliance Check: Manual VS Software Automation," we delve into the current manual compliance check processes for PV and inverters. The comparison with software-based approaches highlights the transformative potential of automation. The subsequent chapter, "System Analysis and Design," focuses on requirements specification, outlining both functional and non-functional aspects. It further elaborates on the system architecture, emphasizing communication and interaction components. The fourth chapter, "Implementation and Development," details the extensive use of software tools and technologies, covering programming languages, machine learning libraries, web development frameworks, data processing, and version control. The implementation phase involves data creation, augmentation, and model implementation, emphasizing tokenization, vectorization, and fine-tuning for Named Entity Recognition (NER). The results and analysis, compatibility checks, data collection tool, authentication system, and hosting are intricately addressed, providing a comprehensive view of the project's technical intricacies. The project concludes with reflections on the use of Git and GitHub, summarizing the development process and underscoring the significance of each phase in achieving the project's objectives.
              </p>
              </div>

              <br />

              <h3 className='mb-1  w-fit dark:text-deg1 text-deg3-dark font-semibold text-xl'>Project Impact</h3>
              <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
                <p className='text-sm'>
                By automating the compatibility verification process, this project contributes to the advancement of renewable energy and sustainable practices. The combination of machine learning, automation, and a user-friendly design signifies a significant step forward in addressing the challenges of compatibility verification in the renewable energy sector.
                </p>
              </div>

              <br />

              <h3 className='mb-1  w-fit dark:text-deg1 text-deg3-dark font-semibold text-xl'>Demo</h3>
              <div className='border-s-[1px] border-s-gray border-opacity-[0.5] ps-5'>
                <p className='text-sm'>
                This portfolio project has been designed as a standalone application to optimize its functionality when run locally. Given the specificity of its focus, we've opted for an application-based deployment to ensure a seamless and efficient user experience. If you're interested in exploring the project, you can easily access the code and instructions for running the application on the dedicated GitHub repository. Simply follow the provided link and refer to the README instructions for a smooth download and setup process. This approach allows users to interact with the application at their convenience, making it easily accessible and tailored to individual preferences. Visit the GitHub repository at https://github.com/Mohamad-Haydar/FYP.git to experience the project firsthand.
                </p>
</div>


            </div>
      </div>
    </div>
  )
}

export default Project1