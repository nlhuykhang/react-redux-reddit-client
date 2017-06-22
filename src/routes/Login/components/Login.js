import React from 'react'

export const Login = () => (
  <div>
    <a
      href='https://www.reddit.com/api/v1/authorize?client_id=K4BqkiNaZCwlIA&response_type=code&state=RANDOM_STRING&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000%2Flogin-redirect&duration=permanent&scope=account%20creddits%20edit%20flair%20history%20identity%20modconfig%20modcontributors%20modflair%20modlog%20modmail%20modothers%20modposts%20modself%20modtraffic%20modwiki%20mysubreddits%20privatemessages%20read%20report%20save%20structuredstyles%20submit%20subscribe%20vote%20wikiedit%20wikiread'
    >
      Login
    </a>
  </div>
)

export default Login
