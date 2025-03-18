import Link from "next/link";
import Image from "next/image"

const Navbar = () => {

  return (
    <div>
      <nav className="bg-gray-900 p-2">
        <div className="container mx-auto flex justify-between items-center">
          <button
            className="p-2 text-white bg-gray-800 hover:bg-gray-900 rounded-md"
          >
            
          <Link href='/'>
            <Image src='/mbo-logo.png' width={100} height={60} alt="/" priority={true}/>
          </Link>
            
            
          </button>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;