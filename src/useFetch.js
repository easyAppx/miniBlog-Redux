import React, {useState, useEffect} from "react";

const useFetch = (url) =>{

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortController = new AbortController(); // for cleanup

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then( res =>{
          if(!res.ok){
            throw Error('could not fetch result for the requested resource')
          }
          return res.json();
        })
        .then(data => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(error => {
          if(error.name === 'AbortError'){
            console.log('Fetch Aborted')
          }else{
            setIsPending(false);
            setError(error.message);
          }
        })
    }, 1000)

    //cleanup function...
    return () => abortController.abort();
  }, [url]);

  return{data, isPending, error}
}

export default useFetch