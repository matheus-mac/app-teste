import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Select from "@material-ui/core/Select"
import FormControl from "@material-ui/core/FormControl"
import {InputLabel } from "@material-ui/core"
import Card from "components/Card/Card.jsx";
import Table from "components/Table/Table.jsx";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader.jsx";
import { KeyboardDatePicker } from "@material-ui/pickers"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import MomentUtils from "@date-io/moment"
import moment from "moment"
import "moment/locale/pt-br"
moment.locale("pt-br")

class Acessos extends React.Component {
  state = {
    initialDate: new Date(),
    endDate: new Date()
  };

  handleUserChange = () => {

  }

  handleLockerChange = () => {

  }

  handleInitialDateChange = () =>{
    
  }
  handleEndDateChange = () =>{
    
  }

  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={1} />
          <GridItem xs={12} sm={12} md={10}>
            <Card>
              <CardHeader color="primary">
                <h8>Filtros disponíveis:</h8>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={2}>
                    <div style={{ paddingTop: "16px" }}>
                      <FormControl style={{width: "100%"}}>
                        <InputLabel htmlFor="user">Usuário:</InputLabel>
                        <Select
                          native
                          value={this.state.user}
                          onChange={this.handleUserChange()}
                          name="Usuário:"
                          inputProps={{
                            id: 'user-selector',
                          }}
                        >
                          <option value=""></option>
                          <option value="Usuário 1">Usuário 1</option>
                          <option value="Usuário 2">Usuário 2</option>
                          <option value="Usuário 3">Usuário 3</option>
                          <option value="Usuário 4">Usuário 4</option>
                        </Select>
                      </FormControl>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                    <div style={{ paddingTop: "16px" }}>
                      <FormControl style={{width: "100%"}}>
                        <InputLabel htmlFor="user">Fechadura:</InputLabel>
                        <Select
                          native
                          value={this.state.locker}
                          onChange={this.handleLockerChange()}
                          name="Fechadura:"
                          inputProps={{
                            id: 'locker-selector',
                          }}
                        >
                          <option value=""></option>
                          <option value="Fechadura 1">Fechadura 1</option>
                          <option value="Fechadura 2">Fechadura 2</option>
                          <option value="Fechadura 3">Fechadura 3</option>
                          <option value="Fechadura 4">Fechadura 4</option>
                        </Select>
                      </FormControl>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                      <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment} locale={moment.locale("pt-br")}>
                        <KeyboardDatePicker
                          locale="pt-br"
                          margin="normal"
                          id="date-picker-dialog"
                          label="Data de início:"
                          format="DD/MM/YYYY"
                          value={this.state.initialDate}
                          onChange={this.handleInitialDateChange()}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                      </MuiPickersUtilsProvider>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                      <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment} locale={moment.locale("pt-br")}>
                        <KeyboardDatePicker
                          locale="pt-br"
                          margin="normal"
                          id="date-picker-dialog"
                          label="Data de fim:"
                          format="DD/MM/YYYY"
                          value={this.state.endDate}
                          onChange={this.handleEndDateChange()}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                      </MuiPickersUtilsProvider>
                  </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <div style={{ paddingTop: "16px" }}>
                  <Button color="primary">Filtrar</Button>
                  </div>
                </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
              <Table
                  tableHeaderColor="primary"
                  tableHead={["Id","Fechadura", "Usuário", "Data", "Horário"]}
                  tableData={[
                    ["1","Quarto", "Matheus", "27/10/2019", "11:00:00"],
                    ["2","Porta da frente", "Marcus Vinícius", "25/10/2019", "10:36:05"],
                    ["3","Quarto de hóspedes", "Rejane", "21/10/2019", "9:05:00"]
                  ]}
                />                
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div >
    );
  }
}

Acessos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Acessos);
