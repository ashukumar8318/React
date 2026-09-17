import { useState } from 'react'
import Welcome from './component/Welcome'
import Product from './component/Product'
import UserInput from './component/UserInput'
import FormInput from './component/FormInput'
import Counter from './component/Counter'


function App(){
  return(
    <>
     <Product name ="ashu"/>
     <UserInput/>
     <FormInput/>
     <Counter/>

    </>
  )
}

export default App
