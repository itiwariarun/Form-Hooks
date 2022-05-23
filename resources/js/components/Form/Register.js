import React from 'react';
import  ReactDOM  from 'react-dom';
import { useForm } from 'react-hook-form';

function Register() {
  const {register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem(data.email, JSON.stringify({ 
        name: data.name, password: data.password 
    }));
    console.log(JSON.parse(localStorage.getItem(data.email)));
    alert('Successfully Registered!');
  };;
  
  return (
    <div className='bg-gray-800 h-[45rem] w-full shadow-2xl shadow-black'>
     <div> <p className='text-center font-bold text-2xl bg-blue-400 py-3'>Registration Form</p></div>

     <div> <form className="border-2 bg-blue-100 h-[24rem]  min-w-full text-center py-10 my-6 shadow-2xl shadow-black" onSubmit={handleSubmit(onSubmit)}>
        <div><span className='font-serif text-xl shadow-xl shadow-gray-500 '>UserName </span><input type="text" {...register("name")} className='border-2 my-3 ml-4 hover:shadow-lg hover:shadow-black rounded-2xl'/></div>
        <div><span className='font-serif text-xl shadow-xl shadow-gray-500 ml-3'>Email </span><input type="email" {...register("email", { required: true })} className='border-2 ml-11 my-3 hover:shadow-lg hover:shadow-black rounded-2xl' /></div>
         {errors.email && <div><span className='text-red-600 shadow-xl shadow-gray-500 my-3'>
        Please enter your email! </span></div>}
        <div className='pr-1'><span className='font-serif text-xl ml-1 shadow-xl shadow-gray-500'>Password </span><input type="password" {...register("password")} className='border-2 my-3 ml-5 hover:shadow-lg hover:shadow-black rounded-2xl' /></div>
        <div> <input type={"submit"} value="Register"className=" bg-blue-600 my-2  px-5 py-1 rounded-2xl hover:shadow-lg hover:shadow-black"/></div>
      </form></div>
       </div>
  );
}

export default Register;
if (document.getElementById('Register')) {
    ReactDOM.render(<Register />, document.getElementById('Register'));
  }