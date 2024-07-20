import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


const ProductDetaile =()=>{
 
    
    const{ productId } = useParams();
    const[product , setProduct] = useState(null)
    useEffect(()=>{
        axios 
        .get(`https://dummyjson.com/products/${productId}`)
        .then((response) => setProduct(response.data))
        .catch((error) => console.error('fetchon Data error' , error))

    },[productId])

    if(!product)
    {
      return  <h1>Loading...</h1>
    }

return (
   
    <>
    <div className="container d-flex pe-5 justify-content-center mt-5 ">
   <div class="card mb-3 border-light" style= {{maxWidth:'900px'}}>
  <div class="row g-0">
    <div class="col-md-5 ">
      <img src={product.thumbnail} class="img-fluid rounded-start" style= {{height:'500px',width:'600px'}} alt="..."/>
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title">{product.name}</h5>
        <p class="card-text"><h5>Description</h5>{product.description}</p>
        <p class="card-text"> <h5>Brand</h5> {product.brand}</p>
        <p class="card-text"><h5>Rating</h5>{product.rating}</p>
        <h3> Some Information </h3>
        <p class="card-text"> {product.connectivity} {product.color} {product.storage_capacity} {product.interface} {product.display} {product.sensor}{product.battery_life} {product.suction_power} {product.ram} {product.output_power} {product.screen_size} {product.storage} {product.compatibility}</p>
        <p class="card-text"><h3>Price</h3>{product.price}</p>
        <Link to={'Addcart'}  class="btn btn-primary">Add to Cart</Link>
        
      </div>
    </div>
  </div>
</div>
</div>
</>
)

    
}

export default ProductDetaile