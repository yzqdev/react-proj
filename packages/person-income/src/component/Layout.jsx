import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Paper, Tabs, Tab } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import CalYearTax from "../container/CalYearTaxContainer";
import YearEndBonus from "../container/YearEndBonusContainer";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(6))]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
});

class Layout extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    matchesDownSm: PropTypes.bool.isRequired,
  };

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme, matchesDownSm } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant={matchesDownSm ? "fullWidth" : "standard"}
          >
            <Tab label="年度个税" />
            <Tab label="年终奖" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <main className={classes.layout}>
            <Paper className={classes.paper} elevation={2}>
              <CalYearTax />
            </Paper>
          </main>
          <main className={classes.layout}>
            <Paper className={classes.paper} elevation={2}>
              <YearEndBonus />
            </Paper>
          </main>
        </SwipeableViews>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Layout);
