import React        from "react";
import { 
    BrowserRouter as Router,
    Route,
    Switch
}                   from "react-router-dom";
import {
    Layout,
}                   from "antd";
import 'antd/dist/antd.less';
import MyHeader     from "./components/Header";
import GeneralStatistics from "./pages/GeneralStatistics";
import UserRegister from "./pages/UserRegister";
import Login from "./pages/Login";
import Curb from "./pages/Curb";

const { Content } = Layout;

function AppRouter() {
    return (
        <Layout className = 'App' style={{height: '100vh', minHeight: 'fit-content'}}>          
            <Content>
                <MyHeader />
                <Router>
                    <Switch>
                        <Route
                            path        = '/login'
                            component   = {Login}
                        /> 
                        <Route
                            path        = '/cadastrar'
                            component   = {UserRegister}
                        />
                        <Route
                            path        = '/curb'
                            component   = {Curb}
                        />
                        <Route
                            component   = {GeneralStatistics}
                        />
                    </Switch>
                </Router>
            </Content>
        </Layout>
    );
}

export default AppRouter;