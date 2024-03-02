// import Card from "./Card";
// import { useContext } from "react";
// import AppContext from "../store/app-context";
import Navigation from "./Navigation";
import Tags from "./Tags";

const Favorites=({items,user,reset,clickHandler})=>{
  // const ctx=useContext(AppContext);
  const topics=[];
  console.log(items);
  if(items){
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
    for(const topic in taggedQuestions){
      topics.push(taggedQuestions[topic]);
    }
  }
  const name=(user["username"])? user["username"]:"";
    return (
      <>
      <Navigation user={user} reset={reset}/>
      <main>
      <p className="heading"> Welcome{" "+name} ! Here you can access your favorites</p>
      {topics.map((topic)=> <Tags clickHandler={clickHandler} topic={topic} flag={1}/>)}
      </main>
      </>
    );
  }
  
export default Favorites;