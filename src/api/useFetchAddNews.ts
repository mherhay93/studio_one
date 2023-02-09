import {useState} from "react";
import {StatusFetch} from "../types";
import {useFetchData} from "./useFetchData";
import {api} from "../constants";

interface IAddNews {
    title: string,
    description: string
    image: any
}

export const useFetchAddNews = () => {
    const [status, setStatus] = useState('')
    
    const {fetchData} = useFetchData()
    const fetchAddNews = ({title, description, image}: IAddNews) => {
        
        fetch(`${api}/news`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                description,
                image
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                    console.log(data, 'data')
                    setStatus(StatusFetch.SUCCESS)
                    fetchData()
                }
            )
            .catch(() => setStatus(StatusFetch.ERROR));
    }
    
    return {fetchAddNews, status}
}
