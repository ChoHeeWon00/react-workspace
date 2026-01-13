const LoginCom = ({onChange, username, pwd}) => {
    return (<>
        <input type="text" value={username} name="id" onChange={onChange} /><br />
        <input type="text" value={pwd} name="pwd" onChange={onChange} /><br />
    </>)
}
export default LoginCom;