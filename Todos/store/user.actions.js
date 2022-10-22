import { userService } from "../services/user.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function onLogin(credentials) {
    return (dispatch) => {
        userService.login(credentials)
            .then(user => dispatch({
                type: 'SET_USER',
                user
            }))
            .catch(err => {
                showErrorMsg('Cannot login')
                console.log('Cannot login', err)
            })
    }
}

export function onSignup(credentials) {
    return (dispatch) => {
        userService.signup(credentials)
            .then(user => {
                dispatch({
                    type: 'SET_USER',
                    user
                })
                console.log(user);
            })
            .catch(err => {
                showErrorMsg('Cannot signup')
                console.log('Cannot signup', err)
            })

    }
}

export function onLogout() {
    return (dispatch) => {
        userService.logout()
            .then(() => dispatch({
                type: 'SET_USER',
                user: null
            }))
            .catch(err => {
                showErrorMsg('Cannot logout')
                console.log('Cannot logout', err)
            })
    }
}
