import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/userSlice';
import { useNavigate } from 'react-router';

const Login = () => {
  //const dat = useRef({ name: '', email: '', password: '' });
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const {isAuth} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const navi = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if(isAuth){
      navi('/')
    }
 
  };
  console.log(isAuth)
  useEffect(()=>{
    console.log(formData,'useEF')
    dispatch(addUser(formData))
    
  },[formData])

  return (
    <div style={{display:'flex', justifyContent:'center', padding:'15px', marginTop:'15px', alignItems:'center'}}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          value={formData.email}
          name="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          value={formData.password}
          name="password"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Onayla</button>
      </form>
    </div>
  );
};

export default Login;