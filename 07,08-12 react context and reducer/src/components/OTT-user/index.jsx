import React, { createContext, useState } from 'react'
import Home from './home'
import Office from './office'

export const OtgContext = createContext(null)

function UserAreaa() {
    const [dataValue,setData] = useState("New Data")
  return (
    <div>
        <OtgContext.Provider value={{dataValue,setData}}>
        <Home/>
        <Office/>
        </OtgContext.Provider>
    </div>
  )
}

export default UserAreaa