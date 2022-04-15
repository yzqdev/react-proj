import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    HashRouter,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//style
// import '../src/styles';

import Index from "./views/index";
import Layout from "./layout";
import routers from "./router";

import "./assets/demo";

/**
 *
 * @constructor
 */
function App() {
    /**
     * 返回一个路由列表
     */
    const routes = () => {
        return Object.keys(routers).map((route) => {
            return (
                <Route path={`/${route}`} component={routers[route]} key={route} />
            );
        });
    };

    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route
                    render={({ location }) => (
                        <Layout>
                            <TransitionGroup className="layout-transtion">
                                <CSSTransition
                                    timeout={500}
                                    classNames="fade"
                                    key={location.key}
                                >
                                    <div className="animate">
                                        <Switch location={location}>
                                            {routes(location)}
                                            {/* <Route path="/log" component={log} />
                                        <Route path="/theme" component={theme} /> */}
                                        </Switch>
                                    </div>
                                </CSSTransition>
                            </TransitionGroup>
                        </Layout>
                    )}
                />
            </Switch>
        </HashRouter>
    );
}

export default App;
