import { createSlice } from "@reduxjs/toolkit"; 

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    currentUser:'',
    userRegistration: {userName: '', password:'', email: '', phone: ''},
  },
  reducers:{
    createUser: (state,action)=>{ 
        state.users.push(action.payload)
        state.currentUser = action.payload.email
    },
    handleLogOut: (state)=>{
      state.currentUser = ''
    },
    serCurrentUser:(state,action)=>{
      state.currentUser = action.payload
    }
  }
});

export const {createUser,handleLogOut,serCurrentUser} = userSlice.actions
export  default userSlice.reducer
