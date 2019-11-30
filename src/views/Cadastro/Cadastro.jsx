import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridItem from "components/Grid/GridItem.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import CustomTabs from "components/CustomTabs/CustomTabs.jsx"
import Button from "components/CustomButtons/Button.jsx"
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx"
import { Toolbar, FormControlLabel, MenuItem, InputLabel } from "@material-ui/core"
import routes from "routes.js";
import PermIdentity from "@material-ui/icons/PermIdentity"
import PhoneLinkLock from "@material-ui/icons/PhonelinkLock"
import CustomInput from "components/CustomInput/CustomInput.jsx"
import CardAvatar from "components/Card/CardAvatar.jsx"
import avatar from "assets/img/faces/userPlaceholder.jpg"
import Address from "@material-ui/icons/Home"
import AddAPhoto from "@material-ui/icons/AddAPhoto"
import SwitchComponent from "@material-ui/core/Switch"
import Select from "@material-ui/core/Select"
import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"
import { KeyboardDatePicker } from "@material-ui/pickers"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import MomentUtils from "@date-io/moment"
import moment from "moment"
import "moment/locale/pt-br"
moment.locale("pt-br")

const listaDeEstados =
  [{ key: "AC", value: "Acre" },
  { key: "AL", value: "Alagoas" },
  { key: "AP", value: "Amapá" },
  { key: "AM", value: "Amazonas" },
  { key: "BA", value: "Bahia" },
  { key: "CE", value: "Ceará" },
  { key: "DF", value: "Distrito Federal" },
  { key: "ES", value: "Espírito Santo" },
  { key: "GO", value: "Goiás" },
  { key: "MA", value: "Maranhão" },
  { key: "MT", value: "Mato Grosso" },
  { key: "MS", value: "Mato Grosso do Sul" },
  { key: "MG", value: "Minas Gerais" },
  { key: "PA", value: "Pará" },
  { key: "PB", value: "Paraíba" },
  { key: "PR", value: "Paraná" },
  { key: "PE", value: "Pernambuco" },
  { key: "PI", value: "Piauí" },
  { key: "RJ", value: "Rio de Janeiro" },
  { key: "RN", value: "Rio Grande do Norte" },
  { key: "RS", value: "Rio Grande do Sul" },
  { key: "RO", value: "Rondônia" },
  { key: "RR", value: "Roraima" },
  { key: "SC", value: "Santa Catarina" },
  { key: "SP", value: "São Paulo" },
  { key: "SE", value: "Sergipe" },
  { key: "TO", value: "Tocantins" }]



class Homepage extends React.Component {
  state = {
    value: 0,
    text: "Next",
    persons: {},
    cpf: true,
    labeltipoDeUsuario: "CPF",
    UF: '',
    activationDate: new Date(),
    lockAddress: ''
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
  handleSwitchOnChange = () => {
    this.setState({ cpf: !this.state.cpf }
      , () => this.setState({ labeltipoDeUsuario: this.state.cpf ? "CPF" : "CNPJ" })
    );
  }

  handleUFChange = () => event => {
    this.setState({
      UF: event.target.value,
    }, () => {
    }
    )
  };

  handleAddressChange = () => event => {
    this.setState({
      lockAddress: event.target.value,
    }, () => {
    }
    )
  };

  handleDateChange = () => event => {
    this.setState({ activationDate: event._d })
  }
  render() {
    const { classes } = this.props;
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
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="Usuário:"
                            id="user"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={5}>
                          <CustomInput
                            labelText="Email:"
                            id="emailAddress"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <div style={{ paddingTop: '36px' }}>
                            CNPJ
                          <FormControlLabel style={{ paddingLeft: '36px' }}
                              control={
                                <SwitchComponent onChange={this.handleSwitchOnChange} checked={this.state.cpf} color="primary">
                                </SwitchComponent>
                              }
                            // label={this.state.labeltipoDeUsuario}
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
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <div style={{ paddingTop: '36px' }} className={classes.rightAlign}>
                            <Button color="primary">Cadastrar</Button>
                          </div>
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
                        <GridItem xs={12} sm={12} md={4}>
                          <div style={{ paddingTop: '27px' }}>
                            <FormControl style={{width: "100%"}}>
                              <InputLabel htmlFor="state-selector">Estado:</InputLabel>
                              <Select
                                native
                                value={this.state.UF}
                                onChange={this.handleUFChange()}
                                name="Estado:"
                                inputProps={{
                                  id: 'state-selector',
                                }}
                              > <option value="" />
                                {listaDeEstados.map((item, i) =>
                                  <option value={item.key}>{item.value} </option>
                                )}
                              </Select>
                            </FormControl>
                          </div>
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
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <div style={{ paddingTop: '36px' }} className={classes.rightAlign}>
                            <Button color="primary">Cadastrar</Button>
                          </div>
                        </GridItem>
                      </GridContainer>
                    </div>
                  )
                },
                {
                  tabName: "Fechaduras",
                  tabIcon: PhoneLinkLock,
                  tabContent: (
                    <div>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="Endereço MAC:"
                            id="macAddress"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <CustomInput
                            labelText="Versão:"
                            id="versao"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <div style={{ paddingTop: "11px" }}>
                            <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment} locale={moment.locale("pt-br")}>
                              <KeyboardDatePicker
                                locale="pt-br"
                                margin="normal"
                                id="date-picker-dialog"
                                label="Data de ativação:"
                                format="DD/MM/YYYY"
                                value={this.state.activationDate}
                                onChange={this.handleDateChange()}
                                KeyboardButtonProps={{
                                  'aria-label': 'change date',
                                }}
                              />
                            </MuiPickersUtilsProvider>
                          </div>
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="Identificador da fechadura:"
                            id="lockIdentifier"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                          <FormHelperText>Esse será o nome da fechadura, selecione nomes intuitivos como:
                            Porta da frente
                          </FormHelperText>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <div style={{ paddingTop: '27px', display:"flex" }}>
                            <FormControl style={{width: "100%"}}>
                              <InputLabel htmlFor="address">Endereço:</InputLabel>
                              <Select
                                native
                                value={this.state.lockAddress}
                                onChange={this.handleAddressChange()}
                                name="Endereço:"
                                inputProps={{
                                  id: 'address-selector',
                                }}
                              >
                                <option value=""></option>
                                <option value="endereço1">Endereço 1</option>
                                <option value="endereço2">Endereço 2</option>
                                <option value="endereço3">Endereço 3</option>
                                <option value="endereço4">Endereço 4</option>
                              </Select>
                            </FormControl>
                          </div>
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <div className={classes.rightAlign}>
                            <Button color="primary">Cadastrar</Button>
                          </div>
                        </GridItem>
                      </GridContainer>
                    </div>
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
