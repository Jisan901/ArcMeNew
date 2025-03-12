import { Bars3Icon } from '@heroicons/react/24/outline'
import { Logo } from './Logo'
type Props = {
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
  };
export const SpatialNavigation = ({setActive}:Props) => {
    //const links = useRef<HTMLDivElement>(null);
    
    
  return (
    <div className='fixed top-0 w-full z-10  h-screen mb-[1px]'>
        <div className="flex justify-between w-full px-5">
            <Logo/>
            <Bars3Icon className='h-12 w-12' onClick={()=>setActive(e=>!e)}/>
        </div>
        {
        <div className="flex justify-center items-center w-full">
            <div className="links w-1/2 flex flex-col">
                <a>Home</a>
                <a>Link</a>
                <a>services</a>
                <a>About</a>
            </div>
            <div className="images w-1/2"></div>
        </div>
        }
    </div>
  )
}
