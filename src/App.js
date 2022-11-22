import data from './mock/data.json'

const App = () => {

    console.log(data.map((information) => information))

    return (
        <div className="container mx-auto px-4">
            {
                data.map((response) => (
                    <h1>{response.escenario}</h1>
                ))
            }
        </div>
    )
}

export default App;
