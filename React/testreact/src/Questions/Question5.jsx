import React,{useReducer} from "react";

const reducer=(state,action)=>{
    switch(action.type){
        case"Increment":
        return{count: state.count+1}

            case"Decrement":
            return{count:state.count-1}

                case"Reset":
                return{count:0};

                default:
                    return state;

        
    }
};

const UseReducer=()=>{
    const initialState={count:0}
    const [state,dispatch]=useReducer(reducer,initialState);
    const increment=()=>{
        dispatch({type:"Increment"});
    };
    const decrement=()=>{
        dispatch({type:"Dncrement"});
    };
    const reset=()=>{
        dispatch({type:"Reset"});
    };

    return(
        <div>
        <h1>count :{state.count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>reset</button>
        </div>
    )


}

export default UseReducer