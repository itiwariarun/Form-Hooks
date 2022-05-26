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
        <div className='min-w-full h-[55rem] pt-40 bg-gradient-to-l from-stone-500'>
      

        <form className="border-0  rounded-lg bg-white pt-4 text-xl  mx-auto h-[25rem] w-[25rem] border-gray-300   shadow-xl shadow-stone-800" onSubmit={handleSubmit(onSubmit)}>
         <p className='font-sans text-2xl text-center text-gray-900 '>Login Form</p>
         <div className='py-3 pl-8 space-y-5 font-sans text-black'>
             <div><div className='py-2 font-serif text-sm text-left text-gray-700 '>Email </div><input type="email" {...register("email", { required: true })} className='px-5 border-2 border-gray-400 rounded-lg hover:shadow-lg hover:shadow-gray-200' /></div>
              {errors.email && <div><span className='my-3 text-red-600 shadow-xl shadow-gray-500'>
             Please enter your email! </span></div>}
             <div className='pr-1'><div className='py-2 font-serif text-sm text-left text-gray-700 '>Password </div><input type="password" {...register("password")} className='px-5 border-2 border-gray-400 rounded-lg hover:shadow-lg hover:shadow-gray-200' /></div>
            <div><input type="checkbox" /><span className='py-2 pl-3 font-serif text-sm text-left text-gray-600'>Remember me </span> <span className='pl-20 ml-2 text-sm font-bold text-bold'>Forgot Password?</span></div> 
             <div> <input type={"submit"} value="Login"className="px-[8.3rem] py-2 ml-1 text-lg font-bold text-center text-white bg-cyan-700 border-2 rounded-lg"/></div>
             </div></form>
            </div>
    );
}
export default Login;
if (document.getElementById('Login')) {
    ReactDOM.render(<Login />, document.getElementById('Login'));
  }
