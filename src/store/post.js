import Snoowrap from 'snoowrap'
import { normalize, denormalize, schema } from 'normalizr'
import { uniq } from 'lodash'

const post = new schema.Entity('post')
const postSchema = { posts: [ post ] }

export const NEW_POST = 'NEW_POST'
export const NEW_POSTS = 'NEW_POSTS'

export function getDenormalizedPosts (ids = [], data = {}) {
  console.log(denormalize({ posts: ids }, postSchema, { post: data }))
  return denormalize({ posts: ids }, postSchema, { post: data })
}

export const getHotPost = ({ refreshToken, accessToken }) => dispatch => {
  const r = new Snoowrap({
    userAgent: window.navigator.userAgent,
    clientId: 'K4BqkiNaZCwlIA',
    clientSecret: 'SlI--S25WsfEaj1EfisP8CgAV7k',
    refreshToken,
    accessToken,
  })

  return r.getHot().map(post => post.toJSON()).then(posts => {
    dispatch({
      type: NEW_POSTS,
      posts,
    })
  })
}

export default function postReducer (state = {
  byId: {},
  allIds: [],
}, action) {
  switch (action.type) {
    case NEW_POSTS:
      const normalizedData = normalize({
        posts: action.posts,
      }, postSchema)

      return {
        byId: {
          ...state.byId || {},
          ...normalizedData.entities.post,
        },
        allIds: uniq([...state.allIds || [], ...normalizedData.result.posts]),
      }
    default:
      return state
  }
}
