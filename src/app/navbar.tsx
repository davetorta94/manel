"use client";
import Link from "next/link";
import Image from "next/image"

const Navbar = () => {
  //const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Contenido colapsable 
      {isOpen && (
        <div className="bg-gray-900 p-4 transition-all duration-300">
          <h5 className="text-white text-xl font-semibold">Collapsed content</h5>
          <span className="text-gray-400">Toggleable via the navbar brand.</span>
        </div>
      )}

      BOTON CON TOGGLE
      <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white bg-gray-800 hover:bg-gray-900 rounded-md"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            
          <Link href='/'>
            <Image src='/mbo-logo.png' width={100} height={60} alt="/"/>
          </Link>
            
            
          </button>

      */}

      {/* Navbar */}
      <nav className="bg-gray-900 p-2">
        <div className="container mx-auto flex justify-between items-center">
          <button
            className="p-2 text-white bg-gray-800 hover:bg-gray-900 rounded-md"
          >
            
          <Link href='/'>
            <Image src='/mbo-logo.png' width={100} height={60} alt="/"/>
          </Link>
            
            
          </button>

          {/*<button className="p-2 bg-white text-black rounded-md">
            <Link href='/masia'>
            MASIA
            </Link>
          </button>*/}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;