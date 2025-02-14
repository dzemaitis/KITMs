import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import styles from './app.css';
import Main from '../main/Main';
import Header from '../header/Header';
import Aside from '../aside/Aside';
import Nav from '../nav/Nav';
import Products from '../products/Products';

// className vietoj class JSX naudojama.
function App(){
    return(
    <main>
        <Switch>

            <Route exact path='/' component={Products}/>
            <Route path='/kontaktai' component={Main}/>
        </Switch>
    </main>
    )
}

export default App;