import { LinkType } from "@/types/link.types";
import Link from "next/link";

type MenuProps = {
  links: LinkType[];    
};

const Menu = ({links}:MenuProps) => {
  return (
    <nav className="flex flex-col w-fit">
      <ul className="mb-4 w-full">
        {links && links.map((link, index) => (
          <li key={index} className="text-2xl w-full hover:bg-blue-400 hover:text-white"><Link href={link.href} className="p-2 w-full flex">{link.title}</Link></li>
        ))}
       {/*  <li className="text-2xl w-full hover:bg-blue-400 hover:text-white"><Link href="/" className="p-2 w-full flex">Inicio</Link></li>
        <li className="text-2xl w-full hover:bg-blue-400 hover:text-white "><Link href="/" className="p-2 w-full flex">Explorar</Link></li>
        <li className="text-2xl w-full hover:bg-blue-400 hover:text-white "><Link href="/" className="p-2 w-full flex">Perfil</Link></li> */}
      </ul>
      <button className ="button-primary w-fit mx-aut uppercase font-semibold">Postear</button>
    </nav>
  );
};

export default Menu;
