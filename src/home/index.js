import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faCheck } from "@fortawesome/free-solid-svg-icons";

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

        <div className="list-container">
          <Card className="card">
            <CardActionArea className="card-action-area">
              <CardContent className="card-content">
                <div>
                  <p className="title">Mês</p>
                  <div className="list-card-body">
                    <div className="list-card-item">
                      <FontAwesomeIcon icon={faShoppingBasket} size="sm" />
                      <p>1 Item(s) restante</p>
                    </div>

                    <div className="list-card-item">
                      <FontAwesomeIcon icon={faCheck} size="sm" />
                      <p>2 Item(s) comprados</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
            <Divider />
            <CardActions className="card-footer">
              <p>01/01/2019</p>
              <p>R$ 100,00</p>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
