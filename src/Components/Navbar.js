import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../Styles/Navbar.css';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
class Navbar extends Component{
    render(){
        return(
            <div className="nav">
                <NavLink to='/' className="nav-link"><HomeRoundedIcon style={{ color: 'white',fontSize:'26px',textAliign
            :"center" }}/><p className="home">Home</p></NavLink>
            </div>
        )
    }
}

export default Navbar;