import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Navbar from "components/Navbars/Navbar.jsx";
import { bugs, website, server } from "variables/general.jsx";
import { Router, Route, Switch, Redirect, Link } from "react-router-dom";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";
import Button from "components/CustomButtons/Button.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { Toolbar } from "@material-ui/core";
import routes from "routes.js";
import Login from "views/Login/Login.jsx"
import Dashboard from "views/Dashboard/Dashboard";
import logo from "assets/img/reactlogo.png";
import AppBar from '@material-ui/core/AppBar';

class Homepage extends React.Component {
  state = {
    value: 0,
    text: "Next",
    persons: {}
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  login = () => {
    this.setState({ showLoginWindow: true })
  }

  closeForgetPassword = () => {

  }

  showForgetPasswordPopup = () => {
    this.setState({ showForgetPasswordPopup: true })
  }

  render() {
    const { classes, ...rest } = this.props;
    const { text } = this.state //destucture state
    return (
      <div style={{ margin: "0px !important" }}>
        {!this.state.showLoginWindow &&
          <AppBar style={{ background: '#9c27b0' }} position="static">
            <Toolbar>
              <div className={classes.logoImage + " " + classes.flex + " " + classes.leftAlign}>
                <img src={logo} alt="logo" className={classes.img} />
                Cara Crachá
              </div>
              <div className={classes.rightAlign}>
                <Button style={{color: "#9c27b0", 
                                backgroundColor: "white",
                                fontWeight: "bold",
                                fontSize: "medium"}} 
                                round
                                onClick={() => this.login()}>
                  Registre-se
                </Button>
                <Button color="primary" round onClick={() => this.login()}>Entrar</Button>
              </div>
            </Toolbar>
          </AppBar>
        }
        {this.state.showLoginWindow &&
          <Login />
        }
      </div>
    );
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Homepage);
