import axios from "axios";
import { useState, useEffect } from "react";
export default function Products() {
  const [prod, setProd] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=100").then((res) => {
      console.log("res::", res.data.products);
      setProd([...res.data.products]);
    });
  }, []);
  const handlePriceAsc = () => {
    let temp = [...prod];
    temp.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      } else {
        return -1;
      }
    });
    setProd([...temp]);
  };
  const handlePriceDes = () => {
    let temp = [...prod];
    temp.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      } else {
        return 1;
      }
    });
    setProd([...temp]);
  };
  const handleNameAsc = () => {
    let temp = [...prod];
    temp.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setProd([...temp]);
  };
  const handleNameDes = () => {
    let temp = [...prod];
    temp.sort((a, b) => {
      return b.title.localeCompare(a.title);
    });
    setProd([...temp]);
  };
  return (
    <div>
      <div>
        <button onClick={handlePriceAsc}>sort price asc</button>&nbsp;&nbsp;
        <button onClick={handlePriceDes}>sort price des</button>&nbsp;&nbsp;
        <button onClick={handleNameAsc}> sort name asc</button>&nbsp;&nbsp;
        <button onClick={handleNameDes}> sort name des</button>&nbsp;&nbsp;
      </div>
      <div className="prod-container">
        {prod.map((p, i) => {
          const { title, price, thumbnail } = p;
          return (
            <div key={i} className="prod">
              <h4> {title} </h4>
              <img alt="" src={thumbnail} width={200} />
              <h4>${price} </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
