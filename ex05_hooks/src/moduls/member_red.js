const initalState = {
    login : {id:"", pwd:""} ,
    register : {}
}
//{type:"CHANGE", value:e.target.value, name:e.target.name, form:"login"}
const reducer = ( state, action ) => {
    console.log(state)
    console.log(action)
    switch(action.type ){
        case "CHANGE_INPUT" : 
            return {...state, [action.form] : 
                    {...state[action.form], [action.name]:action.value } }
        default : return state;
    }
    //return state;
}
export {reducer, initalState}