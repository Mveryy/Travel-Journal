import "./App.css";
import data from "./data";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";

function App() {
    const cards = data.map((item) => {
        return <Card key={item.id} item={item} />;
    });
    return (
        <div className="app">
            <Navbar />
            <div className="cards">{cards}</div>
        </div>
    );
}

export default App;
