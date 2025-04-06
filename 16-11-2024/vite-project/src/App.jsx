import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardComponents from './card-component'

function App() {
  const marvelData=[
    {
      name:"IronMan",
      img:"https://cdn.marvel.com/content/1x/002irm_ons_mas_mob_01_0.jpg"
    },
    {
      name:"Cap America",
      img:"https://variety.com/wp-content/uploads/2022/07/MCDAVEN_EC257-e1658173044561.jpg?w=1000&h=527&crop=1"
    },
    {
      name:"Hulk",
      img:"https://images.mid-day.com/images/images/2023/may/Hulk-a_d.jpg"
    }
  ]
  return (
    <>
      <h1>Welcome to React Application</h1>
      <div className='card-container'>
      {
        marvelData.map((data)=>(
            <CardComponents name={data.name} img={data.img}></CardComponents>
        ))
      }
      </div>
    </>
  )
}

export default App
