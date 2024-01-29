import {useState,useEffect} from 'react';
import Login from './components/Login';
import SignUp from './components/Signup';
import Home from './components/Home';
import Favorites from './components/Favorites';
import RootLayout from './components/RootLayout';
import AppProvider from './store/AppProvider';
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const questions=[
  {title:'Longest Increasing Subsequence',url:'https://leetcode.com/problems/longest-increasing-subsequence/description/',checked:false,id:1,key:1},
  {title:'Knapsack Problem',url:'https://leetcode.com/problems/partition-equal-subset-sum/description/',checked:true,id:2,key:2},
  {title:'Matrix chain multiplication',url:'https://www.geeksforgeeks.org/problems/palindromic-patitioning4845/1',checked:false,id:3,key:3},
  {title:'Climbing Stairs',url:'https://leetcode.com/problems/climbing-stairs/description/',checked:true,id:4,key:4},
  {title:'Arithmetic Slices II - Subsequence',url:'https://leetcode.com/problems/arithmetic-slices-ii-subsequence/description/?envType=daily-question&envId=2024-01-07',checked:true,id:5}

]

const App=()=>{
    const [users,setUsers]=useState([]);
    const [favs,setFavs]=useState([]);
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
        setUsers(usersList);
      }
      fetchUserData();
    },[]);


    const verify=(name,password)=>{
      for(const user of users){
        if(user["username"]===name.trim() && user["password"]===password.trim()){
          setFavs(user.favorites);
          return true;
        }
      }
      return false;
    }
  

    const addUser=async(name,password)=>{
      const data={"username":name.trim(),"password":password.trim()};
      const data1=users;
      data1.push(data);
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
          {index:true,path:'', element:<Home items={questions}/>},
          {path:'login', element:<Login onSubmit={verify}/>},
          {path:'signUp', element:<SignUp onSubmit={addUser}/>},
          {path:'favs', element:<Favorites />},

        ]
      }
      
    ]);

    return <AppProvider><RouterProvider router={router}/></AppProvider>;
}

export default App;