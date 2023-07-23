import React, {useState,useEffect} from 'react'

const Dae = () => {let [am,pm] = useState();   let time=new Date().getHours();
useEffect(() => {
   if(time<=12&& time>=0)
   { pm("am");
     }
   else
     {pm("pm");
   }


// eslint-disable-next-line
},[])
 
return(<h3>{am}</h3>);
}

export default Dae;
