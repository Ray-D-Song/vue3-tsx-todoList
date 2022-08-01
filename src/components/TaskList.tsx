import { StyleValue } from "vue";
import Filter from "./Filter";
import TaskItem from "./TaskItem";
import store from "../store";

const rootFlexContainer: StyleValue = {
    display: 'flex',
    flexDirection: 'column',
}

const childFlexContainer: StyleValue = {
    display: 'flex',
    flexDirection: 'column',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: '#56b6c2',
    backgroundColor: '#202124',
    padding: '30px'
}


function TaskList(props: any,{slots}: any){
        return (
        <div style={rootFlexContainer}>
            <Filter style={{alignSelf: 'flex-start'}}/>
            <div style={childFlexContainer}>
            {store.state.taskList.map((data: any, index: number)=>{return <TaskItem num={index}>{data.taskName}</TaskItem>})} 
            </div>
        </div>
        )
    }

export default TaskList;

