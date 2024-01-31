import Card from "./Card";
import { useContext } from "react";
import AppContext from "../store/app-context";
import Navigation from "./Navigation";

const Home=()=>{
  const ctx=useContext(AppContext);
  const items=ctx.questions;
  // useEffect(()=>{},[ctx.username]);
    return (
      <>
      <Navigation/>
      <main>
      <p className="heading"> Welcome{" "+ctx.username} ! You are now on home page</p>
      <div className="display">
      <div className='outer'>
      <h2>Dynamic Programming</h2>
      <div className="topic">
      <ul>
      {items.map((element)=><li><Card key={element.id} id={element.id} question={element}/></li>)}
      </ul>
      </div>
      </div>
      </div>
      </main>
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