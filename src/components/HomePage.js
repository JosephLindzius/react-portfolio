import React from 'react'
import Hom from './homepage/animatedHome'
import BigButton from './buttons/Button';
 

function HomePage () {

    let date = '10/2/2020 20:30:34'.split(' ');
    const result = date[0].split('/').reverse().join('-')+' '+date[1];


    return (
        <div className='homeCenter'>
            <div className="homepageWrapper">
                <div className='home'>
                    <h1>Homepage</h1>
                    <p>Welcome to my homepage... I am still in construction ;-)</p>
                    <Hom></Hom>
                    {result}
                </div>
            </div> 
            <div>
                <BigButton></BigButton>
            </div>  
        </div>
            
    )
}

export default HomePage