import Heroimg from '../images/hero.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";
export default function Hero(){
     return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'> 
     <div className='md:w-1/2 flex flex-col'>
        <h1 className='text-white text-6xl font-Hero-font'> Hi,<br/> I'M CHACHU
        <p className='text-2xl'> Full-stack Developer</p>
        </h1>
        <div className='flex py-5'>
            <a herf="" className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
            <a herf="" className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
            <a herf="" className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
        </div>
        </div>
       
       < img className='md:w-1/3' src={Heroimg}/>
     </section>
}