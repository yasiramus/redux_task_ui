// todo home component

// connect is imported here 
import { connect } from "react-redux/es/exports";

// useEffect importation 
import { useEffect } from "react";

// TodoForm component importation 
import TodoForm from "../components/TodoForm";

// todo list component importation 
import TodoList from "../components/TodoList";

import { fetchingTodoData } from "../store/thunks/Thunk";

const TodoHome = ({ todos, loadAllTodos }) => {
    
    useEffect(() => {

        loadAllTodos()
        
    }, [loadAllTodos] );

    return (

        <>
            <h2 className=" text-2xl font-extrabold text-center text-black p-2">The Task Planner</h2>
            
            <TodoForm /> 

            {todos.length > 0 ?
                
                (todos.map((todo, index) => (<TodoList task={todo} key={index} />)))
                
                : (<div className="text-center">No To_dos Added Yet </div>)
                
            }
           
        </>

    )
    
};

const mapStateToProps = state => ({

    todos: state.todoReducer
    
});

const mapDispatchToProps = dispatch => ({

    loadAllTodos: () => dispatch(fetchingTodoData())

});

export default connect(mapStateToProps, mapDispatchToProps )(TodoHome)
