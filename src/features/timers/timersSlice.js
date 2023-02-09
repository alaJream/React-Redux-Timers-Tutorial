import { createSlice } from '@reduxjs/toolkit'
import Timer from './Timer'

const initialState = {
  value: []
}

export const timersSlice = createSlice({
  name: 'timers',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = timersSlice.actions

export default timersSlice.reducer