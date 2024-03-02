import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
// import { useContext } from 'react';
// import AppContext from '../store/app-context';
// import { defaultAppState } from '../store/AppProvider';
// import { useEffect } from 'react';


const Navigation=({user,reset})=>{
    // useEffect(()=>{},[ctx.username,ctx.status]);
    // const ctx=useContext(AppContext);
    const clickHandler=()=>{
        if(user!==""){
            reset();
        }
        return;
    }
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        {user!=="" && <div className={classes.username}>Hi{" "+user["username"]}!</div>}
                    </li>
                    <li>
                        <NavLink to="/" className={({isActive})=> isActive ? classes.active:undefined} id="nav" end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favs" className={({isActive})=> isActive ? classes.active:undefined} id="nav" end>Favorites</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contribute" className={({isActive})=> isActive ? classes.active:undefined} id="nav" end>Contribute</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={({isActive})=> isActive ? classes.active:undefined} id="nav" onClick={clickHandler} end>{(user!=="")? 'Logout':'Login'}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signUp" className={({isActive})=> isActive ? classes.active:undefined} id="nav" end>Create an Account</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}
export default Navigation;