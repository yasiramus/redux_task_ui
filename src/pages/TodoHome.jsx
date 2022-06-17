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

// const TodoHome = ({ todos, loadAllTodos, todoLoaderStarted }) => {

const TodoHome = ({ todos, loadAllTodos,todoLoaderStarted }) => {
    
    useEffect(() => {

        loadAllTodos()
        
    }, [loadAllTodos] );

    return (

        <div className="my-4 mx-auto md:mx-auto  text-black text-center">
            
            <h2 className=" text-2xl font-extrabold p-2">The Task Planner</h2>
            
            <TodoForm /> 

            { (todos.length > 0 ) ?
            
                ( (todoLoaderStarted) ?
                    
                    (<div>todo loading please wait...</div>) :

                    (todos.map((todo, index) => (<TodoList task={todo} key={index} />)))                   
                
                )

                : (<div>No To_dos Added Yet </div>)
                
            } 
           
        </div>

    )
    
};

// const mapStateToProps = state => ({

//     todos: state.todoReducer,

//     todoLoaderStarted:state.todoloader
    
// });

const mapStateToProps = state => ({

    todos: state.loaderAndTodoReducer.todoData,

    todoLoaderStarted:state.loaderAndTodoReducer.loader
    
});

const mapDispatchToProps = dispatch => ({

    loadAllTodos: () => dispatch(fetchingTodoData())

});

export default connect(mapStateToProps, mapDispatchToProps )(TodoHome)
