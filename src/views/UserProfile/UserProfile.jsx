/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
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

function updateImage() {
  var teste = "batata"
  teste = 5
}

function handleSwitchOnChange() {
  // this.setState({ cpf: !props.cpf }
  // , () => this.setState({ labeltipoDeUsuario: props.cpf ? "CPF" : "CNPJ" })
  //);
}


function UserProfile(props) {
  const { classes } = props;
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
                            <SwitchComponent onChange={handleSwitchOnChange()} checked={props.cpf} color="primary">
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
                        labelText={props.labeltipoDeUsuario + ":"}
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
                    <a onClick={updateImage()}>
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
                  <Button color="primary">Alterar senha</Button>
                  <Button color="primary">Salvar</Button>
                </div>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridContainer>
    </div>
  );
}

UserProfile.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(UserProfile);
