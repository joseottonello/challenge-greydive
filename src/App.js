import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from './components/container/Container'
import Item from './components/itemContainer/Item'
import data from './mock/data.json'

const App = () => {
    const [items, setItems ] = useState([])

    useEffect(() => {
        setItems(data)
    }, [])

    return (
        <div className="container flex justify-center">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Container items={items}/>}></Route>
                    <Route path='/:cliente' element={<Item items={items}/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
