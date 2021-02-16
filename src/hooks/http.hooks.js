import {useCallback} from 'react'

const useHttp = () => {

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        try {
            const response = await fetch(url, {method, body, headers})
            const data = await response.json()
            
            return data

        } catch(e) {
            console.log(e)
        }
    }, [])

    return {request}

}

export default useHttp