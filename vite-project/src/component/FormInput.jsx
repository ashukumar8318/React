import { useState } from "react"

function FormInput(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("form submitted")
         console.log("Email:", email);
        console.log("Password:", password);
        

    }

    const handleEmailChange=(e)=>{
       setEmail(e.target.value)
      

    }
    const handlePasswordChange=(e)=>{
          setPassword(e.target.value)
    }


    return(
        <form onSubmit={handleSubmit} >
            <input onChange={handleEmailChange} type="Email" />
            <input onChange={handlePasswordChange} type="Password" />

            <button type="submit">Login</button>
        </form>
    )
}

export default FormInput