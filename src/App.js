import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import { withSuspense } from './hoc/withSuspense';
const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer')
);
const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer')
);
class App extends React.Component {
  // catchAllUnhandleErrors = (promiseRejectionEvent) => {
  //   alert('Some error');
  //   // console.error(promiseRejectionEvent);
  // };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandleErrors);
  }
  // componentWillUnmount() {
  //   window.addEventListener('unhandledrejection', this.catchAllUnhandleErrors);
  // }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to={'/profile'} />} />
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
// export default connect(mapStateToProps, { initializeApp })(App);
