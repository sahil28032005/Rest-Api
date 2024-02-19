import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
export default function () {
  const [dataArrive,setData]=useState(null);
  const [isLoading,changeState] = useState(true);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {setData(json);
      changeState(false)})
  },[]);
  console.log(dataArrive);
  return (
    <div className='cardContainer'>
     {!isLoading && dataArrive.map(iteration=>(
      <CardItem key={iteration.id} title={iteration.title} desc={iteration.body}/>
     ))}
       
    </div>
  )
}
