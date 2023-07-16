import Image from "next/image";
import Logo from "@/public/red-p-logo-text_dao_croped 1.png";
import Wrapper from "@/components/shared/Wrapper";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="sticky top-0 ">
      <Wrapper>
        <div className="flex justify-between pt-4 pb-2 items-center bg-white">
          {/* Logo */}
          <Image src={Logo} alt="Panaverse Logo" />
          {/* NavBar */}
          <NavBar />
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
