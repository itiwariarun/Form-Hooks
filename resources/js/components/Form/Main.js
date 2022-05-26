import React from 'react'
import ReactDOM from 'react-dom'
import main from './main.jpg'
import main1 from './main1.jpg'
import main2 from './main2.jpg'
import main3 from './main3.jpeg'

function Main() {
  return (
    <div>
       <nav>
         
          <div  class="bg-white navbar-nav  justify-left fixed mix-blend-darken container   min-h-full w-[9rem] navbar-dark "><a href="{{url('/login')}}" class="text-black opacity-100 text-4xl hover:active top-40 mt-40 left-4 fixed mr-20"><i className="fa-brands fa-instagram-square"></i> </a><br/>
          <a href="{{url('/register')}}" class="text-black opacity-100 text-3xl  hover:active top-60 mt-10 left-4 fixed mr-20"><i className="pr-1 fa-brands fa-google-plus"></i></a><br/>
          <a href="{{url('/')}}" class="text-black hover:active opacity-100 text-4xl top-80 left-4 mt-10 fixed mr-20"><i class="fa-brands fa-twitter-square"></i></a><br/>
          <button class=" font-serif bottom-0 left-10 text-xl p-1 bg-cyan-700 text-white ">Chat With Us?</button>
          </div> 
      


    <div className='relative min-w-full h-[100rem]'>
     <img src={main} className='object-cover  w-full  h-[42rem] mix-blend-hard-light hover:bg-mix-blend-darken  opacity-50'/>
     <div className='absolute inset-x-0 top-60  h-[42rem] w-full text-8xl text-stone-5000 tracking-wide indent-10 leading-4 font-serif font-weight-8 text-center'><div className='px-20 pb-10 '><h1 className=''>Your Success <br/>Begins<span className='underline border-0 rounded-xl underline-offset-[40px] decoration-cyan-700'> W</span>ith Us</h1></div>
     <div className='container mt-10 bg-white  opacity-95 h-[22rem]  w-[50rem] '>
<form className='px-10 text-center space-y-7'>
<h1 className='pt-4 text-2xl fant-sans font-weight-8'>Ready to start your growth journey?</h1>
<div className='space-x-8 text-sm columns-2'>
  <div className='font-sans text-left '>First Name
  <div className='border-b-2 border-stone-900'><input type="text"/></div> </div>
  <div className='font-sans text-left '>Last Name
  <div className='border-b-2 border-stone-900'><input type="text"/></div> </div>
</div>
<div>
<div className='font-sans text-sm text-left '>Email *
<div className='border-b-2 border-stone-900'><input type="text"/></div></div>
</div>
<button class=" font-sans text-xl border-2 border-black p-1 mt-8 tracking-widest indent-8 font-bold w-[33rem] bg-cyan-700 text-white ">Join Now</button>

</form>
</div>
    </div>
    <div className='h-[58rem] bg-gradient-to-l from-stone-400 min-w-full'>
    <div className='h-[10rem] min-w-full px-40 pt-[17rem] text-center  text-6xl'><h1 className='border-y-2 border-stone-800 text-stone-800 '>Our Services</h1></div>
    <div className=' columns-3 container  h-[40rem] px-10 pt-[8rem] min-w-full '>
      <div className='relative h-[30rem]  '><img src={main1} className='object-cover  w-full  h-[30rem] bg-black hover:mix-blend-hard-light opacity-100'/>
 <div className='absolute top-0 items-center justify-center w-full h-full text-center bg-black opacity-60'>  <h1 className='pt-40 pb-10 text-3xl font-bold text-cyan-300 font-weight-6'>Consulting Sessions</h1>
 <p className='px-4 font-sans text-white'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
 </div> </div>
    
 <div className='relative h-[30rem]  '><img src={main2} className='object-cover  w-full  h-[30rem] bg-black hover:mix-blend-hard-light opacity-100'/>
 <div className='absolute top-0 items-center justify-center w-full h-full text-center bg-black opacity-60'>  <h1 className='pt-40 pb-10 text-3xl font-bold text-cyan-300 font-weight-6'>Consulting Sessions</h1>
 <p className='px-4 font-sans text-white'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
 </div> </div>
 <div className='relative h-[30rem]  '><img src={main3} className='object-cover  w-full  h-[30rem] bg-black hover:mix-blend-hard-light opacity-100'/>
 <div className='absolute top-0 items-center justify-center w-full h-full text-center bg-black opacity-60'>  <h1 className='pt-40 pb-10 text-3xl font-bold text-cyan-300 font-weight-6'>Consulting Sessions</h1>
 <p className='px-4 font-sans text-white'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
 </div> </div>
    
</div>
    </div>
    </div>
    </nav>
    <div className='h-[40rem] min-full bg-stone-800'>
    <div className='h-[10rem] min-w-full px-40 pt-[5rem] text-center  text-6xl'><h1 className='border-y-2 border-stone-200 text-stone-200 '>What Our Clients Say</h1></div>
    < div className=' columns-3 container space-x-10  h-[26rem] text-center px-20 pt-[3rem] min-w-full '>
     <div className=' h-[22rem]'> <h1 className='pt-20 text-3xl font-bold text-cyan-300 font-weight-6'>Maggie Kahn</h1>
     <h1 className='pt-2 pb-10 text-xl font-sans text-cyan-300 font-weight-2'>Founder</h1>
 <p className='px-4 font-sans text-white'>"I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</p></div>
 <div className=' h-[22rem]'> <h1 className='pt-20 text-3xl font-bold text-cyan-300 font-weight-6'>Maggie Kahn</h1>
     <h1 className='pt-2 pb-10 text-xl font-sans text-cyan-300 font-weight-2'>Founder</h1>
 <p className='px-4 font-sans text-white'>"I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</p></div>
 <div className=' h-[22rem]'> <h1 className='pt-20 text-3xl font-bold text-cyan-300 font-weight-6'>Maggie Kahn</h1>
     <h1 className='pt-2 pb-10 text-xl font-sans text-cyan-300 font-weight-2'>Founder</h1>
 <p className='px-4 font-sans text-white'>"I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</p></div>
</div>

    </div>
    <div className='h-[20rem] min-full bg-gradient-to-b from-stone-600'>
    < div className=' columns-4 container space-x-10  h-[20rem] text-center px-20 pt-[3rem] min-w-full '>
     <div className=' h-[16rem]'> <a href="{{url('/home')}}" >
        <h1 class="pl-5 m-0 font-serif text-2xl text-stone-900 pt-10 text-uppercase">Hooks Form</h1>
    </a></div>
 <div className=' h-[16rem] text-left border-t-2 border-black text-black'>
<h1 className='py-5'>ADDRESS</h1>
<p>
500 Terry Francois Street<br/>
San Francisco, CA 94158</p>
 </div>
 <div className=' h-[16rem] text-left border-t-2 border-black text-black'><h1 className='py-5'>CONTACT</h1>
<p>
Tel: 123 456 7890<br/>
Email:  info@mysite.com</p></div>
 <div className=' h-[16rem] text-left border-t-2 border-black text-black'><h1 className='py-5'>FOLLOW US</h1>
<p>



Facebook  |   LinkedIn  |   Twitter</p></div>
</div>

    </div>
</div>
  )
}

export default Main;
if (document.getElementById('Main')) {
    ReactDOM.render(<Main />, document.getElementById('Main'));
  }