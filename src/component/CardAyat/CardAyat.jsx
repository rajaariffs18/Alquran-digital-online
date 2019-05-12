import React from 'react';
import './CardAyat.css';

const CardAyat = (props) => {
    return (
        <div className="card">
            <div className="nomor">{props.nomor}</div>
            <div className="desc-ayat">
                <div className="ayat">{props.nama}</div>
                <div className="desc">{props.ayat} Ayat - {props.type}</div>
            </div>
            
        </div>
    );
}

export default CardAyat;