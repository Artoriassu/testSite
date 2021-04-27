import { Action, applyMiddleware, combineReducers, createStore  } from "redux";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import tableReducer from "./tableReducer";

let rootReducer = combineReducers({
    tablePage: tableReducer,
    form: formReducer,
});

type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>

export type InferActionsTypes<T> = T extends { [keys:string]: (...args:any[]) => infer U} ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
window._store_ = store;

export default store;