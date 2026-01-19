import {createSlice} from "@reduxjs/toolkit"
const inputSlice = createSlice({
    name : "input",
    initialState : {
        login : {username:"", password:""},
        register : {username:"", password:"", role:""},
    },
    reducers : {
        changeInput : (state, action) => {
            const {form, name, value} = action.payload
            state[form][name] = value
        }
    }
})
//inputSlice.actions.changeInput()
//changeInput()
export const {changeInput} = inputSlice.actions;
export default inputSlice;