export interface Todo{
    id: string;
    todo: string;
    isDone: boolean;
}

// type Actions = { type: "add", payload: string } |
// { type: "remove", payload: string } |
// { type: "done", payload: string };
// const TodoReducer = (state: Todo[], action:Actions) => {
//     switch (action.type) {
//         case "add":
//             return [
//                 ...state,
//                 { id: Date.now().toString(), todo: action.payload, isDone: false }
//            ]
//      case "remove":
//             return state.filter(todo => todo.id !== action.payload)
//          case "add":
//              return state.map(todo => todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo)
//         default:
//             return state;
//     }
// }

// import {useReducer} from 'react'
// const ReducerExample = () => {
//     const [state, dispatch] = useReducer(TodoReducer,[]);
//     return (<></>)
// }