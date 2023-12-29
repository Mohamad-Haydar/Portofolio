import { useSwitchMode } from '../Context/DarkModeContextProvider';
import NavBar from './NavBar'

function Upper() {

    const { mode } = useSwitchMode();

  return (
      <div className=' bg-deg3-dark w-full py-1'>
          <h1 className="text-center text-deg1 text-xs">Mohamad Portfolio</h1>
      </div>
  )
}

export default Upper