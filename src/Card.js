import Button from "./Button";
function Card(props){
    
    return(
        <div className="card">
            <div className="card-image">
                <img src={props.product.image} alt="" />
            </div>
            <div className="card-info">
                <div className="card-name">{props.product.name}</div>
                <div className="rating">{props.product.rating}</div>
                <div className="card-price">{props.product.price}₽</div>
                <Button/>
            </div>
        </div>
    )
}
export default Card;