import { useState } from "react";
import { useEffect } from "react";

function useFetch(url) {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch(url)
            .then(response => {

                if (response.status === 404) {
                    throw new Error('pagina non trovata')
                } else {
                    return response.json();
                }
            })
            .then(jsonData => {
                setProducts(jsonData);
            })
    },[]);

    return {products}
}


export default useFetch