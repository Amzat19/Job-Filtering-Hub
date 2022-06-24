import MobileHeader from "../public/images/bg-header-mobile.svg"; 
import DeskTopHeader from "../public/images/bg-header-desktop.svg";

const Header = () => {
     return ( 
        <header>
          <h1 className="text-5xl uppercase absolute mt-3 left-[10vw] bg-[url('/images/logo-bg.jpg')] bg-clip-text font-bold">Job filter hub</h1>
          <MobileHeader className='bg-dDarkCyan  w-screen md:hidden'/>
          <DeskTopHeader className='bg-dDarkCyan w-0 h-0 md:w-screen md:h-40'/>
      </header>
     );
};

export default Header;