import Card from "./Card";
import { useContext } from "react";
import AppContext from "../store/app-context";

const Home=(props)=>{
  const ctx=useContext(AppContext);
  // useEffect(()=>{},[ctx.username]);
    return (
      <>
      <p className="heading"> Welcome{" "+ctx.username} ! You are now on home page</p>
      <div className="display">
      <div className='outer'>
      <h2>Dynamic Programming</h2>
      <div className="topic">
      <ul>
      {props.items.map((element)=><li><Card key={element.id} id={element.id} question={element}/></li>)}
      </ul>
      </div>
      </div>
      </div>
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