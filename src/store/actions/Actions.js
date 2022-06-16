// add todo action type 
export const ADD_TO_DO = "ADD_TO_DO";

// add todo action creator 
export const addTodo = ID => ({

    type: ADD_TO_DO,
    
    payload: { ID }

});

// fetch todo action type 
export const FETCH_TO_DO = "FETCH_TO_DO";

// fetch todo action creator 
export const fetchTodo = data => ({

    type: FETCH_TO_DO,
    
    payload: { data }

});

// COMPLETE(update status) todo action type 
export const COMPLETE_TODO = "COMPLETE_TO_DO";

// COMPLETE(update status) todo action creator 
export const completeTodo = statusId => ({

    type: COMPLETE_TODO,
    
    payload: { statusId }

});

// COMPLETE(update status) todo action type 
export const DELETE_TODO = "DELETE_TO_DO";

// COMPLETE(update status) todo action creator 
export const deleteTodo = deleteTodoId => ({

    type: DELETE_TODO,
    
    payload: { deleteTodoId }

});