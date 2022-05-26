

<nav class="bg-White navbar border-box navbar-expand-lg navbar-dark ">
    <a href="{{url('/home')}}" >
        <h1 class="pl-5 m-0 font-serif text-2xl text-stone-500 text-uppercase">Hooks Form</h1>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="justify-end text-lg text-black collapse navbar-collapse" id="navbarCollapse">
         <div class="navbar-nav ">
            <a href="{{url('/')}}" class="text-black nav-item nav-link hover:active">Home</a>

            <a href="{{url('/login')}}" class="text-black nav-item nav-link hover:active">Login</a>
            <a href="{{url('/register')}}" class="text-black nav-item nav-link hover:inactive">Register</a>
         </div>
    </div>
</nav>
