import { createSlice } from '@reduxjs/toolkit'

// TODO: perhaps update to redux 8, and also store user, session, theme?
// TODO: theme local storage?
// https://medium.com/@mokshi/how-to-persist-custom-material-ui-theme-light-dark-using-redux-toolkit-and-local-storage-in-481f4399eb4b
export const initialState = {
  userId: '',
  name: '',
  username: '',
  image: '',
  email: '',
  role: [],
}

// TODO: this login info is not being used, blitz is
export const userSlice = createSlice({
  name: 'auth/user',
  initialState,
  reducers: {
    setUser: (_, action) => action.payload,
    userLoggedOut: () => initialState,
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
