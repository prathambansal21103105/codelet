import {useState,useEffect} from 'react';
import Login from './components/Login';
import SignUp from './components/Signup';
import Home from './components/Home';
import RootLayout from './components/RootLayout';


import { createBrowserRouter,RouterProvider } from "react-router-dom";



const App=()=>{
    const [users,setUsers]=useState([]);
    // const [status,setStatus]=useState(false);
    // const [isTouched,setIsTouched]=useState(false);
    // const [showLogin,setShowLogin]=useState(false);
    // const [showSignUp,setShowSignUp]=useState(false);
    
    useEffect(() => {
      setUsers([]);
      const fetchUserData=async()=>{
        const res=await fetch("https://react-http-1df71-default-rtdb.firebaseio.com/users.json");
        if(!res.ok){
          throw new Error("Couldn't fetch Data!");
        }
        const data=await res.json();
  
        const usersList=[];
        for(const user in data){
          usersList.push(data[user]);
        }
        console.log(usersList);
        setUsers(usersList);
      }
      fetchUserData();
    },[]);


    const verify=(name,password)=>{
      console.log(name,password);
      for(const user of users){
        if(user["username"]===name.trim() && user["password"]===password.trim()){
          console.log("Done!");
          return true;
        }
      }
      console.log("Wrong Credentials!");
      return false;
    }
  

    const addUser=async(name,password)=>{
      console.log("AddUser call!!")
      const data={"username":name.trim(),"password":password.trim()};
      const data1=users;
      data1.push(data);
      console.log(data1);
      fetch("https://react-http-1df71-default-rtdb.firebaseio.com/users.json",{
        method:'PUT',
        body:JSON.stringify(data1)
      })
      setUsers((prev)=>{
        let prev1=prev;
        prev1.push(data);
        return prev1;
      })
      return true;
    }


    const router=createBrowserRouter([
      {
        path:'/', 
        element:<RootLayout/>, 
        children:[
          {index:true,path:'', element:<Home/>},
          {path:'login', element:<Login onSubmit={verify}/>},
          {path:'signUp', element:<SignUp onSubmit={addUser}/>},
        ]
      }
      
    ]);

    return <RouterProvider router={router}/>;
}

export default App;