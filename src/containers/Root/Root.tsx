import * as React from 'react';
import { observer } from 'mobx-react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
    Redirect
} from 'react-router-dom'

import './Root.scss';

import { store } from '../../stores/Store';
import Example from '../../components/Example/Example';

interface IRootProps { }

@observer export class Root extends React.Component<IRootProps> {

    render() {
        return (
            <Router>
                <section>
                    <Route exact path="/" component={Example} />
                    <Route path="/example" component={Example} />
                    <PrivateRoute path="/example-private" component={Example} />
                </section>
            </Router>
        )
    }
}


/* const PrivateRoute = ({ component: Component, ...rest }:any) => (
    <Route {...rest} render={(props) => (
        store.isAuth ?
        (<Component{...props} />) : (<Redirect to={{ pathname: "/example-private" }}/>
        )
    )} />
  ) */