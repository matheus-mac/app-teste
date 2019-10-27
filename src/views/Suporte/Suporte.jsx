import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types"
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
import GridItem from "components/Grid/GridItem.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx"
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Navbar from "components/Navbars/Navbar.jsx";
import { bugs, website, server } from "variables/general.jsx";
import { Router, Route, Switch, Redirect, Link } from "react-router-dom"
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";
import Button from "components/CustomButtons/Button.jsx"
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx"
import { Toolbar, FormControlLabel, MenuItem, InputLabel, Avatar, IconButton, Tooltip } from "@material-ui/core"
import routes from "routes.js";
import PermIdentity from "@material-ui/icons/PermIdentity"
import PhoneLinkLock from "@material-ui/icons/PhonelinkLock"
import CustomInput from "components/CustomInput/CustomInput.jsx"
import CardAvatar from "components/Card/CardAvatar.jsx"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import TextField from '@material-ui/core/TextField';
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Info from "@material-ui/icons/InfoOutlined"

class Suporte extends React.Component {
  state = {
    support: "",
    snackBarSuccess: false
  };

  handleSupportChange = () => {

  }

  handleCloseSuccessNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ snackbarSuccess: false });
  };

  handleSuccessNotification = () => {
    this.setState({ snackbarSuccess: true });
    this.alertTimeout = setTimeout(
      function () {
        this.setState({ snackbarSuccess: false });
      }.bind(this),
      6000
    );
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={1} />
          <GridItem xs={12} sm={12} md={10}>
            <Card>
              <CardHeader color="primary">
                <h8>Contate nossa equipe:</h8>
              </CardHeader>
              <CardBody>
                <GridItem xs={12} sm={12} md={12}>
                  <div style={{ flex: "auto" }}>
                    <FormControl style={{ width: "100%" }}>
                      <InputLabel htmlFor="user">Selecione um motivo:</InputLabel>
                      <Select
                        native
                        value={this.state.support}
                        onChange={this.handleSupportChange()}
                        name="Razão:"
                        inputProps={{
                          id: 'user-selector',
                        }}
                      >
                        <option value=""></option>
                        <option value="Motivo1">Fechadura com defeito</option>
                        <option value="Motivo2">Cadastro incorreto</option>
                        <option value="Motivo3">Impossibilidade de fazer upload</option>
                        <option value="Motivo4">Falha na plataforma online</option>
                      </Select>
                    </FormControl>
                  </div>
                </GridItem>
                <GridContainer>
                  <div style={{ paddingTop: "30px", flex: "auto" }}>
                    <GridItem xs={12} sm={12} md={12}>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="vincula-usuario-field"
                        label="Descreva a situação problema:"
                        type="text"
                        fullWidth
                        multiline
                        rows="10"
                      />
                    </GridItem>
                  </div>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classes.rightAlign}>
                      <Button color="primary" onClick={this.handleSuccessNotification}>ENVIAR</Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <Snackbar
            place="br"
            color="success"
            icon={Info}
            message="Pedido de suporte enviado! Entraremos em contato, verifique seu email."
            open={this.state.snackbarSuccess}
            closeNotification={this.handleCloseSuccessNotification}
            close
          />
      </div>
    );
  }
}

Suporte.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Suporte);
