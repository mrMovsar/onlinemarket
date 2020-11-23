import Logo from "./Logo/Logo";
import Menu from "./Menu";
import Checkout from "./Checkout";

const Header=()=>{
  return(
  <div className="header">
    <Logo/>
    <Menu/>
    <Checkout/>
  </div>
  )
}
export default Header;