import React, { Component } from 'react'

export default class TaskList extends Component {
    state={Tasks:[{id:Math.random(),name:"Task 1",isDone:false,isEditName:false},
        {id:Math.random(),name:"Task 2",isDone:true,isEditName:false},
        {id:Math.random(),name:"Task 3",isDone:false,isEditName:false},
        {id:Math.random(),name:"Task 4",isDone:false,isEditName:false}
    ],
 newTask:"",newName:"",isname:false,coloor:false}
  render() {
    
   const doneTask=(id)=>{
        this.setState({Tasks:this.state.Tasks.map(task=>task.id==id?{...task,isDone:!task.isDone}:task)})
    }
    const deleteTask=(id)=>{
        this.setState({Tasks:this.state.Tasks.filter(task=>task.id!=id)})
    }
    const addTask=()=>{
        this.setState({Tasks:[{name:this.state.newTask,id:Math.random(),isDone:false},...this.state.Tasks],newTask:"",isname:false})
    }
    const editName=(id)=>{
      this.setState({Tasks:this.state.Tasks.map(task=>task.id==id?{...task,name:this.state.newName,isEditName:false}:task)})
    }
    const changeEditName=(id)=>{
      this.setState({Tasks:this.state.Tasks.map(task=>task.id==id?{...task,isEditName:true}:task)})
    }
    return (
      <div style={{ backgroundColor : this.state.coloor ? "black" : "white" }}>
        <button onClick={()=>this.setState({coloor:!this.state.coloor})}>{this.state.coloor?"white mode":"dark mode"}</button>
        {this.state.isname?<input 
        value={this.state.newTask}
        onChange={(e)=>this.setState({newTask:e.target.value})}/>:null}
        <button onClick={()=>this.state.newTask?addTask():this.setState({isname:!this.state.isname})}>{this.state.newTask?"save task":"add new task"}</button>
        {this.state.Tasks.map(task=>
            <div key={task.id} style={{display:'flex',justifyContent:"space-around",border:"solid",margin:"10px"}} >
                {task.isEditName?<input 
                defaultValue={task.name}
                onChange={(e)=>this.setState({newName:e.target.value})}/>:<p>{task.name}</p>}
                
                
                <button onClick={()=>task.isEditName?editName(task.id):changeEditName(task.id)} >{task.isEditName?"save new name":"edit name"}</button>
                <button onClick={()=>doneTask(task.id)} style={{backgroundColor:task.isDone?"green":"red"}} >{task.isDone?"Done":"unDone"}</button>
                <button onClick={()=>deleteTask(task.id)}>delete</button>
            </div>
        )}

      </div>
    )
  }
}

// import React, { Component } from 'react'

// export default class Profile extends Component {
//   state = {
//     Tasks: [
//       { id: "1", name: "Task 1", isDone: false },
//       { id: "2", name: "Task 2", isDone: true },
//       { id: "3", name: "Task 3", isDone: false },
//       { id: "4", name: "Task 4", isDone: false }
//     ],
//     newTask: "",
//     editingTaskId: null,
//     editingTaskName: ""
//   }

//   doneTask = (id) => {
//     this.setState({
//       Tasks: this.state.Tasks.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task)
//     });
//   }

//   deleteTask = (id) => {
//     this.setState({
//       Tasks: this.state.Tasks.filter(task => task.id !== id)
//     });
//   }

//   addTask = () => {
//     if (this.state.newTask.trim() !== "") {
//       this.setState({
//         Tasks: [...this.state.Tasks, { id: Math.random().toString(), name: this.state.newTask, isDone: false }],
//         newTask: ""
//       });
//     }
//   }

//   startEditing = (id, name) => {
//     this.setState({ editingTaskId: id, editingTaskName: name });
//   }

//   saveTaskName = () => {
//     this.setState({
//       Tasks: this.state.Tasks.map(task => task.id === this.state.editingTaskId ? { ...task, name: this.state.editingTaskName } : task),
//       editingTaskId: null,
//       editingTaskName: ""
//     });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           value={this.state.newTask}
//           onChange={(e) => this.setState({ newTask: e.target.value })}
//         />
//         <button onClick={this.addTask}>Add New Task</button>
//         {this.state.Tasks.map(task =>
//           <div key={task.id} style={{ display: "flex", justifyContent: "space-around", border: "solid", margin: "10px" }}>
//             <p>
//               {this.state.editingTaskId === task.id
//                 ? <input value={this.state.editingTaskName} onChange={(e) => this.setState({ editingTaskName: e.target.value })} />
//                 : task.name}
//             </p>
//             <button onClick={() => this.state.editingTaskId === task.id ? this.saveTaskName() : this.startEditing(task.id, task.name)}>
//               {this.state.editingTaskId === task.id ? "Save Name" : "Edit Name"}
//             </button>
//             <button style={{ background: task.isDone ? "green" : "red" }} onClick={() => this.doneTask(task.id)}>
//               {task.isDone ? "Done" : "Undone"}
//             </button>
//             <button onClick={() => this.deleteTask(task.id)}>Delete</button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
