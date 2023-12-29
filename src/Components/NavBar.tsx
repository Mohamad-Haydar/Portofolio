import { useEffect, useRef, useState } from 'react';
import { useSwitchMode } from '../Context/DarkModeContextProvider';
import CustomLi from './CustomLi';
import { useList } from '../Context/CustomLiContext';

interface SideBarProps {
  state: {
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

type CustomLi = {
  title: string;
  selected: boolean;
};

function NavBar({state}:SideBarProps) {

    const { mode,switchColorMode } = useSwitchMode();
    const {list} = useList()

    const hScroll = useRef<HTMLUListElement>(null);


  useEffect(() => {
    hScroll.current?.addEventListener('wheel', function(event) {
      event.preventDefault(); 
      this.scrollLeft += event.deltaY * -0.3;
    });
  }, [list]);

    const handleClick = () => {
      state.setCollapsed(prev => !prev)
    }

  return (
    <nav className={`${mode} w-full`}>
    <div className='navBar bg-deg2-dark w-full text-deg1  drop-shadow-lg'> 
      <div className='flex w-full '>
        <span className="text-center border-b-white border-b-[1px] border-opacity-[.5] bg-deg1-dark px-2 text-deg1 flex items-center justify-center border-e-white border-e-[1px]">
          {state.collapsed && <i className="bi bi-box-arrow-in-right " onClick={handleClick}></i>}
          {!state.collapsed && <i className="bi bi-box-arrow-in-left " onClick={handleClick}></i>}
        </span>
        <ul className=' flex hideScroll flex-1' style={{ maxWidth: 'calc(100vw - 62px)', overflowX: 'auto', whiteSpace: 'nowrap'}} ref={hScroll}>
          {/* <CustomLi title={'Home'} selected={true}/>
          <CustomLi title={'About'} selected={false}/>
          <CustomLi title={'Projects'} selected={false}/> */}
          {list.map((item, index) => (
            <CustomLi {...item} key={index}/>
          ))}
          <li className='flex-1  border-b-white border-b-[1px] border-opacity-[.3]'></li>
        </ul>
      </div>
      <div className='border-b-white border-b-[1px] border-s-white border-s-[1px] px-[5px] border-opacity-[.5] absolute right-0 top-0 h-full bg-deg1-dark'>
        <button onClick={switchColorMode} className=' h-full border-none '>
            {mode === 'light' ? <i className="bi bi-moon"></i>:<i className="bi bi-brightness-high"></i>}
        </button>
      </div>
    </div>
  </nav>
  )
}

export default NavBar