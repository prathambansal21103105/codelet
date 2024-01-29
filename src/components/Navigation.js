import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import AppContext from '../store/app-context';
import { defaultAppState } from '../store/AppProvider';



const Navigation=()=>{
    const ctx=useContext(AppContext);
    useEffect(()=>{console.log(ctx.username)},[ctx.username]);
    const clickHandler=()=>{
        if(!ctx.status){
            return;
        }
        else{
            ctx.username=defaultAppState.username;
            ctx.password=defaultAppState.password;
            ctx.status=defaultAppState.status;
            ctx.favorites=defaultAppState.favorites;
            ctx.completed=defaultAppState.completed;
        }
        return;
    }
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        {ctx.username!=="" && <div className={classes.username}>Hi{" "+ctx.username}!</div>}
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