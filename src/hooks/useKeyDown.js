import React from "react";

export default function useKeyDown(key, callback){
    React.useEffect(()=>{
        function handleEscapeKey(event){
            if(event.code === key){
               callback();
            }
        }
        window.addEventListener("keydown", handleEscapeKey);
        return ()=> window.removeEventListener("keydown", handleEscapeKey);
    },[key, callback]);
}