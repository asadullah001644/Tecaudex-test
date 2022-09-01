import React from 'react';
import Button from '../components/Button';
import './style.css'
const Home = () => {
return (
    <>
	<div className="">
        <div className='heroBanner'>
            <div className="container">
                <div className='heroContent'>
                    <div>
                        <h1 className='hero-title'>New Sport World In <span style={{ color: '#FF9F1C' }}>Vientiane</span></h1>
                        <div style={{ display: 'flex',  justifyContent: 'flex-end'}}>
                            <Button text={'book now'}/>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='arenaBanner'>
       <div className="container">
            <div className="areanContent">
                <p>
                    New Arena was established in 2014 with only 2 artificial soccer field and a swimming pool to serve our customers, but now we would like to introduce ourself as a New Arena Sports and fitness center.
                </p>
                <p>
                    New Arena is not just a sports and fitness club, it's a perfect place to start your healthy life, get fit, and become stronger in a friendly and fun atmosphere. Our center is designed to meet all kinds of client needs.
                </p>
                <div style={{ display: 'flex'}}>
                    <Button text={'read more'}/>
                </div>
            </div>
       </div>
    </div>
    </>
);
};

export default Home;
