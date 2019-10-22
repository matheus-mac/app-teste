import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }, 
  rightAlign:{
      textAlign: "right"
  },
  flex:{
      flex: 1
  }
};

function UserProfile(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer noMargin>
        <GridItem xs={12} sm={12} md={4}>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="primary">
                <center>
                  <h4>BEM VINDO!</h4>
                  <p className={classes.cardCategoryWhite}>Faça seu login ou registre-se</p>
                </center>
            </CardHeader>
            <CardBody>
              <GridContainer className={classes.flex}>
                <center>
              <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                </center>
              </GridContainer>
            </CardBody>
            <CardFooter>
                <GridContainer style={{flex: "1"}}>
                    <GridItem xs={12} sm={12} md={3}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                        <a href="https://www.google.com">Esqueceu sua senha?</a>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} className={classes.rightAlign}>
                        <Button color="primary" round>Login</Button>
                    </GridItem>
                </GridContainer>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  );
}

UserProfile.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(UserProfile);
