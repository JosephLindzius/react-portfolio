import React, {useState} from 'react'
import {CSSTransition} from 'react-transition-group'
import { Switch } from 'react-router-dom';

function AboutPage (props) {

    const [activePage, setActivePage] = useState('about');

    function Switcher (props) {
        return (
            <a href={props.pathto} className="about-item" onClick={()=>props.goToMenu && setActivePage(props.goToMenu)}>
               LOOK AT ME
            </a>
        )
    }

return(
        <div className='aboutMeWrapper'>
            <div className='aboutUsWrapper'>
        <CSSTransition in={activePage === "about"} 
            unmountOnExit 
            timeout={500} 
            classNames='about-primary'>
            <div className="about" onClick={()=>setActivePage('contact')}>
               <h2 className="aboutHeader">About me</h2>  
               <div className="aboutInfoWrapper">
                   <div className='aboutPhoto aboutBox'>
                        <img src='images/me.png' alt='Photo of Joseph Lindzius'></img>
                   </div>
                   <p className='aboutBox'>Creativity is the source of joy</p>
               </div>
               
            </div>
        </CSSTransition>
        <CSSTransition in={activePage === "contact"}
            unmountOnExit 
            timeout={500} 
            classNames='about-secondary'>
            <div className="about" onClick={()=>setActivePage('about')}>
               <h2 className="aboutHeader">Contact me</h2>  
            </div>
        </CSSTransition>
    
    </div>

        </div>
    

)

}

export default AboutPage;