import Image from "next/image";
import Link from "next/link";

function Header() {

  return ( <header className ="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
   
   <div className="flex space -x-2 items-center">

    <Image
    src ="https://links.papareact.com/4t3"
    alt="logo"
    height={30}
    width={30}
    />
    
    <div>
      <h1 className="font-bold">
        Genpix <span className="text-gray-600">-Image by AI</span>
          </h1>
             <h2 className= "text-xs text-violet-500">
                Create your own AI image 
             </h2>
    </div>
   </div>
    
    {/*right*/}

    <div className ="flex text-xs md:text-base divide-x items-center text-gray-500">
  <Link 
  href="https://chatgpt-siddharthgauts.vercel.app/" className="px-2 font-light ">
    Checkout ChatGPT 2.O
  </Link>
  <Link
   href="https://www.linkedin.com/in/siddharthgauts/" className="px-2 font-light"
   >Connect_me
    </Link>
    </div>

   
  </header>   
  )
}

export default Header;
