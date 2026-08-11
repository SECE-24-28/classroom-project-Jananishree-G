import { useEffect, useState } from "react";

const Product = () => {

        const [users,setusers]=useState([])
        const[loading,setloading]=useState(true)

        useEffect(()=>{
           fetch("https://jsonplaceholder.typicode.com/users")
           .then((res)=>res.json())
           .then((data)=>{
                    setusers(data);
                    setloading(false);
        })
        .catch((err)=>{
          console.log("errror:"+ err);
        })
           }
        
 ,[]);
  return (
    <div>
          <h1>this product useeffect page</h1>
          <h1>{loading && <p>loading</p>}</h1>
      {users.map((user)=>(
           <div key={user.id}>
         <h1>{user.name}</h1>
         <h1>{user.email}</h1>
           </div>
      ))}
    </div>
  )
}

export default Product


//https://jsonplaceholder.typicode.com/users 