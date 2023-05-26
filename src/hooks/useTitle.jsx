import { useEffect } from "react"

const useTitle=title=>{
   useEffect(()=>{
    document.title=`${title}-Thai Express`;
   },[title])
}; 

export default useTitle;