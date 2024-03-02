// import { useContext } from "react";
// import AppContext from "../store/app-context";
import Navigation from "./Navigation";
import Tags from "./Tags";

const Home=({clickHandler,items,user,reset})=>{
  // const ctx=useContext(AppContext);
  let taggedQuestions={};
  for(const question of items){
    const currTag=question.tag;
    taggedQuestions[currTag]={};
  }
  for(const question of items){
    const currTag=question.tag;
    var size = Object.keys(taggedQuestions[currTag]).length;
    taggedQuestions[currTag][size]=question;
  }
  console.log(taggedQuestions);
  const topics=[];
  for(const topic in taggedQuestions){
    topics.push(taggedQuestions[topic]);
  }
  // const items=ctx.questions;
  // useEffect(()=>{},[ctx.username]);
  const name=(user["username"])? user["username"]:"";
    return (
      <>
      <Navigation user={user} reset={reset}/>
      <main>
      <p className="heading"> Welcome{" "+name} ! You are now on home page</p>
      {/* <div className="display">
      <div className='outer'>
      <h2>Dynamic Programming</h2>
      <div className="topic">
      <ul>
      {items.map((element)=><li><Card key={element.id} id={element.id} question={element}/></li>)}
      </ul>
      </div>
      </div>
      </div> */}
      {topics.map((topic)=> <Tags clickHandler={clickHandler} topic={topic} user={user}/>)}
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