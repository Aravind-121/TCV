import React,{Component} from 'react';
import washhand from '../images/wash.png';
import wearmask from '../images/mask.png';
import distancing from '../images/distance.png';
import '../Styles/Prevention.css';
class Prevention extends Component{
    render(){
        return(
            <div className="prevention-daba">
                <div className="img-divs">
                    <img alt="Hand Wash" src={washhand}/>
                    <br/>
                    <p>Wash your hands</p>
                </div>
                <div className="img-divs">
                    <img alt="Wear a mask.Save lives." src={wearmask}/>
                    <br/>
                    <p>Wear a mask. Save lives.</p>
                </div>
                <div className="img-divs">
                    <img alt="Social-Distancing" src={distancing}/>
                    <p>Keep a safe distance</p>
                </div>
            </div>
        )
    }
}

export default Prevention;