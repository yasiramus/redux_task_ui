// todo form Component

// connect is imported here 
import { connect } from "react-redux/es/exports";

// use state importation
import { useState } from "react";

// addingNewTodo is being imported here
import { addingNewTodo } from "../store/thunks/Thunk";

const TodoForm = ({todosAdded}) => {

    // setting the state for input values
    const [inputValue, setInputValues] = useState("");

    // converting input value to lower case and triming of space 
    const inputValueToLowerCase = inputValue.toLocaleLowerCase().trim()

    return (
      
        <div className="mt-4 mx-96 mb-6 p-4 rounded-lg text-center" id="customshadow">
            

            <label className="font-bold space-x-2.5">New Task</label>

            <input type="text" className="form-input text-base font-medium p-2 rounded-lg w-96 my-0 mx-2.5 outline-none  border-solid border-b-2 border-#ddd-100" autoComplete="off"
                value={inputValueToLowerCase} onChange={e => setInputValues(e.target.value)} />
        
            <button className="text-sm bg-pink-700 py-2 px-2.5 text-white rounded-md transition"
            onClick={() => todosAdded(inputValueToLowerCase)}> Add Task </button>

        </div>

   
    )
    
};

const mapDispatchToProps = dispatch => ({

    todosAdded: text => dispatch(addingNewTodo(text))

});

export default connect(null, mapDispatchToProps)(TodoForm);
