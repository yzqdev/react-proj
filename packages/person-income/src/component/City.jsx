import React, { Component } from "react";
import PropTypes from "prop-types";
import { Paper, Button, Typography, Grid } from "@material-ui/core";
import { Place } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { CITYS, INSURANCE } from "../constant";
import { getInsurance } from "../utils/tax";
import normalizeNumber from "../utils/normalizeNumber";

const styles = (theme) => ({
  root: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(4))]: {
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

class City extends Component {
  handleClick = (cityIdx) => (e) => {
    const {
      switchCity,
      writeInput,
      history,
      monthIncome,
      checkProvident,
    } = this.props;
    const { IBases, HACBases, HACRates } = INSURANCE[cityIdx];
    switchCity(cityIdx);
    const IBase = normalizeNumber(monthIncome, IBases);
    const HACBase = normalizeNumber(monthIncome, HACBases);
    const insurance = getInsurance(
      IBase,
      HACBase,
      cityIdx,
      checkProvident,
      HACRates[0]
    );
    writeInput({ HACRate: HACRates[0], insurance, IBase, HACBase });
    history.push("/");
  };

  render() {
    const { classes, cityIdx } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography className={classes.title}>热门城市</Typography>
            </Grid>
            {CITYS.map((city, i) => (
              <Grid item key={i}>
                <Button
                  size="small"
                  color={i === cityIdx ? "primary" : "inherit"}
                  variant="contained"
                  onClick={this.handleClick(i)}
                >
                  {i === cityIdx && <Place />}
                  {city}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </div>
    );
  }
}
City.propTypes = {
  classes: PropTypes.object.isRequired,
  switchCity: PropTypes.func.isRequired,
  writeInput: PropTypes.func.isRequired,
  cityIdx: PropTypes.number.isRequired,
};
export default withStyles(styles)(City);
