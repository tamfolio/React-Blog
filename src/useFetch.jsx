import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
 
 
    useEffect(() => {

        const abortCont = new AbortController();
        setTimeout(() => {
         fetch(url, {signal: abortCont.signal})
         .then(response => {
             if (!response.ok) {
                 throw Error('Could Not Fetch the data for that resource')
             }
         
            return response.json();
         })
         .then((data) => {
             setData(data)
             setIsLoading(false);
             setError(null);
         })
         .catch(err=> {
             if(err.name === 'AbortError'){
                 console.log('fetch aborted')
             } else {
             setError(err.message);
             setIsLoading(false);
             }
         })
        }, 1000 );

        return () => abortCont.abort();
        }, [url]);

        return { data, isLoading, error}
}

export default useFetch