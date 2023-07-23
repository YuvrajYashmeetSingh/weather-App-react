import React, {useState}  from 'react'
import Dae from "./Dae";

  const Weather = ({weather1}) => // passes objects 
 {
 const {temp,humidity,pressure,main,speed,temp_min,temp_max,country,name,sunset,sunrise} =weather1;// destructuring of objects
     
   let temp1,temp2,temp3; 
     temp1=Math.ceil(temp-273.15);
     temp2=Math.ceil(temp_min-273.15);    temp3=Math.ceil(temp_max-273.15);// temp k to c
    let [date1,setdate1]=useState();
    let [time1,time2]=useState();
//console.log(country);
    let countrycode=`https://flagsapi.com/${country}/shiny/64.png`;
        //country FLAG IMAG
 let fullDate,time,month,day,hours,min,hour1,year,date,min1,sec,sec1;
    setInterval(() => {// code for time and date
       date=new Date();
   month=date.getMonth();
   day=date.getDate();
   year=date.getFullYear();
   hours=date.getHours();
   min=date.getMinutes();
  sec=date.getSeconds();
   (min<10)? min1=`0${min}`:min1=min;;
   (sec<10)? sec1=`0${sec}`:sec1=sec;
   (hours>=12)?hour1=hours-12:hour1=`${hours}`;
     time=`${hour1 }:${ min1}:${ sec1}`;
     fullDate=`${day }:${ month+1}:${ year}`;
    setdate1(fullDate);
    time2(time);
    }, 1000);

    let se=sunset;let dam,timstr;//sunset time code 
    let da=new Date(se*1000);
    (da.getHours()>=12)?dam=da.getHours()-12: dam=da.getHours();
    (da.getMinutes<=9)? timstr=`${dam}:0${da.getMinutes()}`:timstr=`${dam}:${da.getMinutes()}`;
   
    let se1=sunrise;let dam1,dam2;//sunrise time code
    let da1=new Date(se1*1000);
    (da1.getHours()>=12)? dam1=da1.getHours()-12:dam1=da1.getHours();
     (da1.getMinutes()<=9)?dam2=`0${da1.getHours()}`:dam2=da1.getMinutes();

    let timstr1=`${dam1}:${dam2}`;

    return (
        <>
 

<div className='weather'>
  <div className='county'><h2>{main}</h2><br /><h4>{name},{country}</h4><img src={countrycode} alt="country flag" /></div>
  <div className='temp'><h1>{temp1}°c </h1><h5>temp Min:{temp2}°c</h5> <h5>temp max:{temp3}°c</h5></div>
  
  <div className='time'>
    <h2><img src="https://img.icons8.com/material-outlined/24/000000/calendar--v3.png" alt="my img"/><br />{date1}</h2><br />
  <div className='dae'> <h3>{time1} </h3><Dae /></div> 
  </div>
</div>
<div className='kam'>
  <div className="box0"><img src="https://img.icons8.com/material-outlined/24/000000/sunrise.png" alt='my pic' /><h4>sunrise</h4><br /><h4>{timstr1} am</h4></div>
  <div className='box1'><img src="https://img.icons8.com/material-outlined/24/000000/sunset.png" alt='my pic' /><h4>sunset</h4><br /><h4>{timstr} pm</h4></div>
  <div className='box2'><img src="https://img.icons8.com/material-outlined/24/000000/humidity.png" alt='my pic' /><h4>humidity </h4><br /><h4>{humidity} %</h4></div>
  <div className='box3'><img src="https://img.icons8.com/material-outlined/24/000000/pressure.png" alt='my pic' /><h4>pressure</h4><br /><h4>{pressure} MM</h4></div>
  <div className='box4'><img src="https://img.icons8.com/material-sharp/24/000000/wind-speed-98-102.png" alt='my pic' /><h4>wind speed </h4><br /><h4>{speed} km/hr</h4></div>
</div>
 
      </>
    )
}
export default Weather;