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
import { Toolbar, FormControlLabel, MenuItem } from "@material-ui/core";
import routes from "routes.js";
import PermIdentity from "@material-ui/icons/PermIdentity"
import PhoneLinkLock from "@material-ui/icons/PhonelinkLock"
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import avatar from "assets/img/faces/userPlaceholder.jpg";
import Address from "@material-ui/icons/Home"
import AddAPhoto from "@material-ui/icons/AddAPhoto"
import SwitchComponent from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select"
const listaDeEstados = ["AC","AL","AP","AM","BA","CE","DF", "ES", "GO",    "MA",    "MS",    "MT",    "MG",    "PA",
"PB",    "PR",    "PE",    "PI",    "RJ",    "RN",    "RS",    "RO",    "RR",    "SC",    "SP",    "SE",    "TO"]

class Homepage extends React.Component {
  state = {
    value: 0,
    text: "Next",
    persons: {},
    cpf: true,
    labeltipoDeUsuario: "CPF",
    UF : "MG"
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  updateImage = () => {
    var teste = "batata"
    teste = 5
  }
  handleSwitchOnChange = () =>{
    this.setState({ cpf : !this.state.cpf}
      , () => this.setState({labeltipoDeUsuario: this.state.cpf ? "CPF" : "CNPJ"})  
      );
  }

  handleUFChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  };
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomTabs
              headerColor="primary"
              tabs={[
                {
                  tabName: "Usuários",
                  tabIcon: PermIdentity,
                  tabContent: (
                    <div>
                      <GridContainer>
                        <CardAvatar profile>
                          <a onClick={this.updateImage()}>
                            <img src={avatar} alt="..." />
                          </a>
                        </CardAvatar>
                      </GridContainer>
                      <GridContainer>
                        <Button center round color="info">
                          <AddAPhoto></AddAPhoto>
                          Editar
                        </Button>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
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
                        <div style={{paddingTop: '36px'}}>
                          <GridItem xs={12} sm={12} md={2}>
                            <FormControlLabel
                              control ={
                              <SwitchComponent onChange={this.handleSwitchOnChange} checked={this.state.cpf} color="primary">
                              </SwitchComponent>
                              }
                              label={this.state.labeltipoDeUsuario}
                              >
                            </FormControlLabel>

                          </GridItem>
                        </div>
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
                  )
                },
                {
                  tabName: "Endereços",
                  tabIcon: Address,
                  tabContent: (
                    <div>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="CEP:"
                            id="cep"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="Cidade:"
                            id="city"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <Select value = {this.state.UF} onChange={this.handleUFChange('UF')}> 
                            {listaDeEstados.map((item, i) =>
                              // console.log(item.value)
                             <MenuItem value={item}>{item} </MenuItem>
                            )}
                          </Select>
                        </GridItem>
                        </GridContainer>
                        <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="Rua:"
                            id="street"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <CustomInput
                            labelText="Número:"
                            id="number"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="Bairro:"
                            id="neighborhood"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <CustomInput
                            labelText="Complemento:"
                            id="complement"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                      </GridContainer>
                  </div>
                  )
                },
                {
                  tabName: "Fechaduras",
                  tabIcon: PhoneLinkLock,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  )
                }
              ]}
            />
          </GridItem>
          </GridContainer>

      </div>
    );
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Homepage);
