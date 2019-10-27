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
import { Toolbar, FormControlLabel, MenuItem, InputLabel } from "@material-ui/core"
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


class Invasoes extends React.Component {
  state = {
    initialDate: new Date(),
    endDate: new Date()
  };

  handleUserChange = () => {

  }

  handleLockerChange = () => {

  }

  handleInitialDateChange = () => {

  }
  handleEndDateChange = () => {

  }
  render() {
    const { classes, ...rest } = this.props;
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
                  <GridItem xs={12} sm={12} md={4}>
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
                  tableHead={["Id", "Fechadura", "Data", "Horário", "Video Link"]}
                  tableData={[
                    ["1", "Quarto", "27/10/2019", "11:00:00", <a href="https://smartlock-filebucket.s3-us-west-2.amazonaws.com/1.jpg">Invasao 1</a>],
                    ["2", "Porta da frente", "25/10/2019", "10:36:05", <a href="https://smartlock-filebucket.s3-us-west-2.amazonaws.com/1.jpg">Invasao 2</a>],
                    ["3", "Quarto de hóspedes", "21/10/2019", "9:05:00", <a href="https://smartlock-filebucket.s3-us-west-2.amazonaws.com/1.jpg">Invasao 3</a>]
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

Invasoes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Invasoes);
