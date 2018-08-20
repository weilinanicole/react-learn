import {Route,Redirect,Switch} from 'react-router-dom';
import React,{Fragment} from 'react';

export default (prop)=>{
    return <Fragment>
        <Switch>
            {
                prop.router.map((item, index) => {
                    return <Route key={index} path={item.path} render={(...route) => {
                        if (item.children) {
                            return <item.component {...route} childrenRouter={item.children} />
                        } else {
                            return <item.component  {...route} />
                        }
                    }}></Route>
                })
            }<Redirect to="/home/index/one" />
        </Switch>
    </Fragment>
}