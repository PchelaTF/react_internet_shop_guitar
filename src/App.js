import { useState } from 'react';
import './App.scss';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
    const [orders, setOrders] = useState([])

    function addToOrders(item) {
        setOrders([...orders, item])
    }

    return (
        <div className="wrapper">
            <Header orders={orders}/>

            <main className="main">
                <div className="main__container">
                    <Catalog onAdd={addToOrders} />
                </div>
            </main>


            <Footer />
        </div>
    )
}

export default App;
