import React from 'react'

export const Login = () => (
  <div>
    <a
      href='https://www.reddit.com/api/v1/authorize?client_id=K4BqkiNaZCwlIA&response_type=code&state=RANDOM_STRING&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000%2Flogin-redirect&duration=permanent&scope=identity'
    >
      Login
    </a>
  </div>
)

export default Login
