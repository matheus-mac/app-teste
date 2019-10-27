import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select"
import FormControl from "@material-ui/core/FormControl"
// core components
import GridItem from "components/Grid/GridItem.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx"
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx"
import { IconButton, Tooltip } from "@material-ui/core"
import { Toolbar, FormControlLabel, MenuItem, InputLabel } from "@material-ui/core"
import Person from "@material-ui/icons/Person"
import PersonAdd from "@material-ui/icons/PersonAdd"
import Edit from "@material-ui/icons/Edit"
import Delete from "@material-ui/icons/Delete"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import CustomInput from "components/CustomInput/CustomInput.jsx"
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Info from "@material-ui/icons/InfoOutlined"
import Close from "@material-ui/icons/Close"
import { KeyboardDatePicker } from "@material-ui/pickers"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import FormHelperText from "@material-ui/core/FormHelperText"
import MomentUtils from "@date-io/moment"
import moment from "moment"
import "moment/locale/pt-br"
moment.locale("pt-br")


class Fechaduras extends React.Component {
  state = {
    popUpVincularUsuario: false,
    popUpDesvincularUsuario: false,
    popUpEditarFechadura: false,
    popUpConfirmarDelecao: false,
    snackbarSuccess: false,
    snackbarFail: false,
    activationDate: new Date()
  };

  handleClickOpenVincularUsuario = () => {
    this.setState({ popUpVincularUsuario: true });
  };

  handleCloseVincularUsuario = () => {
    this.setState({ popUpVincularUsuario: false });
  };

  handleClickOpenDesvincularUsuario = () => {
    this.setState({ popUpDesvincularUsuario: true });
  };

  handleCloseDesvincularUsuario = () => {
    this.setState({ popUpDesvincularUsuario: false });
  };

  handleClickOpenEditarFechadura = () => {
    this.setState({ popUpEditarFechadura: true });
  };

  handleCloseEditarFechadura = () => {
    this.setState({ popUpEditarFechadura: false });
  };

  handleClickOpenpopUpConfirmarDelecao = () => {
    this.setState({ popUpConfirmarDelecao: true });
  };

  handleClosepopUpConfirmarDelecao = () => {
    this.setState({ popUpConfirmarDelecao: false });
  };

  handleSuccessNotification = () => {
    this.setState({ snackbarSuccess: true });
    this.handleCloseVincularUsuario()
    this.handleCloseDesvincularUsuario()
    this.handleCloseEditarFechadura()
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

  handleFailNotification = () => {
    this.setState({ snackbarFail: true });
    this.handleCloseVincularUsuario()
    this.alertTimeout = setTimeout(
      function () {
        this.setState({ snackbarFail: false });
      }.bind(this),
      6000
    );
  };

  handleCloseFailNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ snackbarFail: false });
  };

  handleDateChange = () => event => {
    this.setState({ activationDate: event._d })
  }

  handleAddressChange = () => event => {
    this.setState({
      lockAddress: event.target.value,
    }, () => {
    }
    )
  };

  render() {
    const { classes, ...rest } = this.props;
    const toolbar = <div>
      <Tooltip title="Vincular usuário">
        <IconButton color="transparent" onClick={this.handleClickOpenVincularUsuario}>
          <PersonAdd />
        </IconButton>
      </Tooltip>
      <Tooltip title="Editar vínculos usuário">
        <IconButton color="transparent" onClick={this.handleClickOpenDesvincularUsuario}>
          <Person />
        </IconButton>
      </Tooltip>
      <Tooltip title="Editar fechadura">
        <IconButton color="transparent" onClick={this.handleClickOpenEditarFechadura}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Deletar fechadura">
        <IconButton color="transparent" onClick={this.handleClickOpenpopUpConfirmarDelecao}>
          <Delete />
        </IconButton>
      </Tooltip>
    </div>;

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={1} />
          <GridItem xs={12} sm={6} md={10}>
            <Card>
              {/* <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Abaixo estão todas as fechaduras:</h4>
            <p className={classes.cardCategoryWhite}>
              Abaixo estão todas as fechaduras:
            </p>
          </CardHeader> */}
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Número Serial", "Identificador Fechadura", "Versão", ""]}
                  tableData={[
                    ["Dakota Rice", "Niger", "Oud-Turnhout", toolbar],
                    ["Minerva Hooper", "Curaçao", "Sinaai-Waas", toolbar],
                    ["Sage Rodriguez", "Netherlands", "Baileux", toolbar]
                  ]}
                  lastColumnRight
                />
              </CardBody>
            </Card>
          </GridItem>
          <Dialog open={this.state.popUpVincularUsuario} onClose={this.handleCloseVincularUsuario} aria-labelledby="form-dialog-title">
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
          </Dialog>

          <Dialog open={this.state.popUpDesvincularUsuario} onClose={this.handleCloseDesvincularUsuario} aria-labelledby="form-dialog-title">
            <DialogTitle>Desvincular Usuário</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Desvincule os usuários (a ação não pode ser desfeita)
              </DialogContentText>
              {/*<TextField
                autoFocus
                margin="dense"
                id="vincula-usuario-field"
                // label="Email Address"
                type="email"
                fullWidth
              /> */}
              <Table
                // tableHeaderColor="primary"
                // tableHead={["Usuário", ""]}
                tableData={[
                  ["Dakota Rice", <IconButton><Close /></IconButton>],
                  ["Minerva Hooper", <IconButton><Close /></IconButton>],
                  ["Sage Rodriguez", <IconButton><Close /></IconButton>]
                ]}
                lastColumnRight
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseDesvincularUsuario} color="primary">
                Cancelar
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog open={this.state.popUpEditarFechadura} onClose={this.handleCloseEditarFechadura} aria-labelledby="form-dialog-title">
            <DialogTitle>Editar Fechadura</DialogTitle>
            <DialogContent>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Endereço MAC:"
                    id="macAddress"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Versão:"
                    id="versao"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
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
                <GridItem xs={12} sm={12} md={12}>
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
                  <div style={{ paddingTop: '27px', display: "flex" }}>
                    <FormControl>
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
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseEditarFechadura} color="primary">
                Cancelar
              </Button>
              <Button onClick={this.handleSuccessNotification} color="primary">
                Salvar
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.popUpConfirmarDelecao}
            onClose={this.handleClosepopUpConfirmarDelecao}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Deletar Fechadura"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Esta ação não poderá ser desfeita. Todo o registro relativo à mesma será apagado.
          </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClosepopUpConfirmarDelecao} color="primary">
                Discordo
          </Button>
              <Button onClick={this.handleClosepopUpConfirmarDelecao} color="primary" autoFocus>
                Concordo
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
          <Snackbar
            place="br"
            color="danger"
            icon={Info}
            message="Falha na operação."
            open={this.state.snackbarFail}
            closeNotification={this.handleCloseFailNotification}
            close
          />

        </GridContainer>
      </div>
    );
  }
}

Fechaduras.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Fechaduras);
