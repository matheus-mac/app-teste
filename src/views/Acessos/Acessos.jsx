import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx"
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Select from "@material-ui/core/Select"
import FormControl from "@material-ui/core/FormControl"
import { Toolbar, FormControlLabel, MenuItem, InputLabel, CardHeader } from "@material-ui/core"
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody";

class Acessos extends React.Component {
  state = {
  };

  handleUserChange = () => {

  }

  render() {
    const { classes} = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={1} />
          <GridItem xs={12} sm={12} md={10}>
            <Card>
            <CardHeader color="primary">
                <center>
                  <h4>BEM VINDO!</h4>
                  <p className={classes.cardCategoryWhite}>Faça seu login ou registre-se</p>
                </center>
              </CardHeader>
              <CardBody>
                <GridItem>

                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <div style={{ paddingTop: '27px', display: "flex" }}>
                    <FormControl>
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
                        <option value="Usuário 1">Endereço 1</option>
                        <option value="Usuário 2">Endereço 2</option>
                        <option value="Usuário 3">Endereço 3</option>
                        <option value="Usuário 4">Endereço 4</option>
                      </Select>
                    </FormControl>
                  </div>
                </GridItem>
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
