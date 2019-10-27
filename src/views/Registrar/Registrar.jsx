import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Info from "@material-ui/icons/InfoOutlined"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "assets/img/reactlogo.png";

class Login extends React.Component {
  state = {
    showForgetPasswordPopup: false,
    snackBarSuccess: false
  };

  closeForgetPassword() {

  }

  actionShowForgetPassword = () => {
    this.setState({ showForgetPasswordPopup: true })
  }

  handleClosePopup = () => {
    this.setState({ showForgetPasswordPopup: false })
  }

  handleSuccessNotification = () => {
    this.setState({ snackbarSuccess: true });
    this.handleClosePopup()
    this.alertTimeout = setTimeout(
      function () {
        this.setState({ snackbarSuccess: false });
      }.bind(this),
      6000
    );
  };

  handleCloseSuccessNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ snackbarSuccess: false });
  };

  render() {
    const { classes } = this.props;
    const { text } = this.state //destucture state
    return (
      <div>
        <AppBar style={{ background: '#9c27b0' }} position="static">
          <Toolbar>
            <div className={classes.logoImage + " " + classes.flex}>
              <img src={logo} alt="logo" className={classes.img} />
              Cara crachá
            </div>
          </Toolbar>
        </AppBar>
        <GridContainer noMargin>
          <GridItem xs={12} sm={12} md={4}>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="primary">
                <center>
                  <h4>BEM VINDO!</h4>
                  <p className={classes.cardCategoryWhite}>Registre-se</p>
                </center>
              </CardHeader>
              <CardBody>
                <GridContainer className={classes.flex}>
                  <GridItem xs={12} sm={12} md={2} />
                  <GridItem xs={12} sm={12} md={8}>
                    <CustomInput
                      labelText="Nome:"
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer className={classes.flex}>
                  <GridItem xs={12} sm={12} md={2} />
                  <GridItem xs={12} sm={12} md={8}>
                    <CustomInput
                      labelText="CPF/CNPJ:"
                      id="cpfcnpj"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer className={classes.flex}>
                  <GridItem xs={12} sm={12} md={2} />
                  <GridItem xs={12} sm={12} md={8}>
                    <CustomInput
                      labelText="Email:"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                {/* <GridContainer className={classes.flex}>
                  <GridItem xs={12} sm={12} md={2} />
                  <GridItem xs={12} sm={12} md={8}>
                    <CustomInput
                      labelText="Telefone:"
                      id="phone"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer> */}
              </CardBody>
              <CardFooter>
                <GridContainer style={{ flex: "1" }}>
                  <GridItem xs={12} sm={12} md={3}/>
                  <GridItem xs={12} sm={12} md={5}/>
                  <GridItem xs={12} sm={12} md={4} className={classes.rightAlign}>
                    {/* <Link to="admin/dashboard"> */}
                      <Button color="primary" onClick={this.handleSuccessNotification} round>Registrar</Button>
                    {/* </Link> */}
                  </GridItem>
                </GridContainer>
              </CardFooter>
            </Card>
          </GridItem>

          <Snackbar
            place="br"
            color="success"
            icon={Info}
            message="Registro realizado! Sua senha inicial foi enviada ao seu email!"
            open={this.state.snackbarSuccess}
            closeNotification={this.handleCloseSuccessNotification}
            close
          />
        </GridContainer>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Login);
