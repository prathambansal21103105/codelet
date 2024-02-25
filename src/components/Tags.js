import Card from "./Card";
const Tags=({topic})=>{
    console.log("topic");
    console.log(topic);
    const items=[];
    for(const question in topic){
        items.push(topic[question]);
    }
    return(
    <div className="display">
      <div className='outer'>
      <h2>{topic[0].tag}</h2>
      <div className="topic">
      <ul>
      {items.map((element)=><li><Card key={element.id} id={element.id} question={element}/></li>)}
      </ul>
      </div>
      </div>
    </div>
    );
}
export default Tags;