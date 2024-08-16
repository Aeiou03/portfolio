import { Bars3Icon, BeakerIcon } from '@heroicons/react/24/solid'

function MyComponent() {
  return (
    <div>
      <Bars3Icon className="size-6 text-blue-500" />
      <p>...</p>
    </div>
  )
}
export default function Header(){
    return <header className="flex justify-between px-5 py-2 bg-primary"> 
        <a className="font-bold text-black" herf="#"> Web app</a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li><a herf="#">Home</a></li>
            <li><a herf="#">About</a></li>
            <li><a herf="#">Project</a></li>
            <li><a herf="#">contact</a></li>
        </ul>
        </nav>
        <nav className="block md:hidden ">
        <ul className="flex flex-col text-white mobile-nav">
            <li><a herf="#">Home</a></li>
            <li><a herf="#">About</a></li>
            <li><a herf="#">Project</a></li>
            <li><a herf="#">contact</a></li>
        </ul>
        </nav>
        <button className='block md:hidden'>
            <Bars3Icon className='text-white h-5'/>
        </button>
    </header>
}