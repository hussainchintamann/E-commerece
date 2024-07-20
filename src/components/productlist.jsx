import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./productlist.css";
// import  './productlist.css'
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(products);
  useEffect(() => {
    axios
      // .get("https://dummyjson.com/products")
      .get("https://dummyjson.com/products")

      .then((response) => {
        setProducts(response.data);
        setSearch(response.data);
      })
      .catch((error) => console.error("fetchin data error", error));
  }, []);

  const Filter = (e) => {
    setSearch(
      products.filter((filters) =>
        filters.name.toLowerCase().includes(e.target.value)
      )
    );
  };

  if (!products) {
    return <h1>looding</h1>;
  }

  return (
    <div>
      <div className="container">
        <form className="d-flex">
          <input
            className="form-control me-2 search "
            onChange={Filter}
            type="search"
            placeholder="Search"
            aria-label="Search "
          />
        </form>
        <div className="row">
          {search.map((product) => (
            <div className="col-4">
              <div
                key={product.id}
                style={{ width: "20rem" }}
                class="card mb-5 "
              >
                <img src={product.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h4 class="card-title">{product.name}</h4>
                  
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary"
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
