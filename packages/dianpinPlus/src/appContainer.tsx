import React, { Component, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
//redux流
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userInfoActionsFromOtherFiles from "./actions/userinfo";
//本地缓存配置
import { CITYNAME } from "./config/localStorekey";
import LocalStore from "./util/localStore";

// bundle模型用来异步加载组件
import Bundle from "./bundle";

// 不需要异步加载的组件
import HomeContainer from "./containers/Home";
import FooterContainer from "./components/Footer";

// 异步加载文件
import CityContainer from "./containers/City";
import SearchContainer from "./containers/Search";
import UserContainer from "./containers/User/index";
import DetailContainer from "./containers/Detail";
import NotFoundContainer from "./containers/NotFound";

const City = (props: any) => (
  < >
   <CityContainer history={props.props.history} />
  </ >
);

const Search = (props) => (
  < >

      <SearchContainer history={props.props.history} match={props.props.match} />

  </ >
);
const User = (props) => (
  <div>
     <UserContainer history={props.props.history} />
  </div>
);

const Detail = (props) => (
  <div>

      <DetailContainer history={props.props.history} match={props.props.match} />

  </div>
);

const NotFound = (props) => (
  <div>
       <NotFoundContainer history={props.props.history} />
  </div>
);

function AppContainer(props) {
  const history = useHistory();
  let [initDone, setInitDone] = useState(false);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    let cityName = LocalStore.getItem(CITYNAME);
    if (cityName == null) {
      cityName = "上海";
    }

    props.userInfoActions.update({
      cityName: cityName,
    });

    setInitDone(true);
  });
  return (
    <Router>
      {initDone ? (
        <div  >
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route
              exact
              path="/city"
              render={(props) => <City props={props} />}
            />
            <Route
              path="/search/:category/:keyword?"
              render={(props) => <Search props={props} />}
            />
            <Route
              path="/detail/:id"
              render={(props) => <Detail props={props} />}
            />
            <Route path="/user" render={(props) => <User props={props} />} />
            <Route render={(props) => <NotFound props={props} />} />
          </Switch>
          <FooterContainer history={history} />
        </div>
      ) : (
        <div>
          <span>正在加载...</span>
        </div>
      )}
    </Router>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(
      userInfoActionsFromOtherFiles,
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
