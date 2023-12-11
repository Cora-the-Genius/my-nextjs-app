import Link from "next/link"
// import Logo from "./Warm.png"
import Image from "next/image"


function Navbar() {
  return (
    <nav className="vertical-nav">
      {/* <Image 
        src={Logo}
        alt="Warm"
        width={80}
        quality={100}
        placeholder="blur"
      /> */}
      <ul>
        <li>
          <Link href="/generator">
            <Image src="/icons/cognition.svg" alt="cognition" width={30} height={30} /><span>Expression Generator</span>
          </Link>
        </li>
        <li>
          <Link href="/journal">
            <Image src="/icons/checkbox.svg" alt="checkbox" width={30} height={30} /><span>Dot Connector</span>
          </Link>
        </li>
        
      </ul>
    </nav>
  )
}

export default Navbar
