export const LOADING_UPDATE = 'LOADING_UPDATE'

export function updateLoading (loading) {
  return { type: LOADING_UPDATE, loading }
}

export default function loadingReducer (state = true, action) {
  switch (action.type) {
    case LOADING_UPDATE:
      return action.loading
    default:
      return state
  }
}
