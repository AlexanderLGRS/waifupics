import React from 'react';
import './Styles/WaifuCard.css';

export default function WaifuCard(props) {
    const { url, description } = props;
    return (
        <React.Fragment>
            <div className='waifuCard'>
                <img src={url} alt={description} className='waifuPicture' />
                <span className='waifuDescription'>{description}</span>
            </div>
        </React.Fragment>
    );
}
