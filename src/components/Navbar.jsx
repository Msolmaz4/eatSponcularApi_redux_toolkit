import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { resetUser } from "../redux/userSlice";

const Navbar = () => {
    const {isAuth} = useSelector(state=>state.user)
    console.log(isAuth)
    const dispatch = useDispatch()
    const navi = useNavigate()



const reset = ()=>{
dispatch(resetUser())
if(!isAuth){
    navi('/')
}

}
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 0,
          padding: 0,
        }}
      >
      <Link to='/' style={{textDecoration:'none'}}>
         <li style={{ marginRight: "40px", listStyle: "none" }}>home</li>
      </Link>
       
        <li style={{ marginRight: "40px", listStyle: "none" }}>
         {
           <Login/> && isAuth ? (<div>

                <p onClick={reset}>logout</p>
            </div>):(<div>
                <p onClick={()=>navi('/login')}> login</p>
            </div>)
         }    </li>
         <Link to='/about' style={{textDecoration:'none'}}>
             <li style={{ listStyle: "none" }}>About</li>
         </Link>
      
      </ul>
    </div>
  );
};

export default Navbar;
