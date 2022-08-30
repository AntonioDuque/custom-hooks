import { useState } from "react";

export const useCounter= ( initialValue = 10  ) =>{


    const [counter, setCounter] = useState(initialValue);

    const increment = ( value = 1) => {
        setCounter(prevCounter => prevCounter + value)
    }

    const decrement= (value = 1) => {
        
            if(counter ===0)return
            setCounter(prevCounter => prevCounter - value);
        
    }

    const reset = () => {
        setCounter(prevCounter => initialValue);
    }


    return{
        counter,
        increment,
        decrement,
        reset
    }

}
