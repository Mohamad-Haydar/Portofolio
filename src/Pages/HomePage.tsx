import { useEffect, useRef } from "react"
import ProgrammingBro from '../assets/Programming-bro.svg';
import Numbers from "../Components/Numbers";

function HomePage() {
  const numbers = useRef<HTMLDivElement>(null)
  const fragment = document.createDocumentFragment();
  // const father = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    
    if (numbers.current) {
      // Generate and render numbers
      for (let i = 1; i <= numbers.current.clientHeight/24; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = i.toString();
        fragment.appendChild(numberDiv);
      }
      if (numbers.current.children.length === 0){
        numbers.current.appendChild(fragment);
      }
        
    }
  }, []);

  return (
    <div className=' py-10 flex fullscreen relative'>
      {/* numbers */}
      {/* <div ref={numbers} className="ps-2">
      </div> */}
      <Numbers /*home={true}*//>
      
      <div className="content flex py-10 px-3 md:px-6 relative z-10  xs-pad">

        {/* left part */}
        <div className="flex gap-3 md:gap-6 items-center xs-gap ">
          <div className="h-[100%] w-[1px] bg-gray  "/>
          <div className="h-[85%] w-[1px] bg-gray  "/>
          <div className="h-[55%] w-[1px] bg-gray  "/>
          <div className="h-[35%] w-[1px] bg-gray  "/>
        </div>

        {/* info */}
        <div className="flex flex-col align-middle justify-center">
          <p className="ps-5 xl:text-xl">Hello! I am</p>
          <h2 className="ps-5 text-3xl lg:text-5xl xl:text-6xl">Mohamad Haydar</h2>
          <p className="ps-5 text-blue xl:text-xl">I am a Full Stack developper</p>
        </div>
        
      </div>

      {/* image */}
      <div className="home-image max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]">
        <img src={ProgrammingBro} className=" h-full" alt="React logo" />
      </div> 
    </div>
  )
}

export default HomePage