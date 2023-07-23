import React, {useState,useEffect} from 'react';
import Weather from './Weather';
 const King = ( ) => {
   const [searchValue,setsearchValue]=useState("Srinagar");//here default place is srinagar
   const [weather1,weatherset]=useState({}); 
  const [mood,setmood]=useState();
  useEffect(() => {// on load it will call firs tym and show the weather report of default place 
    getweatherinfo();// eslint-disable-next-line
     },[])
   const getweatherinfo=async()=>{ // return promise

     try {
    // let apiurl="https://api.openweathermap.org/data/2.5/weather?q="+searchValue+"&appid=170b40dde43a8167aa5d8befa3f4365b";//api 
     let apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=170b40dde43a8167aa5d8befa3f4365b`;// api 
let Data= await fetch(apiurl);// fetching data ,await fn sa aga vala vi data bi fetch ho sakta  jab tak ja data fetch hota
let weatherData=await Data.json(); // converting the data
const {temp,temp_min,temp_max,humidity,pressure}=weatherData.main; // object destructuring
const{main}=weatherData.weather[0];
const {name}=weatherData;
const {speed}=weatherData.wind;
const {country,sunset,sunrise}=weatherData.sys;
const weatherDataInfo={
  temp,humidity,pressure,main,temp_min,temp_max,speed,country,name,sunset,sunrise
};   //putting all objects in it
weatherset(weatherDataInfo); //passing weatherinfo in to the weatherDataInfo


if(main)// it is weather mood means rain,sunny,clear,snow ,haze etc
{

  switch (main) {
    case "Clouds": 
setmood("https://img.icons8.com/fluent/144/000000/weather.png" )

      break;
  case "Rain":
  setmood ( "https://img.icons8.com/office/160/000000/heavy-rain.png")//rainy
    break;
    case 'Clear':
   setmood("https://img.icons8.com/emoji/96/000000/sun-emoji.png");
   
   
      break;
      case "Haze":
        setmood("https://img.icons8.com/fluent/96/000000/fog-day.png")
        break;
        case "Snow":
          setmood("https://img.icons8.com/fluent/96/000000/snow.png")
      break;
      case "Drizzle":
        setmood("https://img.icons8.com/ios/150/000000/rainy-weather.png");
        break;
case "Thunderstorm":
  setmood("https://img.icons8.com/ios/100/0000/storm--v100.png");
  break;
      default:
        setmood("https://img.icons8.com/ios/100/000000/sky.png")
  }
}


     } catch (error) {//it will show error if there is any problem in api
       alert("city not found");
     }
     
   }
  

  return (<> <div className='main'> 
  <div className='input'><input type="search" placeholder='Enter your city'  onChange={(e)=>setsearchValue(e.target.value)} value={searchValue}/> 
   <button onClick={getweatherinfo} type='button'><img src="https://img.icons8.com/material-two-tone/24/000000/search.png" alt="search " /></button></div>
  <div className='img'>
  <img src={mood}alt="weather img" width='240px' />
  </div>
  <div className="badal1">< Weather weather1={weather1}/></div>{/* passing state as props and passing its data */}
   
  
  
  </div></>
  ) 
}
export default King;