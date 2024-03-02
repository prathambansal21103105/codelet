import classes from './Card.module.css';
import { useState } from 'react';
// import { useState,useContext } from 'react';
// import AppContext from '../store/app-context';

const Card=(props)=>{
    const [clicked,setClicked]=useState(false);
    // const ctx=useContext(AppContext);
    const addHandler=(event)=>{
        event.preventDefault();
        if(!clicked){
            props.clickHandler(props.question);
        }
        setClicked((state)=>!state);
    }
    const openURL=()=>{
        window.open(props.question.link);
    }
    return(
        // <div className={classes.box}>
        <>
            {props.user!=="" && <button className={classes.star} onClick={addHandler}>{(!clicked)? '➕':'➖'}</button>}
            <button className={classes.question} onClick={openURL}>{props.question.title}</button>
        </>
        // {/* </div> */}
    );
}
export default Card;