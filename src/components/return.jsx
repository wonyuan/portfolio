import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './card.css'; 

const Return = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <>
    <div className='return-container' style={{ display: 'flex', alignItems: 'center' }}>         
        <FontAwesomeIcon
        icon={faArrowLeft}
        size="1x"
        style={{ cursor: 'pointer', marginRight: '5px' }}
        onClick={handleGoBack}
        />
        <p className='subtitle-return' 
        style={{ fontWeight: 'bold', margin:0, marginLeft:'5px', cursor: 'pointer'}}
        onClick={handleGoBack}> 
        go back</p>

    </div>
    </>
  );
};

export default Return;

