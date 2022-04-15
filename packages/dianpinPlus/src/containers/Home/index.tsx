import React, { Component, useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as appActions from "../../actions/app";
import HomeHeader from "../../components/HomeHeader";
import Category from "../../components/Category";
import Ad from "./subpage/Ad";
import List from "./subpage/List";
import { useHistory } from "react-router-dom";
function Home(props) {
  useEffect(() => {
    props.appActionList.menu({
      location: 1,
    });
  });
  const history = useHistory();
  return (
    <div>
      <HomeHeader cityName={props.userinfo.cityName} history={history} />
      <Category />
      <div style={{ height: "15px" }}></div>
      <Ad />
      <List cityName={props.userinfo.cityName} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActionList: bindActionCreators(appActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
