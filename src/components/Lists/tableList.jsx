import React from "react";
import classnames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import View from "@material-ui/icons/Visibility"
import Close from "@material-ui/icons/Close";
// core components
import listsStyle from "assets/jss/material-dashboard-react/components/listsStyle.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";


class TableList extends React.Component {
  state = {

  };

  handleDelete = (fileName) => {
    this.props.deleteAction(fileName);
  }

  handleView = (fileName) => {
    this.props.viewAction(fileName)
  }

  render() {
    var items = [];
    items = this.props.items;
    const { classes, rtlActive } = this.props;
    const tableCellClasses = classnames(classes.tableCell, {
      [classes.tableCellRTL]: rtlActive
    });
    return (
      <Card>
        <CardHeader color="success">
          <h4 className={classes.cardTitleWhite}>{this.props.title}</h4>
        </CardHeader>
        <CardBody>
          <Table className={classes.table}>
            <TableBody>
              {items && items.length > 0 && items.map((item, i) => (
                <TableRow key={i} className={classes.tableRow}>
                  <TableCell className={tableCellClasses}>{item.name}</TableCell>
                  <TableCell className={classes.tableActions}>
                    {this.props.showViewButton &&
                      <Tooltip
                        id="tooltip-top"
                        title="Visualizar"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <IconButton onClick={() => this.handleView(item.name)}
                          aria-label="Edit"
                          className={classes.tableActionButton}
                        >
                          <View
                            className={
                              classes.tableActionButtonIcon + " " + classes.view
                            }
                          />
                        </IconButton>
                      </Tooltip>
                    }
                    {this.props.showEditButton &&
                      <Tooltip
                        id="tooltip-top-start"
                        title="Editar"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <IconButton onClick={() => this.handleDelete(item.name)}
                          aria-label="Close"
                          className={classes.tableActionButton}
                        >
                          <Edit
                            className={
                              classes.tableActionButtonIcon + " " + classes.edit
                            }
                          />
                        </IconButton>
                      </Tooltip>
                    }
                    {this.props.showDeleteButton &&
                      <Tooltip
                        id="tooltip-top-start"
                        title="Excluir"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <IconButton onClick={() => this.handleDelete(item.name)}
                          aria-label="Close"
                          className={classes.tableActionButton}
                        >
                          <Close
                            className={
                              classes.tableActionButtonIcon + " " + classes.close
                            }
                          />
                        </IconButton>
                      </Tooltip>
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(listsStyle)(TableList);
