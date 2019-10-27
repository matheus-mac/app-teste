import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx"

class Invasoes extends React.Component {
  state = {
  };
  

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <GridContainer>
        </GridContainer>
      </div>
    );
  }
}

Invasoes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Invasoes);
