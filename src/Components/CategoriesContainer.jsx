import React, { useState } from 'react';
import './Styles/CategoriesContainer.css';
const Swal = require('sweetalert2');

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
    ];
    const nsfwCategories = [
        'oral',
        'ass',
        'ero',
        'ecchi',
        'paizuri',
        'milf',
        'hentai',
    ];
    const [categoriesToView, setCategoriesToView] = useState(categories);
    const selectCategory = (event) => {
        props.onSelectCategory(event.target.textContent.toLowerCase());
    };
    const nstwCategoriesActivated = () => {
        Swal.fire({
            title: 'Age Verification ',
            text: `This page may contain age-restricted content.
            You must be 18 years old or older to enter.`,
            icon: 'warning',
            iconColor: '#3f0e66',
            confirmButtonColor: '#6b1197',
            cancelButtonColor: '#1c0537',
            confirmButtonText: 'I am 18 years old or older',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                nsfwCategories.forEach((category) => {
                    categories.push(category);
                });
                setCategoriesToView(categories);
            }
        });
    };
    return (
        <React.Fragment>
            <div className={`categoriesContainer ${visibility}`}>
                <ul className='categories bg-dark'>
                    {categoriesToView.map((category) => (
                        <a href='#header'>
                            <li
                                className='categoriesItem'
                                onClick={selectCategory}
                                key={Math.random()}
                            >
                                {category}
                                <ion-icon name='fitness-outline'></ion-icon>
                            </li>
                        </a>
                    ))}
                    <li>
                        <div className='container'>
                            <span
                                className='categoriesItem'
                                onClick={nstwCategoriesActivated}
                            >
                                +18
                                <ion-icon size='large' name='ban'></ion-icon>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}
