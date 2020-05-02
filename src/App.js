import React, {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import NavItem from './components/navbar/NavItem';
import {ReactComponent as Logo} from './LOGO.svg'
import {ReactComponent as Camera} from './Camera.svg'
import DropDown from './components/navbar/DropDown';
import Homepage from './components/HomePage'
import PageNotFound from './components/PageNotFound'

import {Route} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import AboutPage from './components/AboutPage';

/* landing page, three buttons -> 1. Welcome back 2. I know what I am searchin for 3.  Help me ind what I need.
    first button goes to nav bar left page 
    search - field on top - four cards under images on top.  Na,e Description, see more -> profile page
x

*/
function App () {

  const [activePage, setActivePage] = useState('images');

      return (
        <div className="main_background">
          <Navbar>
            <NavItem icon={<Logo></Logo>} pathto={process.env.PUBLIC_URL+'/#'}></NavItem>
            <NavItem icon='C' pathto={process.env.PUBLIC_URL+'/#/contact'}></NavItem>
            <NavItem icon={<Camera></Camera>}></NavItem>
            <NavItem icon='D'>
            <DropDown></DropDown>
            </NavItem>
          </Navbar>
          <div>
            <Route exact path='/' component={Homepage} />
            <Route path='/contact' component={AboutPage} />
          </div>
        </div>

      );
    
  }
  
  export default App; 
