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
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import AddAPhoto from "@material-ui/icons/AddAPhoto"
import avatar from "assets/img/faces/userPlaceholder.jpg"
import { FormControlLabel } from "@material-ui/core"
import SwitchComponent from "@material-ui/core/Switch"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Info from "@material-ui/icons/InfoOutlined"

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
  rightAlign: {
    textAlign: "right"
  }
};

class UserProfile extends React.Component {
  state = {
    cpf: true,
    labeltipoDeUsuario:"CPF",
    showAlterPasswordPopup:false,
    snackbarSuccess: false
  }
  
  updateImage = () => {
    var teste = "batata"
    teste = 5
  }
  
  handleSwitchOnChange = () => {
    this.setState({ cpf: !this.state.cpf }
      , () => this.setState({ labeltipoDeUsuario: this.state.cpf ? "CPF" : "CNPJ" })
    );
  }

  actionShowAlterPasswordPopup = () =>{
    this.setState({showAlterPasswordPopup: true});
  }

  actionCloseAlterPasswordPopup = () =>{
    this.setState({showAlterPasswordPopup: false});
  }

  handleSuccessNotification = () => {
    this.setState({ snackbarSuccess: true });
    this.actionCloseAlterPasswordPopup()
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
    return (
      <div>
        <GridContainer>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}></h4>
              {/* <p className={classes.cardCategoryWhite}>Complete seu perfil!</p> */}
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                  <div>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={1}>
                        <CustomInput
                          labelText="Id:"
                          id="id"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            disabled: true
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <CustomInput
                          labelText="Usuário:"
                          id="user"
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          labelText="Email:"
                          id="emailAddress"
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <div style={{ paddingTop: '36px' }}>
                          CNPJ
                          <FormControlLabel style={{ paddingLeft: '36px' }}
                            control={
                              <SwitchComponent onChange={this.handleSwitchOnChange} checked={this.state.cpf} color="primary">
                              </SwitchComponent>
                            }
                          // label={props.labeltipoDeUsuario}
                          >
                          </FormControlLabel>
                          CPF
                          </div>
                      </GridItem>

                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          labelText="RFID UUID:"
                          id="rfidTag"
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          labelText="Telefone:"
                          id="phoneNumber"
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          labelText={this.state.labeltipoDeUsuario + ":"}
                          id="cpfCNPJ"
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={4} >
                  <GridContainer>
                    <CardAvatar profile>
                      <a onClick={this.updateImage()}>
                        <img src={avatar} alt="..." />
                      </a>
                    </CardAvatar>
                  </GridContainer>
                  <GridContainer>
                    <Button center round color="info">
                      <AddAPhoto />
                      Editar
                </Button>
                  </GridContainer>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <div style={{ paddingTop: '36px' }} className={classes.rightAlign}>
                    <Button color="primary" onClick={this.actionShowAlterPasswordPopup}>Alterar senha</Button>
                    <Button color="primary">Salvar</Button>
                  </div>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>

          <Dialog open={this.state.showAlterPasswordPopup} onClose={this.closeForgetPassword} aria-labelledby="form-dialog-title">
            <DialogTitle>Alterar senha</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Insira sua senha antiga e confirme a nova:
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="oldPassword"
                label="Senha atual:"
                type="password"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="newPassword"
                label="Nova senha:"
                type="password"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="confirmationPassword"
                label="Confirme a senha:"
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.actionCloseAlterPasswordPopup} color="primary">
                Cancelar
              </Button>
              <Button onClick={this.handleSuccessNotification} color="primary">
                Enviar
              </Button>
            </DialogActions>
          </Dialog>

          <Snackbar
            place="br"
            color="success"
            icon={Info}
            message="Operação realizada!"
            open={this.state.snackbarSuccess}
            closeNotification={this.handleCloseSuccessNotification}
            close
          />

        </GridContainer>
      </div>
    );
  }
}
UserProfile.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(UserProfile);
