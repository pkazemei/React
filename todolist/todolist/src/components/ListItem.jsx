import React, {useState} from 'react';

const ListItem =()=>{

    // Task must match name field of input
    let[task, setTask]= useState('')

    // Object to keep track of form info
    let [taskObj, setTaskObj]= useState({
        task:'',
        isComplete:false
    })

    // Array to keep task objects in
    let [listoftasks, setListOfTasks] = useState([])

    // Function to attach to onChange event
    const changeHandler =(e)=>{
        console.log('logging', e.target.name);

        setTaskObj({
            ...taskObj,
            [e.target.name]: e.target.value
        })
    }

    // Run function once form submits
    // e.preventDefault() prevents page from reloading once form is submitted
    const addTask=(e)=>{
        e.preventDefault()
        console.log('submitting the task', taskObj);

        // Add info from taskObj into an array of tasks
        setListOfTasks([...listoftasks, taskObj])

        // Clear out form
        setTaskObj({
            task:'',
            isComplete:false
        })
    }

    // Toggle isComplete
    const toggleTaskComplete=(indexNum)=>{
        console.log('logging the task at index', indexNum);

        // Make a copy of array of tasks to modify it
        let[...copyOfList]=listoftasks;

        copyOfList[indexNum].isComplete = !copyOfList[indexNum].isComplete;
        setListOfTasks(copyOfList);
    }

    // Deleting a task using filter
    const deleteTask=(indexNum)=>{
        console.log('deleting the task at index', indexNum)
        let newList =listoftasks.filter((taskObj, i)=>{
            return i != indexNum
        })

        // Update state variable to become the newList
        setListOfTasks(newList);
    }


    return(
        <div>
        <h3>Add a task below to get started</h3>
        <form onSubmit={addTask}>
            <div className="form-group">
                <label htmlFor="">Task </label>
                <input onChange ={changeHandler} type="text" name="task" className="form-control" value={taskObj.task}/>
            </div><br/>
            <div><input type="submit" value="Add Task" className="btn btn-primary" />
            </div>
        </form>
        <hr />
        {
            listoftasks.map((taskItem, i)=>{
                return(
                    <div key={i} style={{textDecoration: taskItem.isComplete? 'line-through': ''}}>
                        <h3>{taskItem.task}</h3>
                        <p><input onClick={()=>toggleTaskComplete(i)} type="checkbox" name="" id="" /></p>
                        <p><button onClick={()=>deleteTask(i)} className="btn btn-danger">Delete</button></p>
                    </div>
                )
            })
        }
        </div>
        )
}

export default ListItem;