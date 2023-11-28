import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const {isAuth} = useSelector(state=>state.user)
    console.log(isAuth)
    const dispatch = useDispa



const reset = ()=>{

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
            isAuth ? (<div>

                <p onClick={reset}>logout</p>
            </div>):'Login'
         }    </li>
         <Link to='/about' style={{textDecoration:'none'}}>
             <li style={{ listStyle: "none" }}>About</li>
         </Link>
      
      </ul>
    </div>
  );
};

export default Navbar;
