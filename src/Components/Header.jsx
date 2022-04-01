import React from 'react';
import './Styles/Header.css';
import logo from '../Assets/favicon.png';
export default function Header(props) {
    const categoriesVisibilityHandler = () => {
        props.onChangeCategoriesVisibility();
    };
    return (
        <React.Fragment>
            <div className=''>
                <div id='header'></div>
                <nav className='navbar navbar-dark bg-dark'>
                    <div className='container-fluid'>
                        <a className='navbar-brand' href='#'>
                            <img
                                src={logo}
                                alt=''
                                width='50'
                                height='50'
                                className='d-inline-block align-text-center'
                            />
                            Waifus :3
                        </a>
                        <span
                            className='categoriesButton'
                            onClick={categoriesVisibilityHandler}
                        >
                            Categories
                        </span>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
}
