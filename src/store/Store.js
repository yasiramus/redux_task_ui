// importation of legacy_createstore, combine reducers and applymiddleware from redux
import { legacy_createStore as createStore, combineReducers,applyMiddleware } from "redux";

// importation of redux devtools for easier degging 
import { composeWithDevTools } from "redux-devtools-extension";

// importation of thunk from redux thunk 
import thunk from "redux-thunk";

// // importation of the todo reducer fun from reducer folder
// import { todoReducer, todoloader } from "./reducers/Reducer";

// importation of the todo reducer fun from reducer folder
import { loaderAndTodoReducer } from "./reducers/Reducer";

// using the composeWithDevToolsand passing the applyMiddlewareto it with thw thunk 
const composeEnchancer = composeWithDevTools(applyMiddleware(thunk));

// const reducers = {todoReducer, todoloader}

const reducers = {loaderAndTodoReducer}

// combineReducers being used here 
const rootReducer = combineReducers(reducers);

// exporting the configStore variable
export const configStore = () => createStore(rootReducer, composeEnchancer);

