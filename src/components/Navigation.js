import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
import { useContext } from 'react';
import AppContext from '../store/app-context';
import { defaultAppState } from '../store/AppProvider';
import { useEffect } from 'react';


const Navigation=()=>{
    const ctx=useContext(AppContext);
    useEffect(()=>{},[ctx.username,ctx.status]);
    const clickHandler=()=>{
        console.log(ctx.status);
        if(ctx.status){
            ctx.username=defaultAppState.username;
            ctx.password=defaultAppState.password;
            ctx.status=defaultAppState.status;
            ctx.favorites=defaultAppState.favorites;
            ctx.completed=defaultAppState.completed;
        }
        else{
            console.log(ctx.status);
        }
        return;
    }
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <div className={classes.username}>Hi{" "+ctx.username}!</div>
                    </li>
                    <li>
                        <NavLink to="/" className={({isActive})=> isActive ? classes.active:undefined} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favs" className={({isActive})=> isActive ? classes.active:undefined} end>Favorites</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={({isActive})=> isActive ? classes.active:undefined} onClick={()=>clickHandler(ctx)} end>{(ctx.status)? 'Logout':'Login'}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signUp" className={({isActive})=> isActive ? classes.active:undefined} end>Create an Account</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}
export default Navigation;