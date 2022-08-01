import store from '../store';
import delIcon from '/delIcon.svg'

function TaskItem(props: any,{slots}: any) {
    const n = props.num;
    //@ts-ignore
    const s = store.state.taskList[n].show;
    console.log(s);
    return(
        /* @ts-ignore */
        <div v-show={store.state.taskList[n].taskShow}>
            {/* @ts-ignore */}
            <input type="checkbox" style={{width: '15px', height: '15px',marginRight: '20px'}} v-model={store.state.taskList[n].done}/>
            <span style={{fontWeight: 700,fontSize: '22px'}}>{slots.default&&slots.default()}</span>
            <button style={{backgroundColor: 'rgba(0, 0, 0, 0)',padding: '5px 0px 2px 2px',marginLeft: '10px'}} onClick={()=>store.commit("deleteAction",n)}><img src={delIcon} style={{width: '20px'}}/></button>
        </div>
    )
}

export default TaskItem;