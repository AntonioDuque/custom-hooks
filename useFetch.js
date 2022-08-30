import React from 'react'
import { useEffect,useState } from 'react'

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data:null,
        isLoading:true,
        hasError:null
    })


    const getFetch = async () =>{

        setState(prevState=>{
            return{
                ...prevState,
                isLoading:true
            }
        })
         const res  =  await fetch( url );
         const data = await res.json();
         setState(prevState=>{
            return{
                data:data,
                isLoading:false,
                hasError:null
            }
         })
    }


 
    useEffect(() => {
      getFetch();
    }, [url]) //Cada vez que mi url cambie se vuelve a disparar mi useEffect
    

    return{
            data: state.data,
            isLoading: state.isLoading,
            hasError: state.hasError
    }

}
