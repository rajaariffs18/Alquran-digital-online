import React, {Component, Fragment} from 'react';
import CardAyat from '../../component/CardAyat/CardAyat';
// import Header from '../../component/Header/Header';

import Axios from 'axios';

import './Ayat.css';

class Ayat extends Component {
    state = {
        post : []
    }

    componentDidMount(){
        Axios.get('https://al-quran-8d642.firebaseio.com/data.json')
        .then((res) => {
            this.setState({
                post: res.data
            })
        })  
        // .then((res) => console.log(res))
    }

    render(){
        return (
            <Fragment>
                {/* <p>Ayat</p> */}
                
                <div className="container-ayat">
                    {
                        this.state.post.map(post => {
                            return <CardAyat key = {post.nomor} nomor = {post.nomor} nama = {post.nama} ayat = {post.ayat} type = {post.type}/>
                        })
                    }
                </div>
            </Fragment>


        );
    }
}

export default Ayat;