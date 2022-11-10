import './App.scss';
import IconFavorites from './components/IconFavorites/IconFavorites';
import IconShoppingCart from './components/IconShoppingCart/IconShoppingCart';
import searchImg from './img/icons/search.svg'

function App() {

    return (
        <div className="wrapper">
            <header className="header">
                <div className="header__container">
                    <div className="header__name">Guitar shop</div>
                    <div className="header__search">
                        <img className='header__search-icon' src={searchImg} alt="search-icon" />
                        <input className='header__search-input' type="text" placeholder="Search" />
                    </div>
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

            <div className="main">
                <div className="main__container">
                    <div className="catalog">
                        <h1 className="catalog__header">Guitar shop</h1>

                        <div className="catalog__wrapper">
                            <div className="catalog__filter filter">
                                <div className="filter__price-range">
                                    <p>Price range</p>
                                </div>

                                <div className="filter__manufacturers">
                                    <p>manufacturers</p>
                                </div>
                            </div>

                            <div className="catalog__items">
                                <div className="catalog__item item">
                                    <div className="item__header">
                                        <img src="https://leaderpromusic.ua/image/cache/catalog/product/cortad810op/0794_cort-ad810-op_left-front-side-view_1_leaderpromusic-500x500.jpg" alt="" />
                                    </div>
                                    <div className="item__body">
                                        <h2 className="item__body-name">Cort AD810 OP</h2>
                                        <span className="item__body-price">4599 грн</span>
                                        <button>Add in cart</button>
                                    </div>
                                </div>
                                <div className="catalog__item item">
                                    <div className="item__header">
                                        <img src="https://leaderpromusic.ua/image/cache/catalog/product/cortad810op/0794_cort-ad810-op_left-front-side-view_1_leaderpromusic-500x500.jpg" alt="" />
                                    </div>
                                    <div className="item__body">
                                        <h2 className="item__body-name">Fender CD-60SCE WN NAT</h2>
                                        <span className="item__body-price">4599 грн</span>
                                        <button>Add in cart</button>
                                    </div>
                                </div>
                                <div className="catalog__item item">
                                    <div className="item__header">
                                        <img src="https://leaderpromusic.ua/image/cache/catalog/product/cortad810op/0794_cort-ad810-op_left-front-side-view_1_leaderpromusic-500x500.jpg" alt="" />
                                    </div>
                                    <div className="item__body">
                                        <h2 className="item__body-name">Parksons JB4111C SB</h2>
                                        <span className="item__body-price">4599 грн</span>
                                        <button>Add in cart</button>
                                    </div>
                                </div>
                                <div className="catalog__item item">
                                    <div className="item__header">
                                        <img src="https://leaderpromusic.ua/image/cache/catalog/product/cortad810op/0794_cort-ad810-op_left-front-side-view_1_leaderpromusic-500x500.jpg" alt="" />
                                    </div>
                                    <div className="item__body">
                                        <h2 className="item__body-name">Maxtone WGC4010 NAT</h2>
                                        <span className="item__body-price">4599 грн</span>
                                        <button>Add in cart</button>
                                    </div>
                                </div>
                                <div className="catalog__item item">
                                    <div className="item__header">
                                        <img src="https://leaderpromusic.ua/image/cache/catalog/product/cortad810op/0794_cort-ad810-op_left-front-side-view_1_leaderpromusic-500x500.jpg" alt="" />
                                    </div>
                                    <div className="item__body">
                                        <h2 className="item__body-name">Maxtone WGC4010 NAT</h2>
                                        <span className="item__body-price">4599 грн</span>
                                        <button>Add in cart</button>
                                    </div>
                                </div>
                                <div className="catalog__item item">
                                    <div className="item__header">
                                        <img src="https://leaderpromusic.ua/image/cache/catalog/product/cortad810op/0794_cort-ad810-op_left-front-side-view_1_leaderpromusic-500x500.jpg" alt="" />
                                    </div>
                                    <div className="item__body">
                                        <h2 className="item__body-name">Maxtone WGC4010 NAT</h2>
                                        <span className="item__body-price">4599 грн</span>
                                        <button>Add in cart</button>
                                    </div>
                                </div>
                                <div className="catalog__item item">
                                    <div className="item__header">
                                        <img src="https://leaderpromusic.ua/image/cache/catalog/product/cortad810op/0794_cort-ad810-op_left-front-side-view_1_leaderpromusic-500x500.jpg" alt="" />
                                    </div>
                                    <div className="item__body">
                                        <h2 className="item__body-name">Maxtone WGC4010 NAT</h2>
                                        <span className="item__body-price">4599 грн</span>
                                        <button>Add in cart</button>
                                    </div>
                                </div>
                                <div className="catalog__item item">
                                    <div className="item__header">
                                        <img src="https://leaderpromusic.ua/image/cache/catalog/product/cortad810op/0794_cort-ad810-op_left-front-side-view_1_leaderpromusic-500x500.jpg" alt="" />
                                    </div>
                                    <div className="item__body">
                                        <h2 className="item__body-name">Maxtone WGC4010 NAT</h2>
                                        <span className="item__body-price">4599 грн</span>
                                        <button>Add in cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
