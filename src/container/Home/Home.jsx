import React, {Component, Fragment} from 'react';
import Header from '../../component/Header/Header';
import Ayat from '../Ayat/Ayat';

import './Home.css';

class Home extends Component {
    render(){
        return (
            <Fragment>
                <Header />

                <Ayat />
            </Fragment>
            
        );
    }
}

export default Home;