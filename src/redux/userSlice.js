import {  createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: { name: '', email: '', password: '' },
    isAuth: false,
  }
  

  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser:(state,action)=>{
         console.log(action.payload)
         const { name, email, password } = action.payload;
         state.user = { name, email, password };
         state.isAuth = true;
         return state , console.log(state);
        },
        resetUser:(state,action)=>{
          state.isAuth = false
        }

    },
   
    
  });
  
  export const {addUser ,resetUser} = userSlice.actions
  
  export default userSlice.reducer