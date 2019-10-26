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


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }, 
  rightAlign:{
      textAlign: "right"
  },
  flex:{
      flex: 1
  }
};

function Login(props) {
  const { classes } = props;
  const popupEsqueciMinhaSenha = false
  return (
    <div>
      <GridContainer noMargin>
        <GridItem xs={12} sm={12} md={4}>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="primary">
                <center>
                  <h4>BEM VINDO!</h4>
                  <p className={classes.cardCategoryWhite}>Faça seu login ou registre-se</p>
                </center>
            </CardHeader>
            <CardBody>
              <GridContainer className={classes.flex}>
              <GridItem xs={12} sm={12} md={2}/>
              <GridItem xs={12} sm={12} md={8}>
                  <CustomInput
                    labelText="Email ou CPF/CNPJ:"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer className={classes.flex}>
              <GridItem xs={12} sm={12} md={2}/>
              <GridItem xs={12} sm={12} md={8}>
                  <CustomInput
                    labelText="Senha"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
                <GridContainer style={{flex: "1"}}>
                    <GridItem xs={12} sm={12} md={3}></GridItem>
                    <GridItem xs={12} sm={12} md={5}  style={{marginTop:"14px"}}>
                        <div>
                          <a href="https://www.google.com">Esqueceu sua senha?</a>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.rightAlign}>
                        <Link to="admin/dashboard">
                        <Button color="primary" round>Login</Button>
                        </Link>
                    </GridItem>
                </GridContainer>
            </CardFooter>
          </Card>
        </GridItem>
        {/* <Dialog open={popupEsqueciMinhaSenha} onClose={this.handleCloseVincularUsuario} aria-labelledby="form-dialog-title">
            <DialogTitle>Vincular Usuário</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Insira o email ou CPF/CNPJ do usuário para vincular:
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="vincula-usuario-field"
                // label="Email Address"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseVincularUsuario} color="primary">
                Cancelar
              </Button>
              <Button onClick={this.handleSuccessNotification} color="primary">
                Vincular
              </Button>
            </DialogActions>
          </Dialog> */}
      </GridContainer>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Login);
