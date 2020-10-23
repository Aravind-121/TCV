import React,{Component} from 'react';
import '../Styles/Covid.css';
import axios from 'axios';
import Navbar from './Navbar';

class Covid extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            active:0,
            confirmedCases:0,
            recovered:0,
            decreased:0,
        }
        this.getContent=this.getContent.bind(this);
    }
    async componentDidMount(){
        this.getContent(this.props.distname);
    }
    async getContent(p){
        try{
            let district=p[0].toUpperCase()+p.slice(1);
            let res = await axios.get("https://api.covid19india.org/state_district_wise.json");
            let active = (res.data['Tamil Nadu'].districtData[district].active);
            let decreased = (res.data['Tamil Nadu'].districtData[district].deceased);
            let confirmed = (res.data['Tamil Nadu'].districtData[district].confirmed);
            let recovered = (res.data['Tamil Nadu'].districtData[district].recovered);
            this.setState({name:district,active:active.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),confirmedCases:confirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),recovered:recovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),decreased:decreased.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')});
        }catch (e){
            alert('Some thing went wrong!,Try Again');
        }
    }
    render(){
        let {active,confirmedCases,recovered,decreased,name}=this.state;
        return(
            <div>
                <Navbar/>
                <div className="Tilt">
                    <div className="card">
                        <div className="Tilt-inner main-card"> 
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Confirmed cases: <span id="red">{confirmedCases}</span></p>
                        <p className="card-text">Active cases: <span>{active}</span></p>
                        <p className="card-text">Recovered: <span id="green">{recovered}</span></p>
                        <p className="card-text">Decreased: <span id="grey">{decreased}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
        }
}

export default Covid;