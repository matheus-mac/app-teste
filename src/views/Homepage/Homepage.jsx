import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "components/CustomButtons/Button.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { Toolbar } from "@material-ui/core";
import Login from "views/Login/Login.jsx"
import Registrar from "views/Registrar/Registrar.jsx"
import logo from "assets/img/reactlogo.png";
import AppBar from '@material-ui/core/AppBar';

class Homepage extends React.Component {
  state = {
    value: 0,
    text: "Next",
    persons: {},
    showRegisterWindow: false,
    showLoginWindow: false
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

  register = () =>{
    this.setState({ showRegisterWindow: true })
  }

  closeForgetPassword = () => {

  }

  showForgetPasswordPopup = () => {
    this.setState({ showForgetPasswordPopup: true })
  }
  test = () =>{
    this.props.history.push('admin/dashboard')
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{ margin: "0px !important" }}>
        {!this.state.showLoginWindow && !this.state.showRegisterWindow  &&
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
                                onClick={() => this.register()}>
                  Registre-se
                </Button>
                <Button color="primary" round onClick={() => this.login()}>Entrar</Button>
              </div>
            </Toolbar>
            <Button onClick={this.test}>batata</Button>
          </AppBar>
        }
        {this.state.showLoginWindow &&
          <Login redirectProp={this.test}/>
        }
        {this.state.showRegisterWindow &&
          <Registrar />
        }
      </div>
    );
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Homepage);
