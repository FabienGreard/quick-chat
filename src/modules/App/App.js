import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'

/* ACTIONS */
import { alertActions } from '../../_actions';

/* HELPERS */
import { history } from '../../helpers';

/* COMPONENTS */
import { Home, About, Alert } from '../../components';

/* CSS */
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    //listen on url change
    history.listen((location, action) => {
      // clear alert on location change
      props.dispatch(alertActions.clear());
      console.log(location, action);
    });

  }

  render() {
    const { alert } = this.props;
    return (
      <div>
        <Alert alert={alert}/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    );
  }

}

App.propTypes = {
  alert: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
