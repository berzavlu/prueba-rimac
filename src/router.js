import React, { Suspense } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import { setConfig } from 'react-hot-loader'
import Layout from './components/layout'
// import Loader from 'components/layout/Loader'
import Store from './store'
import NotFoundPage from './pages/404'
import routes from './routes'

setConfig({ pureSFC: true, logLevel: 'debug' })

class Router extends React.PureComponent {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Layout>
                {routes.map(({ path, Component, exact }) => (
                  <Route path={path} key={path} exact={exact}>
                    <Suspense fallback={<div>cargando...</div>}>
                      <Component />
                    </Suspense>
                  </Route>
                ))}
              </Layout>
              <Route component={NotFoundPage} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default hot(Router, { errorBoundary: false })
