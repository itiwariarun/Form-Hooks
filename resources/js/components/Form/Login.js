import React from "react";
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
const Login=()=>{
    const{
        register,
        handleSubmit,
        formState:{errors},
    }=useForm();
    const onSubmit = (data)=>{
        const userData = JSON.parse(localStorage.getItem(data.email));
        if(userData){
            if(userData.password===data.password){
                console.log(userData.name+"successfully logged in");
                alert("Welcome Again!");
            }
        
            else{
                console.log("email or password not matched try again!");
                alert("Email or Password not matched try again!");
            }
        }
      
    };
    return(
        <div className='bg-gray-800 h-[45rem] w-full'>
        <div> <p className='text-center font-bold text-2xl bg-blue-400 py-3'>Login Form</p></div>
   
        <div> <form className="border-2 bg-blue-100 h-[24rem]  min-w-full text-center py-10 my-6" onSubmit={handleSubmit(onSubmit)}>
        <div><span className='font-serif text-xl shadow-xl shadow-gray-500 ml-3'>Email </span><input type="email" {...register("email", { required: true })} className='border-2 ml-11 my-3 hover:shadow-lg hover:shadow-black rounded-2xl' /></div>
            {errors.email && <div><span className='text-red-600 shadow-xl shadow-gray-500 my-3'>
           Please enter your email! </span></div>}
           <div className='pr-1'><span className='font-serif text-xl ml-1 shadow-xl shadow-gray-500'>Password </span><input type="password" {...register("password")} className='border-2 my-3 ml-5 hover:shadow-lg hover:shadow-black rounded-2xl' /></div>
           <div> <input type={"submit"}  value="Login"className=" bg-blue-600 my-2  px-5 py-1 rounded-2xl hover:shadow-lg hover:shadow-black"/></div>
         </form></div>

        </div>
    );
}
export default Login;
if (document.getElementById('Login')) {
    ReactDOM.render(<Login />, document.getElementById('Login'));
  }
