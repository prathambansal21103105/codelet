import { useReducer } from 'react';
import AppContext from './app-context';

export const defaultAppState={
    username:"",
    password:"",
    status:false,
    completed:[],
    favorites:[],
}

const appReducer=(state,action)=>{
    if(action.type==='COMPLETE'){

    }
    if(action.type==='FAVORITE'){
    }
    return defaultAppState;
}

const AppProvider=(props)=>{
    const [appState,dispatchAppAction]=useReducer(appReducer,defaultAppState);

    const addItemToCompletedHandler=(item)=>{
        dispatchAppAction({type:'COMPLETE',item:item})
    }

    const addItemToFavoritesHandler=(item)=>{
        dispatchAppAction({type:'FAVORITE',item:item})
    }

    const appContext={
        username:appState.username,
        password:appState.password,
        completed:appState.completed,
        favorites:appState.favorites,
        status:false,
        addToCompleted:addItemToCompletedHandler,
        addToFavorites:addItemToFavoritesHandler,
    }

    return(
        <AppContext.Provider value={appContext}>
            {props.children}
        </AppContext.Provider>
    );

}

export default AppProvider;