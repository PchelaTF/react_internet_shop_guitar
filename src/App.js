import './App.scss';
import IconFavorites from './components/IconFavorites/IconFavorites';
import IconShoppingCart from './components/IconShoppingCart/IconShoppingCart';

function App() {

    return (
        <div className="wrapper">
            <header className="header">
                <div className="header__container">
                    <div className="header__name">Guitar shop</div>
                    
                    

                    <input className='header__search' type="text" placeholder="Search" />

                    <div className="header__icons">
                        <div className="header__favorites">
                            <IconFavorites />
                        </div>
                        <div className="header__shopping-cart">
                            <IconShoppingCart />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default App;
