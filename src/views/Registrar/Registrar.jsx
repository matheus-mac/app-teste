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
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Info from "@material-ui/icons/InfoOutlined"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from "assets/img/reactlogo.png";
import Axios from "axios";
import { thisExpression } from "@babel/types";
const actualHost = "https://52.54.145.159:443"


class Registrar extends React.Component {
  state = {
    showForgetPasswordPopup: false,
    snackBarSuccess: false,
    snackBarFail: false,
    nome: "",
    CPFCNPJ:"",
    email: "",
    snackMessage:""
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

  handleFailNotification = (snackMessage) => {
    this.setState({ snackBarFail: true });
    this.setState({snackMessage: snackMessage});
    this.alertTimeout = setTimeout(
      function () {
        this.setState({ snackBarFail: false });
      }.bind(this),
      6000
    );
  };

  handleCloseFailNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ snackBarFail: false });
  };


  handleNameChange = (event) =>{
    this.setState({nome: event.target.value})
  }

  handleCPFCNPJChange = (event) =>{
    this.setState({CPFCNPJ: event.target.value})
  }

  handleEmailChange = (event) =>{
    this.setState({email: event.target.value})
  }

  handleRegisterClick = () =>{
    if (this.state.nome === ""|| this.state.CPFCNPJ ==="" || this.state.email===""){
      this.handleFailNotification("Todos os campos são obrigatórios")
    }
    else{
      Axios.post(actualHost + `/api/Usuarios/RegistrarUsuario`,
        {
          nome: this.state.nome,
          cpfcnpj: this.state.CPFCNPJ,
          email: this.state.email
        }
      ).then(res=>{
        this.handleSuccessNotification()
      })
      .catch(res=> {
        this.handleFailNotification("Um erro ocorreu. Entre em contato com o suporte")
      })
    }
  }

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
                        fullWidth: true,
                        onChange: this.handleNameChange
                      }}
                      inputProps={{
                        type: "text"
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
                        fullWidth: true,
                        onChange: this.handleCPFCNPJChange
                      }}
                      inputProps={{
                        type: "number"
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
                        fullWidth: true,
                        onChange: this.handleEmailChange,
                      }}
                      inputProps={{
                        type: "email"
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
                      <Button color="primary" onClick={this.handleRegisterClick} round>Registrar</Button>
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
            message="Registro realizado! Sua primeira senha foi enviada ao seu email!"
            open={this.state.snackbarSuccess}
            closeNotification={this.handleCloseSuccessNotification}
            close
          />

          <Snackbar
            place="br"
            color="danger"
            icon={Info}
            message={this.state.snackMessage}
            open={this.state.snackBarFail}
            closeNotification={this.handleCloseFailNotification}
            close
          />
        </GridContainer>
      </div>
    );
  }
}

Registrar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Registrar);
