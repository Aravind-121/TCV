import React,{Component} from 'react';
import {Switch,Route} from "react-router-dom";
import Covid from './Components/Covid';
import Home from './Components/Home';

class App extends Component {
  render(){
    function getDistrict(routerProps){
      let name=routerProps.match.params.name;
      return <Covid distname={name}/>;
    };
    return(
      <Switch>
        <Route exact path='/' render={()=><Home/>}/>
        <Route exact path="/:name" render={getDistrict}/>
      </Switch>
    )
  }
}

export default App;
