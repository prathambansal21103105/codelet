

const Home=()=>{
    
    return (
      <>
      <h1> Welcome! You are now on home page</h1>
      </>
    );
  }
  
  export default Home;

  /*

   <h1>hello</h1>
    <button onClick={()=>{setShowLogin((prev)=>!prev)}}>{!showLogin? 'Login':'Close'}</button>
    {showLogin && !status && <Login onSubmit={verify}/>}
    {isTouched && status && <p>Welcome</p>}
    {isTouched && !status && <p>Wrong Credentials</p>}
  
    <button onClick={()=>{setShowSignUp((prev)=>!prev)}}>{!showSignUp? 'Create an Account':'Close'}</button>
    {showSignUp && <SignUp onSubmit={addUser}/>}
  
    {status && <p> Welcome to the website!!</p>}


  */