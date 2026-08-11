import axios from 'axios';
import { useEffect, useState } from "react";
const User = () => {

        const [users,setusers]=useState([])
        const[loading,setloading]=useState(true)

        useEffect(()=>{
           
    axios
       .get("https://jsonplaceholder.typicode.com/users")
       .then((res)=>{
                    setusers(res.data);
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

export default User


//https://jsonplaceholder.typicode.com/users 