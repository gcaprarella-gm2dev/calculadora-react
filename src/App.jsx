import React, { useState } from 'react';
import Result from './components/Result';
import MathOperations from './components/MathOperations';
import Functions from './components/Functions';
import Numbers from './components/Numbers';
import { words } from 'lodash';

import './App.css';

const App = () => {
    const [ stack, setStack ] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g)
    console.log("Renderización de la App: ", items)
    const value = items.length > 0 ? items[items.length-1] : 0;
    return (
        <main className='react-calculator'>
            <Result value={value} />
            <Numbers onClickNumber={number => {
                console.log("Number: " + number);
                setStack(`${stack}${number}`)
            }}/>
            <Functions 
                onContentClear={() => {
                    console.log("Content clear")
                    setStack("")
                }} 
                onDelete={() => {
                    if(stack.length > 0)
                    {
                        console.log("Delete");
                        setStack(stack.slice(0, -1));
                    }
                }}
            />
            <MathOperations onClickOperation={operation => {
                    console.log("Operation: " + operation)
                    setStack(`${stack}${operation}`);
                }}
                onClickEqual={equal => {
                    console.log("Equal: " + equal);
                    setStack(eval(stack).toString());
                }}/>
        </main>
    )
}

export default App;