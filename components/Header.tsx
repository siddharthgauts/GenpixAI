function Header() {

  return ( <header className ="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
   {/*left*/}
   <div className="flex space -x-2 items-center">

    <img
    src ="https://links.papareact.com/4t3"
    alt="logo"
    height={30}
    width={30}
    />
    
    <div>
        <h1 className="font-bold">
        Genpix <span className="text-gray-600">-Image by AI</span>
        <h1>
            <h2 className= "text-xs text-violet-500">
                Create your owm AI image 
            </h2>
        </h1>




        </h1>
    </div>
   </div>
    
    {/*right*/}

    <div className ="flex text-xs md:text-base divide-x items-center text-gray-500">
  <a href="https://chatgpt-siddharthgauts.vercel.app/" className="px-2 font-light ">
    Checkout ChatGPT_2.O
  </a>
  <a href="https://www.linkedin.com/in/siddharthgauts/" className="px-2 font-light">
    My Linkedin profile
  </a>
    </div>

   
  </header>   
  )
}

export default Header;
