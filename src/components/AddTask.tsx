import AddIcon from "/addIcon.svg";
import store from "../store";

const inputStyle = {
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    borderColor: '#ffff',
    outline: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontSize: '20px',
    margin: '3px'
}

const buttonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
}



function AddTask() {
  return (
    <div>
    <form>
      <input type="text" placeholder="Add new task" style={inputStyle} v-model={store.state.newTask.taskName}></input>
      <button style={buttonStyle} onClick={()=>store.commit('addAction')}>
        <img src={AddIcon} style={{ width: "25px" }} />
      </button>
    </form>
    </div>
  );
}

export default AddTask;