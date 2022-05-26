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
    <div className='min-w-100% h-[55rem] pt-40 bg-gradient-to-l from-stone-500'>
      

   <form className="border-0  bg-white pt-4 text-xl rounded-lg  mx-auto h-[30rem] w-[25rem] border-gray-300   shadow-xl shadow-stone-800" onSubmit={handleSubmit(onSubmit)}>
    <p className='font-sans text-2xl text-center text-gray-900 '>Registration Form</p>
    <div className='py-3 pl-8 space-y-5 font-sans text-black'>
    <div> <div className='py-2 font-serif text-sm text-left text-gray-700 '>UserName </div><input type="text" {...register("name")} className='px-5 border-2 border-gray-400 rounded-lg hover:shadow-lg hover:shadow-gray-200'/></div>
        <div><div className='py-2 font-serif text-sm text-left text-gray-700 '>Email </div><input type="email" {...register("email", { required: true })} className='px-5 border-2 border-gray-400 rounded-lg hover:shadow-lg hover:shadow-gray-200' /></div>
         {errors.email && <div><span className='my-3 text-red-600 shadow-xl shadow-gray-500'>
        Please enter your email! </span></div>}
        <div className='pr-1'><div className='py-2 font-serif text-sm text-left text-gray-700 '>Password </div><input type="password" {...register("password")} className='px-5 border-2 border-gray-400 rounded-lg hover:shadow-lg hover:shadow-gray-200' /></div>
       <div><input type="checkbox" /><span className='py-2 pl-3 font-serif text-sm text-left text-gray-600'>Remember me </span><span className=' pl-[7rem] text-2xl space-x-2'><i className="fa-brands fa-instagram-square"></i> <i className="pr-1 fa-brands fa-google-plus"></i><i class="fa-brands fa-twitter-square"></i></span></div> 
        <div> <input type={"submit"} value="Register"className="px-[7.7rem] py-2 ml-1 text-lg font-bold text-center text-white bg-cyan-700 border-2 rounded-lg"/></div>
        </div></form>
       </div>
  );
}

export default Register;
if (document.getElementById('Register')) {
    ReactDOM.render(<Register />, document.getElementById('Register'));
  }