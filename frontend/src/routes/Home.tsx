import axios from "axios";
import { FC, useEffect, useState } from "react";
import server from "../server";

const Home:FC=()=>{
    const [data,setData]=useState<string>("");

    useEffect(()=>{
        async  function  checkServerIsConnected() {
        
            const resp= await axios.get(`${server}`,{withCredentials:true});
            if(resp.data.success){
               setData(resp.data.message);
            }
            console.log(resp.data);
        }
//   .
        checkServerIsConnected();
    },[]);
    return <div style={{textAlign:"center"}}>
    <h1 >Home page</h1>
    <p>Data from server : {data}</p>
    
    </div>
}

export default Home