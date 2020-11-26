import logoC from "./shopping-cart-solid.svg";
function Checkout(){
  return(
  <div className="checkout">
    <img src={logoC} alt='logo'/>
    <span className="counter">0</span>
  </div>
  )
}
export default Checkout;