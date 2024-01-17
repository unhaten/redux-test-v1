import {combineReducers} from "redux";
import {userReducer} from "./userReducer.ts";
import {todoReducer} from "./todo.reducer.ts";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>