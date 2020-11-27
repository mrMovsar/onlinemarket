import logoC from "./shopping-cart-solid.svg";
function Checkout(props){
  const count = props.products.filter((prod)=>{
    return prod.bought;
  }
  )

  return(
  <div className="checkout">
    <img src={logoC} alt='logo'/>
    <span className="counter">{count.length}</span>
  </div>
  )
}
export default Checkout;