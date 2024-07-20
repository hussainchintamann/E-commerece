import axios from "axios"
import { useEffect, useState } from "react"

const SearchList = ()=>{
  
   

    const Filter = (e)=>{
    setSearch(products.filter(f=f.name.toLowerCase().includes(e.target.value)))
    }

    return (
        <>
         <form className="d-flex">
        <input className="form-control me-2" onChange={Filter} type="search" placeholder="Search" aria-label="Search "/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

     
        </>
    )
}

export default SearchList