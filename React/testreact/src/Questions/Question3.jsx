
import { useState } from "react";
import toast from "react-hot-toast";


const Question3 = () => {



    const [userData , setUserData] = useState({name : '' , email : '' , password : ''})

    const handlechange = (event) => {
        setUserData({...userData , [event.target.name] : event.target.value});
    }

    async function sendDataToBackend (event){
        event.preventDefault();
        if(userData.name && userData.email && userData.password){
            if(userData.password.length >= 8){
                try{
                  
                    const response = {data : {success : true}}
                    if(response.data.success){
                        toast.success("Resgistration Successfull")
                        setUserData({name : '' , email : '' , password : ''})
                    }
                }
                catch(error){
                    toast.error(error);
                }

            }else{
                toast.error("password must be 8 digit")
            }
        }else{
            toast.error("All fields are Mandatory");
        }
    }

    console.log(userData)

    return (
        <div>
            <form onSubmit={sendDataToBackend} >
                <h1>Register</h1>
                <label>Name</label><br/>
                <input type='text' name="name" onChange={handlechange} value={userData.name} /><br/>

                <label>Email</label><br/>
                <input type='Email' name="email" onChange={handlechange}  value={userData.email} /><br/>

                <label>password</label><br/>
                <input type='password' name="password" onChange={handlechange}  value={userData.password} /><br/>

                <input type='submit' /><br/>

            </form>
        </div>
    )
}

export default Question3;