import React from "react";

import Axios from "axios";
// Promise based HTTP client for the browser and node.js

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TableList from '../Lists/tableList';
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import listsStyle from "assets/jss/material-dashboard-react/components/listsStyle.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

const local_host = "https://localhost:44358"
const production_host = "https://52.54.145.159:443"
const developing = false
const actualHost = developing ? local_host : production_host


class ApiTester extends React.Component {
  state = {
    userId: '',
    userName: '',
    passWord: '',
    persons: []
  };

  formatToFitOnTableList = () => {
    var array = [];
    array = array.concat(this.state.persons);
    var returnArray = [];
    array.map(item => {
      returnArray.push({name: item.id +"-" + item.username});
    }
    )
    this.setState({ persons: returnArray })
  }

  getAllUsers = () => {
    Axios.get(actualHost + `/api/UsersResource`)
      .then(res => {
        this.setState({ persons: res.data }, () => {
          this.formatToFitOnTableList();
        })
      })
  }

  getUserById = () => {
    Axios.get(actualHost + `/api/UsersResource`, {
      params: {
        id: this.state.userId
      }
    }).then(res => {
      this.setState({ persons: res.data }, () => {
        this.formatToFitOnTableList();
      })
    })
  }

  modifyUserById = () => {
    Axios.put(actualHost + `/api/UsersResource/` + this.state.userId,
      {
        id: this.state.userId,
        username: this.state.userName,
        password: this.state.passWord
      }
    )
  }

  addUser = () => {
    var teste = this.state.userId;
    var asai = "sfd";
    Axios.post(actualHost + `/api/UsersResource`,
      {
        username: this.state.userName,
        password: this.state.passWord
      }
    )
  }

  deleteUserById = () => {
    Axios.delete(actualHost + `/api/UsersResource/`, {
      params: {
        id: this.state.userId
      }
    })
  }

  handleOnChangeID = (event) =>{
    this.setState({userId: event.target.value})
  }
  handleOnChangeName = (event) =>{
    this.setState({userName: event.target.value})
  }
  handleOnChangePassword = (event) =>{
    this.setState({passWord: event.target.value})
  }

  render() {
    const { classes, rtlActive } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="success">
                <h4 className={classes.cardTitleWhite}>Testar API</h4>
              </CardHeader>
              <CardBody>
                <Table className={classes.table}>
                  <TableBody>
                    <TableRow>
                      <TableCell padding='none'>
                        (GET)api/UsersResource
                    </TableCell>
                      <TableCell>
                        Retorna todos os usuários cadastrados
                    </TableCell>
                      <TableCell>
                        <Button color="primary" onClick={() => this.getAllUsers()}>Teste</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell padding='none'>
                        (GET)api/UsersResource/(id)
                    </TableCell>
                      <TableCell>
                        Retorna o usuário do ID passado
                    </TableCell>
                      <TableCell>
                        <Button color="primary" onClick={() => this.getUserById()}>Teste</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell padding='none'>
                        (PUT)api/UsersResource/(id)
                    </TableCell>
                      <TableCell>
                        Modifica o usuário do ID inserido
                    </TableCell>
                      <TableCell>
                        <Button color="primary" onClick={() => this.modifyUserById(5, "Teste", "Teste")}>Teste</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell padding='none'>
                        (POST)api/UsersResource
                    </TableCell>
                      <TableCell>
                        Adiciona novo usuário
                    </TableCell>
                      <TableCell>
                        <Button color="primary" onClick={() => this.addUser("Batata", "Batata")}>Teste</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell padding='none'>
                        (DELETE)api/UsersResource/(id)
                    </TableCell>
                      <TableCell>
                        Deleta o usuário do ID inserido
                    </TableCell>
                      <TableCell>
                        <Button color="primary" onClick={() => this.deleteUserById(8)}>Teste</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="success">
                <h4 className={classes.cardTitleWhite}>Fields</h4>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText="ID"
                  id="id"
                  inputProps={{
                    onChange: this.handleOnChangeID,
                    value: this.state.userId
                  }}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
                <CustomInput
                  labelText="Username"
                  id="username"
                  inputProps={{
                    onChange: this.handleOnChangeName,
                    value: this.state.userName
                  }}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
                <CustomInput
                  labelText="Password"
                  id="password"
                  inputProps={{
                    onChange: this.handleOnChangePassword,
                    value: this.state.passWord
                  }}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem>
            <TableList
              items={this.state.persons}>
            </TableList>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(listsStyle)(ApiTester);
