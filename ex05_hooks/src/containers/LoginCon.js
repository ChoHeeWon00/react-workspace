import { useReducer } from "react";
import LoginCom from "../components/LoginCom";
import { initalState, reducer } from "../moduls/member_red";

const LoginCon = () => {
    //[input, setInput] = useState({id:"",pwd:""})
    const [ state, dispatch] = useReducer(reducer,initalState)
    const onChange = ( e ) => {
        //setInput({...input, [e.target.name]:e.target.value})
        //console.log( e.target )
        dispatch({type:"CHANGE_INPUT", 
            value:e.target.value, name:e.target.name, form:"login"});
    }
    return (<>
    <LoginCom state={state} onChange={onChange}/>
    </>)
}
export default LoginCon;