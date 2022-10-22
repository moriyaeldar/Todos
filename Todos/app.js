const Router = ReactRouterDOM.HashRouter

const {Provider} = ReactRedux

import { store } from './store/store.js'

import { RootCmp } from './root-cmp.jsx'


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootCmp />
        </Router>
    </Provider>,
    document.getElementById('root')
)





