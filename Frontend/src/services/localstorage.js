const userInfoTag = "@foodexplorer:user"
const tokenTag = "@foodexplorer:token"

export const storeInfo = (user, token) => {
  if (!user || !token) return

  localStorage.setItem(userInfoTag, JSON.stringify(user))
  localStorage.setItem(tokenTag, token)
}

export const deleteInfo = () => {
  localStorage.removeItem(userInfoTag)
  localStorage.removeItem(tokenTag)
}

export const retrieveInfo = () => {
  const user = localStorage.getItem(userInfoTag)
  const token = localStorage.getItem(tokenTag)

  return { user: JSON.parse(user), token }
}
