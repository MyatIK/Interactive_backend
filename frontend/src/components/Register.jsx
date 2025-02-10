import Input from "./Input";
import { useNavigate } from "react-router-dom";


function Register(){
    const navigate = useNavigate();

    const handleSubmit= async(e)=>{
        setLoading(true);
        e.preventDefault();

        try{
            const res= await api.post("/commentapi/user/register/", {username,password});

          
            navigate('/login')


            

        }
        catch(error){
            alert(error)
        }finally{
            setLoading(false)
        }


    };


    return(
        <>
        <div className="grid justify-center p-5">
            <img/>
            <h4 className="text-gray-500 mb-5 text-center font-bold">Sign up to connect</h4>
            <form onSubmit={handleSubmit}>
                <Input label='Username' id='username' type='text' placeholder='username'/>
                <Input label='Full Name' id='full name' type='text' placeholder='full name'/>
                <Input label='Email' id='email' type='email' placeholder='email'/>
                <Input label='Password' id='password' type='password' placeholder='password'/>

                <button type="button" className="bg-indigo-400 p-3 rounded-md block mt-5 w-full text-center">Sign Up</button>
                
            </form>
            <div className="mt-3 flex">
                <h4>Already have an account?</h4>
                <h4 className="underline underline-offset-2 text-indigo-500 ml-2">Sign In</h4>
            </div>
        </div>
        
        </>
      
    

    )
}

export default Register