

// function UserInput(){

import { useState } from "react"

//     function handleChange(e){
//         console.log(e.target.value)

//     }


//     return(
//         <>
//         <input onChange={handleChange} type="text" />
//         </>
//     )
// }



function UserInput(){
    const [name, setName] = useState("")

        function submitChange(e){
            setName(e.target.value)


        }
      
        return(
        <>
        <input type="text" onChange={submitChange} />
        <h1>Hello {name}</h1>
        </>
    )
    
}




export default UserInput