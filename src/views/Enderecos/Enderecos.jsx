import React from "react";
// nodejs library to set properties for components
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select"
import FormControl from "@material-ui/core/FormControl"
import { Toolbar, FormControlLabel, MenuItem, InputLabel } from "@material-ui/core"
// core components
import GridItem from "components/Grid/GridItem.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx"
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx"
import { IconButton, Tooltip } from "@material-ui/core"
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
import CardHeader from "components/Card/CardHeader.jsx";
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


class Enderecos extends React.Component {
  state = {
    popUpEditarEndereco: false,
    popUpConfirmarDelecao: false,
    snackbarSuccess: false,
    snackbarFail: false
  };

  handleClickOpenEditarEndereco = () => {
    this.setState({ popUpEditarEndereco: true });
  };

  handleCloseEditarEndereco = () => {
    this.setState({ popUpEditarEndereco: false });
  };

  handleClickOpenpopUpConfirmarDelecao = () => {
    this.setState({ popUpConfirmarDelecao: true });
  };

  handleClosepopUpConfirmarDelecao = () => {
    this.setState({ popUpConfirmarDelecao: false });
  };

  handleSuccessNotification = () => {
    this.setState({ snackbarSuccess: true });
    this.handleCloseEditarEndereco()
    this.handleClosepopUpConfirmarDelecao()
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

  handleUFChange = () => event => {
    this.setState({
      UF: event.target.value,
    }, () => {
    }
    )
  };

  render() {
    const { classes, ...rest } = this.props;
    const toolbar = <div>
      <Tooltip title="Editar endereço">
        <IconButton color="transparent" onClick={this.handleClickOpenEditarEndereco}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Deletar endereço">
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
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}></h4>
              {/* <p className={classes.cardCategoryWhite}>Complete seu perfil!</p> */}
            </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Id", "Cidade", "Estado", "Endereço", ""]}
                  tableData={[
                    ["1", "Belo Horizonte", "MG", "Rua Boaventura, 1435", toolbar],
                    ["2", "Divinopolis", "MG", "Rua Goiás,001", toolbar],
                  ]}
                  lastColumnRight
                />
              </CardBody>
            </Card>
          </GridItem>

          <Dialog open={this.state.popUpEditarEndereco} onClose={this.handleCloseEditarEndereco} aria-labelledby="form-dialog-title">
            <DialogTitle>Editar Endereço</DialogTitle>
            <DialogContent>
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
                  <GridItem xs={12} sm={12} md={5}>
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
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Bairro:"
                      id="neighborhood"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
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
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseEditarEndereco} color="primary">
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
            <DialogTitle id="alert-dialog-title">{"Deletar Endereço"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Esta ação não poderá ser desfeita. Caso o endereço possua alguma fechadura vinculada o mesmo não poderá ser excluído.
          </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClosepopUpConfirmarDelecao} color="primary">
                Discordo
          </Button>
              <Button onClick={this.handleSuccessNotification} color="primary" autoFocus>
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

Enderecos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Enderecos);
