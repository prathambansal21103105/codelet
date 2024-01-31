// import Card from "./Card";
import { useContext } from "react";
import AppContext from "../store/app-context";
import Navigation from "./Navigation";

const Favorites=(props)=>{
  const ctx=useContext(AppContext);
    return (
      <>
      <Navigation/>
      <main>
      <p className="heading"> Welcome{" "+ctx.username} ! Here you can access your favorites</p>
      <div className="display">
      <div className='outer'>
      <h2>Your Favorites</h2>
      <div className="topic">
      <ul>
      {/* {ctx.favorites.map((element)=><li><Card key={element.id} id={element.id} question={element}/></li>)} */}
      </ul>
      </div>
      </div>
      </div>
      </main>
      </>
    );
  }
  
export default Favorites;