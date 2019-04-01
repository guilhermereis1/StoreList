import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="new-list-container">
          <Card className="card">
            <CardActionArea className="card-action-area">
              <CardContent className="card-content">
                <div>
                  <p className="title">Adicionar Nova Lista</p>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
