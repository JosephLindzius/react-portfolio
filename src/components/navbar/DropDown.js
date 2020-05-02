import React, {useState} from 'react'
import {ReactComponent as Logo} from '../../LOGO.svg'
import {CSSTransition} from 'react-transition-group'


function DropDown () {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight (el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropDownItem (props) {
        return(
            <a href={props.pathto} className="menu-item" onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return (
        <div className="dropdown" style={{height: menuHeight}}>
            <CSSTransition in={activeMenu === "main"} 
            unmountOnExit 
            timeout={500} 
            classNames='menu-primary'
            onEnter={calcHeight}>
                <div className="menu">
                    <DropDownItem>
                        <span class='menu-margin'>Level Zero</span></DropDownItem>
                    <DropDownItem 
                        leftIcon={<Logo></Logo>} 
                        goToMenu='levelone'> <span className='menu-margin'>Level One</span>
                    </DropDownItem>
                </div>
            </CSSTransition>
            <CSSTransition in={activeMenu === "levelone"} 
            unmountOnExit 
            timeout={500} 
            classNames='menu-secondary'
            onEnter={calcHeight}>
                <div className="menu">
                     <DropDownItem goToMenu='main'><span className="menu-margin">Go back</span></DropDownItem>
                     <DropDownItem ><span className="menu-margin">Under Construction</span></DropDownItem>
                     <DropDownItem ><span className="menu-margin">Under Construction</span></DropDownItem>
                     <DropDownItem ><span className="menu-margin">Under Construction</span></DropDownItem>
                </div>
    
            </CSSTransition>
        </div>
    );
}

export default DropDown;