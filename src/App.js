import Header from "./Header";
import Content from "./Content";
import Button from "./Button";
import { useState } from "react";
function App(props) {
  const [database, setdatabase] = useState([
    {
      id: 1,
      name: "MacBook",
      price: 100000,
      bought: false,
      rating: 5,
      image: "http://intocode.ru/d/react-project-1/images/1.jpg"
    },
    {
      id: 2,
      name: "Galaxy",
      price: 35999,
      bought: false,
      rating: 4,
      image: "http://intocode.ru/d/react-project-1/images/2.jpg"
    },
    {
      id: 3,
      name: "Скутер",
      price: 65500,
      bought: false,
      rating: 5,
      image: "http://intocode.ru/d/react-project-1/images/3.jpg"
    },
    {
      id: 4,
      name: "Монитор Samsung",
      price: 12000,
      bought: false,
      rating: 3,
      image: "http://intocode.ru/d/react-project-1/images/4.jpg"
    },
    {
      id: 5,
      name: "Респераторная маска",
      price: 500,
      bought: false,
      rating: 5,
      image: "http://intocode.ru/d/react-project-1/images/5.jpg"
    },
    {
      id: 6,
      name: "Стиральная машина",
      price: 100000,
      bought: false,
      rating: 3,
      image: "http://intocode.ru/d/react-project-1/images/6.jpg"
    },
    {
      id: 7,
      name: "Белый холодильник",
      price: 43100,
      bought: false,
      rating: 5,
      image: "http://intocode.ru/d/react-project-1/images/7.jpg"
    },
    {
      id: 8,
      name: "Колонка",
      price: 3000,
      bought: false,
      rating: 4,
      image: "http://intocode.ru/d/react-project-1/images/8.jpg"
    },
    {
      id: 9,
      name: "Наушники",
      price: 1500,
      bought: false,
      rating: 5,
      image: "http://intocode.ru/d/react-project-1/images/9.jpg"
    }
  ]);
  const product=database.map((plan)=>{
    return(
      <div className="card">  
<div className="card-image">
  <img src={plan.image} alt="ac" />
</div>
<div className="card-info">
  <div className="card-name">{plan.name}</div>
  <div className="card-price">{plan.price} ₽</div>
  <Button/>
</div> 
</div>
    )
  });
 setdatabase(product)
  return (
    <div className="app">
        <Header/>
        <Content product={product}/>
    </div>
  );
}

export default App;
