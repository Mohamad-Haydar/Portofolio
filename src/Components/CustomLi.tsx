import { Link, useNavigate } from "react-router-dom"
import { useList } from "../Context/CustomLiContext"
import { MouseEvent } from "react";
// import { useSelectTheme } from "../Context/ThemeContextProvider";

function CustomLi({title, selected}:{title:string,selected:boolean}) {

  const {addLi, removeLi} = useList()
  const navigate = useNavigate()
  // const {theme} = useSelectTheme()

  const handleRemove = (e: MouseEvent, title:string) => {
    e.stopPropagation();
    const goto = removeLi(title)
    navigate(goto);
  }

  const handleAdd = (title: string) => {
    addLi(title, true)
  }

  return (
    <>
    <li className={
        ` flex text-xs items-center text-deg1 hover:bg-deg1-dark cursor-pointer 
        ps-4 relative ${selected && 'bg-deg1-dark border-t-{theme} border-t-blue border-t-2 '} 
        ${!selected && ' border-b-white border-b-[1px] border-opacity-[.3]'}
       `}>
      <Link to={title} className="py-2" onClick={() => handleAdd(title)} >
        <div >
          {title}
        </div>
      </Link>
        <span className="ms-4 p-1 rounded transition-colors hover:bg-deg2-dark " onClick={(e) => handleRemove(e,title)}><i className="bi bi-x-lg"></i></span>
        <div className="h-full w-[1px] bg-white opacity-[.5] z-2"></div>
      </li>
      </>
  )
}

export default CustomLi