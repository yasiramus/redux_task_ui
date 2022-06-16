// importation of action types from the actio folder 
import { ADD_TO_DO, FETCH_TO_DO, COMPLETE_TODO, DELETE_TODO } from "../actions/Actions";

import { LOAD_TO_DO_REQUEST, LOAD_TO_DO_SUCCESS, LOAD_TO_DO_FAILURE } from "../actions/Actions";

export const todoReducer = (state = [], action) => {
    
    switch (action.type) {

        // add todo case 
        case ADD_TO_DO: {
            
            return [...state, action.payload.ID].reverse();

        }

            // fetch todo case 
        case FETCH_TO_DO: {

            return action.payload.data.reverse();

        }
        
        // complete todo case
        case COMPLETE_TODO: {

            return state.map(status => {

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
           
            // delete todo case 
        case DELETE_TODO: {
            
            return state.filter(todo => todo.id !== action.payload.deleteTodoId.id)

        }    
                
        default:

        // return the default state 
        return state;
        
    }

} 

export const todoloader = (loader = false, action) => {

    switch (action.type) {
        
        case LOAD_TO_DO_REQUEST: {

            return true
        }
            
        case LOAD_TO_DO_SUCCESS: {

            return false
        }
        
        case LOAD_TO_DO_FAILURE: {

            return false
        }
    
        default:
        
            return loader;
        
    }

};