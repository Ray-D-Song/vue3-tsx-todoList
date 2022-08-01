import { StyleValue } from "vue";
import store from "../store";

const filterButtonStyle: StyleValue = {
    backgroundColor: '#abb2bf',
    color: 'black',
    borderRadius: '0px',
    width: '40px',
    height: '27px',
    paddingTop: '5px',
    textAlign: 'center',
    fontSize: '5px',
    margin: '2px'
}

function Filter(){
    return (
        <div>
            <button style={filterButtonStyle} onClick={()=>store.commit("allFilter")}>All</button>
            <button style={filterButtonStyle} onClick={()=>store.commit("todoFilter")}>Todo</button>
            <button style={filterButtonStyle} onClick={()=>store.commit("doneFilter")}>Done</button>
        </div>
    )
}

export default Filter;