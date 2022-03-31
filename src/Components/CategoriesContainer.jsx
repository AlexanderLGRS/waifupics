import React, { useState } from 'react';
import './Styles/CategoriesContainer.css';

export default function CategoriesContainer(props) {
    const { visibility } = props;
    const categories = [
        'Uniform',
        'Maid',
        'Waifu',
        'Marin-kitagawa',
        'Mori-calliope',
        'Raiden-shogun',
        'Oppai',
        'Selfies',
        'oral',
        'ass',
        'ero',
        'ecchi',
        'paizuri',
        'milf',
        'hentai',
    ];
    const selectCategory = (event) => {
        props.onSelectCategory(event.target.textContent.toLowerCase());
    };
    return (
        <React.Fragment>
            <div className={`categoriesContainer ${visibility}`}>
                <ul className='categories bg-dark'>
                    {categories.map((category) => (
                        <li
                            className='categoriesItem'
                            onClick={selectCategory}
                            key={Math.random()}
                        >
                            {category}
                            <ion-icon
                                name='fitness-outline'
                                size='large'
                            ></ion-icon>
                        </li>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    );
}
