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

class Fechaduras extends React.Component {
  state = {
  };
  

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={1}/>
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
                ["Dakota Rice", "Niger", "Oud-Turnhout", <Tooltip title="Vínculo usuário"><IconButton color="transparent"><PermIdentity/></IconButton></Tooltip>],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas","a"],
                ["Sage Rodriguez", "Netherlands", "Baileux","a"],
                ["Philip Chaney", "Korea, South", "Overland Park","a"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten","a"],
                ["Mason Porter", "Chile", "Gloucester", 'a']
              ]}
            />
          </CardBody>
        </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Fechaduras.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Fechaduras);
