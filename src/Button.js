function Button(props){
  return(
    <div className="card-button">
      <button className="btn" disabled={props.bought} onClick={() => props.setBought(props.id)}>
        {props.bought ? "добавлено в корзину" : "добавить в корзину"}</button>
    </div>
  )
}
export default Button;