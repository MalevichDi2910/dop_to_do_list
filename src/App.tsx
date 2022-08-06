import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button";


type GetType = {
    "userId": number
    "id": number
    "title": string
    "body": string
}

function App() {

    const[get, setGet] = useState<Array<GetType>>([])

    const getRequestHandler = () => {
      setGet([])
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setGet(json))
    }, [])



    return (
        <div className="App">

            <Button
                nickName={'CleanRequest'}
                callBack={getRequestHandler}/>
            <ul>
            {get.map((el)=>{
                return (
                        <li key={el.id}>
                            <span>{el.id} - </span>
                            <span>{el.userId} - </span>
                            <span>{el.title}</span>
                        </li>
                )
            })}
            </ul>

        </div>
    );
}

export default App;
