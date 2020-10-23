import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import '../Styles/Search.css';
class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            districtName:"",
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e,v){
        this.setState({districtName:v});
    }
    render(){
        let link = '/';
        if(this.state.districtName && this.state.districtName !== "null" && this.state.districtName !== "undefined"  ){
            link=link+this.state.districtName.name;
        }
        return(
            <div>
                <Autocomplete
                    id="combo-box-demo"
                    options={distNames}
                    getOptionLabel={(option) => option.name}
                    onChange={this.handleChange}
                    className="search-daba"
                    style={{color:"white"}}
                    renderInput={(params) => <TextField {...params} style={{color:"white"}} variant="outlined" placeholder="Enter District Name"/>}
                />
                <NavLink className="centering" to={link}><p className="search-btn">Search</p></NavLink>
            </div>
        )
    }
}
const distNames = [
    { name: 'Ariyalur'},
    { name: 'Chengalpattu' },
    { name: 'Chennai' },
    { name: 'Coimbatore' },
    { name: 'Cuddalore' },
    { name: "Dharmapuri" },
    { name: 'Dindigul'},
    { name: 'Erode' },
    { name: 'Kallakurichi' },
    { name: 'Kancheepuram' },
    { name: 'Karur' },
    { name: 'Krishnagiri' },
    { name: 'Kanyakumari' },
    { name: 'Madurai' },
    { name: 'Nagapattinam' },
    { name: 'Namakkal' },
    { name: 'Nilgiris' },
    { name: 'Perambalur' },
    { name: 'Pudukkottai' },
    { name: 'Ramanathapuram' },
    { name: 'Ranipet' },
    { name: 'Salem' },
    { name: 'Sivaganga' },
    { name: 'Tenkasi' },
    { name: 'Thanjavur' },
    { name: 'Theni' },
    { name: 'Thiruvallur' },
    { name: 'Thiruvarur' },
    { name: 'Thoothukkudi' },
    { name: 'Tiruchirappalli' },
    { name: 'Tirunelveli' },
    { name: 'Tirupathur' },
    { name: 'Tiruppur' },
    { name: 'Tiruvannamalai' },
    { name: 'Vellore' },
    { name: 'Viluppuram' },
    { name: 'Virudhunagar' },
];

export default Search;