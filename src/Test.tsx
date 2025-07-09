import { useState } from "react";
import "./test.scss";

interface CartInfo{
  selectedItemInfo:{
    name: string;
    price: number;
    count: number;
    image: string;
  };
}


const Test = () => {

  const [cartInfo, setCartInfo] = useState<CartInfo>({
    selectedItemInfo:{
    name: "아메리카노",
    price: 4500,
    count:1,
    image:""
    },
  });

  const handleIncrease=()=>{
    setCartInfo(prev=>({
      selectedItemInfo:{
        ...prev.selectedItemInfo,
        count:prev.selectedItemInfo.count+1
      }
    }));
  }

  const handleDecrease=()=>{
    setCartInfo(prev=>({
      selectedItemInfo:{
        ...prev.selectedItemInfo,
        count:prev.selectedItemInfo.count-1
      }
    }));
  }

  const {name, price, count, image} = cartInfo.selectedItemInfo;

  return (

    <>
      <div className="menu">
        <div className="menu content">
          <div className="menu content name">{name}</div>
          <div className="menu content price">{price}원</div>
          <div className="menu content count">
            <button onClick={handleDecrease}>-</button>
            <div className="menu content count num">{count}</div>
            <button onClick={handleIncrease}>+</button>
          </div>
        </div>
        <div className="menu image">
            <img src={image}  alt={name} />
        </div>
      </div>
    </>
  );
}

export default Test;