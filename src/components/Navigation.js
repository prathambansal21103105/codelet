import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation=()=>{
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/" className={({isActive})=> isActive ? classes.active:undefined} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={({isActive})=> isActive ? classes.active:undefined} end>Login</NavLink>
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