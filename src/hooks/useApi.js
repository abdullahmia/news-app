import { useEffect, useState } from "react";

const useApi = (service) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        service().then((data) => {
            setData(data);
            setIsLoading(false);
        }).catch((error) => {
            setError(error);
        })
    }, [service]);

    return {
        data,
        isLoading,
        error
    }
}

export default useApi;