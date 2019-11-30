import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types"
// react plugin for creating charts
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridItem from "components/Grid/GridItem.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx"
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx"
import {InputLabel} from "@material-ui/core"
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
    const { classes } = this.props;
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
