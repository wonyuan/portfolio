import React from 'react';
import './card.css'; 
import { Link } from 'react-router-dom';
import Tag from './tag.jsx'


const Card = ({ id, cover, subtitle, desc, path,tags}) => {
    return (
      <div className="card">
        <Link to={`${path}/${id}`}>
          <div className="cover" style={{ backgroundImage: `url(${cover})` }}></div>
          <div className="sub-container">
            <p className="subtitle">{subtitle}</p>
            <svg 
                className="diag-arrow"
                width="22" 
                height="22" 
                viewBox="0 0 36 36" 
                xmlns="http://www.w3.org/2000/svg"
                fill="none">
                <path d="M26.5031 10.3805C26.5031 9.98998 26.348 9.61547 26.0719 9.33934C25.7957 9.06322 25.4212 8.90809 25.0307 8.90809L13.2516 8.83447C12.8611 8.83447 12.4866 8.9896 12.2104 9.26573C11.9343 9.54185 11.7792 9.91636 11.7792 10.3069C11.7792 10.6974 11.9343 11.0719 12.2104 11.348C12.4866 11.6241 12.8611 11.7792 13.2516 11.7792H21.4381L9.2614 23.9853C9.12339 24.1222 9.01386 24.2851 8.9391 24.4645C8.86435 24.6439 8.82587 24.8364 8.82587 25.0307C8.82587 25.2251 8.86435 25.4176 8.9391 25.597C9.01386 25.7764 9.12339 25.9393 9.2614 26.0761C9.39828 26.2141 9.56112 26.3237 9.74055 26.3984C9.91997 26.4732 10.1124 26.5117 10.3068 26.5117C10.5012 26.5117 10.6936 26.4732 10.873 26.3984C11.0525 26.3237 11.2153 26.2141 11.3522 26.0761L23.5583 13.87V22.086C23.5583 22.4765 23.7135 22.851 23.9896 23.1271C24.2657 23.4032 24.6402 23.5583 25.0307 23.5583C25.4212 23.5583 25.7957 23.4032 26.0719 23.1271C26.348 22.851 26.5031 22.4765 26.5031 22.086V10.3805Z"/>
            </svg>       
        </div>
        </Link>
        <div className="tags-container">
                {tags.map((tag, index) => (
                <Tag key={index} text={tag} />
                ))}
        </div>   
        <p className="desc">{desc}</p>
      </div>
    );
  };
  
  

export default Card;
