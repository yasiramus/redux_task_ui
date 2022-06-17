import { addTodo, fetchTodo, completeTodo, deleteTodo } from "../actions/Actions";

import axios from "axios";

import { loadTodoRequest, loadTodoSuccess, loadTodoFailure} from "../actions/Actions";

export const addingNewTodo = textt =>

    async dispatch => {

        try {
        
            dispatch(loadTodoRequest())
            const newTodo = await axios.post(`http://localhost:5000/todoApi/`, { text: textt })
        
            console.log(newTodo)
            const { data } = newTodo;

            dispatch(addTodo(data))
           dispatch(loadTodoSuccess())
        } catch (error) {
        
            console.log(error.response)

            dispatch(loadTodoFailure())

        }
        
    };

// fetching todos request 
export const fetchingTodoData = () =>

    async dispatch => {

        try {
        
            // const getTodo = await axios.get(`http://localhost:5000/todoApi/`);

            const getTodo = await axios.get(`http://localhost:5000/todo/`);

        
            const { data } = getTodo;

            dispatch(fetchTodo(data))
           
        } catch (error) {
        
            console.log(error.response)

        }
        
    }; 

// complete todo request 
export const updateTodoStatus = ID =>

    async dispatch => {

        try {
        
            const updateTodo = await axios.put(`http://localhost:5000/todoApi/${ID}`);
        
            const { data } = updateTodo;

            console.log(data)

            dispatch(completeTodo(data))
           
        } catch (error) {
        
            console.log(error.response)

        }
        
    };     
    
// delete todo request 
export const deletingTodoData = ID =>

    async dispatch => {

        try {
        
            const todoDeleted = await axios.delete(`http://localhost:5000/todoApi/${ID}`);
        
            const { data } = todoDeleted;

            dispatch(deleteTodo(data))
           
        } catch (error) {
        
            console.log(error.response)

        }
        
    };     