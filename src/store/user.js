export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGOUT = 'USER_LOGOUT'

// function login ({username, password}) {
//   return {type: USER_LOGIN, username, password}
// }

export function userLogin ({ code }) {
  return function (dispatch) {
    return fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'post',
      headers: {
        'Authorization': 'Basic ' + btoa('K4BqkiNaZCwlIA:SlI--S25WsfEaj1EfisP8CgAV7k'),
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: `grant_type=authorization_code&code=${code}&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000%2Flogin-redirect`
    }).then(function (data) {
      return data.json()
    }).then(function (data) {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        ...data,
      })
    }).catch(function (error) {
      console.log('Request failed', error)
    })
  }
}

// export function userLogout() {
//   return {}
// }

export default function userReducer (state = {}, action) {
  const {
    username,
    password,
    access_token,
    refresh_token,
  } = action

  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        username,
        password
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        access_token,
        refresh_token,
      }
    case USER_LOGOUT:
      return {
        ...state,
        username: '',
        password: ''
      }
    default:
      return state
  }
}
