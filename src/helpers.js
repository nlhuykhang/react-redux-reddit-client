const ifLoggedIn = ({
  user: {
    access_token: accessToken,
    refresh_token: refreshToken
  } = {},
  loading
}) => !(!loading && (!accessToken || !refreshToken))

export const exeActionIfNotLoggedIn = (data) => (action) => !ifLoggedIn(data) && action()

export const exeActionIfLoggedIn = (data) => (action) => ifLoggedIn(data) && action()
