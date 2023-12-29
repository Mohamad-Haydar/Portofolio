import {  ReactNode, useEffect, useState } from "react";
import { Sidebar,  Menu, MenuItem, SubMenu  } from "react-pro-sidebar";
import Html from '../assets/html5.svg'
import Python from '../assets/python.png'
import CSharp from '../assets/csharp.png'
import { useNavigate } from "react-router-dom";
import { useList } from "../Context/CustomLiContext";

interface Item {
  title: string,
  to: string,
  selected: string, 
  collabsed: boolean,
  setSelected:(title: string) => void,
  addLi: (title:string, selected: boolean) => void,
  icon: ReactNode
}

interface SideBarProps {
  state: {
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const Item = ({ title, to, selected, setSelected, collabsed, addLi, icon }: Item) => {
  const navigate = useNavigate();
  
  return (
      <MenuItem
      className="h-10 text-xs"
          active={selected === title}
          onClick={() => {
              setSelected(title)
              addLi(title, true)
              navigate(to)
          }}
      >
          {!collabsed && <div className="text-sm ps-5">{icon}{title}</div>}
      </MenuItem>
  );
};

const btnHover = {
  '&:hover': {
      backgroundColor: "#1b1d1d",
      color: "#fdfdfd",
      // 'border-left': "3px solid blue"
    },
}

function SideBar({state}:SideBarProps) {
  const [selected, setSelected] = useState("Home.html");
  const {list, addLi} = useList()
  const handleClick = () => {
    state.setCollapsed(prev => !prev)
  }

  useEffect(() => {
    let item = list.filter(item => item.selected == true )
    setSelected(item[0]?.title)
  }, [list])

  return (

    <Sidebar collapsed={state.collapsed} className="main myclass border-e-[0.5px] border-e-gray" backgroundColor="#292c28" width="180px" collapsedWidth="0" >
      <h2 className="h-[34px] text-deg1 text-center leading-[34px] mb-5 shadow-lg text-sm flex items-center justify-between md:justify-center">
      <span className="md:hidden"></span>Explorer
          <span className="bg-deg2-dark px-2 md:hidden">
            {state.collapsed && <i className="bi bi-box-arrow-in-right  " onClick={handleClick}></i>}
            {!state.collapsed && <i className="bi bi-box-arrow-in-left" onClick={handleClick}></i>}
          </span>
      </h2>
      
      <Menu className=" text-deg1 text-xs"
            menuItemStyles={{
              button: ({active}) => {
                  return {
                      ...btnHover,
                      backgroundColor: active && btnHover["&:hover"].backgroundColor,
                      color: active && btnHover["&:hover"].color,
                      // 'border-left': active && btnHover["&:hover"]["border-left"]
                  }
              },
          }} 
        >
        <Item title={'Home.html'} to={'/'} selected={selected} collabsed={state.collapsed} 
          setSelected={setSelected} addLi={addLi} icon={ <img className=" inline mr-2 " src={Html} alt="Html" /> }/>
        <Item title={'About.html'} to={'/About.html'} selected={selected} collabsed={state.collapsed} 
          setSelected={setSelected} addLi={addLi} icon={<img className=" inline mr-2 " src={Html} alt="Html" />}/>
          {/* <SubMenu label="Projects" icon={<span className="arrow-container p-2"></span>}> */}
            <Item title={'Project1.py'} to={'/Project1.py'}selected={selected} collabsed={state.collapsed} 
              setSelected={setSelected} addLi={addLi} icon={<img className="w-[16px] inline mr-2 " src={Python} alt="Python" />}/>
            <Item title={'Project2.cs'} to={'/Project2.cs'}selected={selected} collabsed={state.collapsed} 
              setSelected={setSelected} addLi={addLi} icon={<img className="w-[16px] inline mr-2 " src={CSharp} alt="Python" />}/>
            <Item title={'Project3.cs'} to={'/Project3.cs'}selected={selected} collabsed={state.collapsed} 
              setSelected={setSelected} addLi={addLi} icon={<img className="w-[16px] inline mr-2 " src={CSharp} alt="Python" />}/>
          {/* </SubMenu> */}
      </Menu>
    </Sidebar>
  )
}

export default SideBar