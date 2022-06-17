// importation of action types from the actio folder 
import { ADD_TO_DO, FETCH_TO_DO, COMPLETE_TODO, DELETE_TODO } from "../actions/Actions";

import { LOAD_TO_DO_REQUEST, LOAD_TO_DO_SUCCESS, LOAD_TO_DO_FAILURE } from "../actions/Actions";

// export const todoReducer = (state = [], action) => {
    
//     switch (action.type) {

//         // add todo case
//         case ADD_TO_DO: {
            
//             return [...state, action.payload.ID].reverse();

//         }

//             // fetch todo case
//         case FETCH_TO_DO: {

//             return action.payload.data.reverse();

//         }
        
//         // complete todo case
//         case COMPLETE_TODO: {

//             return state.map(status => {

//                 return (

//                     // comparing ids
//                     (status.id === action.payload.statusId.id) ?

//                         // if id matches change isComplete to true and vice versa
//                     { ...status, isCompleted: !status.isCompleted } :

//                         // else return the default
//                     { ...status }
                
//                 )
                
//             })

//         }
           
//             // delete todo case
//         case DELETE_TODO: {
            
//             return state.filter(todo => todo.id !== action.payload.deleteTodoId.id)

//         }
                
//         default:

//         // return the default state
//         return state;
        
//     }

// }

// export const todoloader = (loader = false, action) => {

//     switch (action.type) {
        
//         case LOAD_TO_DO_REQUEST: {
//             // console.log(loader)

//             return true
//         }
            
//         case LOAD_TO_DO_SUCCESS: {
//             // console.log(loader,'success')

//             return false
//         }
        
//         case LOAD_TO_DO_FAILURE: {
//             // console.log(loader,'failure')
//             return false
//         }
    
//         default:
        
//             return loader;
        
//     }

// };

// combining the loader reducer into the todo reducer


export const loaderAndTodoReducer = (stateObject = { todoData:[], loader:false }, action) => {
    
    switch (action.type) {

        // add todo case 
        case ADD_TO_DO: {

            return {

                ...stateObject,

                todoData: [...stateObject.todoData, action.payload.ID].reverse()

            }

        }

        // fetch todo case 
        case FETCH_TO_DO: {
            console.log(stateObject,'bb')

            return {

                ...stateObject,

                // loader: false,
                
                todoData: action.payload.data.reverse()
                
            }

        }
            
        case LOAD_TO_DO_REQUEST: {

            console.log(stateObject,'loading')
            
            return {

                ...stateObject,

                 loader: true
            }        
        }

        case LOAD_TO_DO_SUCCESS: {
            console.log(stateObject, 'success')

            return {

                ...stateObject,

                // changing the loader value back to false after it been changed to true 
                loader: false

            }

        }
        
        case LOAD_TO_DO_FAILURE: {

            console.log(stateObject, 'failure')
            
            return {

                ...stateObject,

                loader: false
            }
            
        }
        
        // complete todo case
        case COMPLETE_TODO: {

            return {

                ...stateObject,

                todoData: stateObject.todoData.map(status => {
                    
                    return (
    
                        // comparing ids 
                        (status.id === action.payload.statusId.id) ?
    
                            // if id matches change isComplete to true and vice versa 
                            { ...status, isCompleted: !status.isCompleted } :
    
                            // else return the default 
                            { ...status }
                    
                    )
                    
                })
    
            }
           
        }
           
        // delete todo case 
        case DELETE_TODO: {

            console.log(stateObject)
            return {

                ...stateObject,

                todoData: stateObject.todoData.filter(todo => todo.id !== action.payload.deleteTodoId.id)
                
            }       

        }
                
        default:

            // return the default state 
            return stateObject;
        
    }

}; 