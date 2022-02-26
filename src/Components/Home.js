import React, { Component } from "react";
import "../Styles/Home.css";
import axios from "axios";
import Search from "./Search";
import Prevention from "./Prevention";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import virus from "../images/virus.PNG";
import ChatBot from "./ChatBot";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: "Loading..",
      active: "Loading..",
      recovered: "Loading..",
      death: "Loading..",
    };
  }
  async componentDidMount() {
    try {
      let res = await axios.get(
        "https://covid19.mathdro.id/api/countries/india/confirmed"
      );
      for (var i = 0; i < 11; i++) {
        if (res.data[i].provinceState === "Tamil Nadu") {
          let confirme = res.data[i].confirmed
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
          let recovere = res.data[i].recovered
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
          let activ = res.data[i].active
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
          let deaths = res.data[i].deaths
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
          this.setState({
            confirmed: confirme,
            recovered: recovere,
            death: deaths,
            active: activ,
          });
          break;
        }
      }
    } catch (e) {
      this.setState({
        confirmed: 3448088,
        recovered: 3448088 - 3800,
        death: 38000,
        active: 16000,
      });
    }
  }

  render() {
    let { active, confirmed, recovered, death } = this.state;
    return (
      <div>
        <div className="head-container">
          <div className="virus-cont">
            <img className="virus-img" alt="virus" src={virus} />
          </div>
          <h1 className="heading">COVID-19</h1>
          <p className="heading para">corona virus</p>
        </div>
        <h2 className="tn-heading">TAMIL NADU</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm tn-box red-daba">
              <p>Confirmed</p>
              {confirmed}
            </div>
            <div className="col-sm tn-box blue-daba">
              <p>Active</p>
              {active}
            </div>
            <div className="col-sm tn-box green-daba">
              <p>Recovered</p>
              {recovered}
            </div>
            <div className="col-sm tn-box grey-daba">
              <p>Decreased</p>
              {death}
            </div>
          </div>
        </div>
        <Search />
        <Prevention />
        <ChatBot />
        <div className="footer-links">
          <a href="https://github.com/Aravind-121">
            <GitHubIcon
              style={{ fontSize: "26px", marginRight: "60px", color: "white" }}
            />
          </a>
          <TwitterIcon style={{ fontSize: "26px", color: "#00acee" }} />
        </div>
      </div>
    );
  }
}

export default Home;
