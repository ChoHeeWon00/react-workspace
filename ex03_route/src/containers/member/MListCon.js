import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom";
import {getData} from "../../service/member/member";
let num = 0;
function MListCon(){
    const [ list , setList ] = useState([])
    //console.log( getData() )

    useEffect( () => {
        console.log("useEffect 실행")
        setList( getData() )
        //list = [{},{},[}]
    } , [] )
    const [n, setN] = useState(0);
    const onClickOk = () => { setN(n+1) }
    const onClickNo = ( id ) => { console.log(id+" : 랜더링 안됨") }


    const onDelete = ( id ) => {
        console.log("del : ", id);
    }
    //onDelete("aaaaaaa")
    return (<>
        {console.log("return 랜더링 됨!!!")}
        <button onClick={onClickOk}>랜더링</button>
        <button onClick={ () =>{ onClickNo("bbbb") }  }>안됨</button>
       <MListCom list={list} />
    </>)
}
export default MListCon;