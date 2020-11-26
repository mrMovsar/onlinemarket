import Card from "./Card";

function Content(props){
  
  

  return(
    <div className="content">
      {props.products.map((product)=>{
        return(
           <Card product={product}/>
        )
      })}
    </div>
  )
}
export default Content;