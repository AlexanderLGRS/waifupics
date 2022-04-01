import React, { useEffect, useState } from 'react';
import './App.css';
import CategoriesContainer from './Components/CategoriesContainer';
import Header from './Components/Header';
import WaifuCard from './Components/WaifuCard';
import WaifuCardsContainer from './Components/WaifuCardsContainer';
const token =
    'eyJpZCI6NzY3MDgxNTUzMTM4Mjg2NjMyLCJzZWNyZXQiOiI0aERWdmJ0Vy0xa2VGUSJ9.DCuOlz3nyXq6NiV-j1cH-mYOWN8';
var picsToRender = [];
function App() {
    const [category, setCategory] = useState('oppai');
    const [refresh, setRefresh] = useState('true');
    const [arrayOfPicsToRender, setArrayOfPicsToRender] = useState([]);
    useEffect(() => {
        if (refresh) {
            fetch(
                `https://api.waifu.im/random/?many=true&selected_tags=${category}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    for (let i = 0; i < data.images.length; i++) {
                        const waifuInfo = {
                            url: data.images[i].url,
                            description: data.images[i].tags[0].description,
                        };
                        picsToRender.unshift(waifuInfo);
                    }
                    setRefresh('false');
                });
        }
        setArrayOfPicsToRender(picsToRender);
    }, [category]);

    const categorySelected = (category) => {
        setRefresh('true');
        setCategory(category);
        console.log(category);
    };

    const [categoriesVisible, setCategoriesVisible] = useState('invisible');
    const onChangeCategoriesVisibilityHandler = () => {
        if (categoriesVisible === 'invisible') {
            setCategoriesVisible('');
        } else if (categoriesVisible === '') {
            setCategoriesVisible('invisible');
        }
    };
    return (
        <div className='App'>
            <Header
                onChangeCategoriesVisibility={
                    onChangeCategoriesVisibilityHandler
                }
            />
            <CategoriesContainer
                visibility={categoriesVisible}
                onSelectCategory={categorySelected}
            />
            <WaifuCardsContainer>
                {arrayOfPicsToRender.map((pic) => (
                    <WaifuCard
                        key={Math.random()}
                        url={pic.url}
                        description={pic.description}
                    />
                ))}
            </WaifuCardsContainer>
        </div>
    );
}

export default App;
