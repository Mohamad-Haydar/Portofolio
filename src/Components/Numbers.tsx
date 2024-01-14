import { useEffect, useRef } from "react";

function Numbers(/*{home} : {home: boolean}*/) {

    const numbers = useRef<HTMLDivElement>(null)
    const fragment = document.createDocumentFragment();

    useEffect(() => {
    
        if (numbers.current) {
          const numberOfLines = Math.ceil(numbers.current?.clientHeight / 24) || 0;
          for (let i = 1; i <= numberOfLines; i++) {
            const numberDiv = document.createElement('div');
            numberDiv.classList.add('number');
            numberDiv.textContent = (i).toString();
            fragment.appendChild(numberDiv);
          }
          //  if (numbers.current.children.length === 0){
            numbers.current.innerHTML = '';
        numbers.current.appendChild(fragment);
          // }
            
        }
      }, [numbers.current?.clientHeight]);

  return (
    
    <div ref={numbers} className="ps-2">
      </div>
  )
}

export default Numbers