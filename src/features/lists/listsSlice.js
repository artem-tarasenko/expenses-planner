import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
        title: 'Title',
        expenses: [
            {
                Title: 'Default',
                Currency: 'RUB',
                Sum: 0,
                isImportant: false,
                isHidden: false,
                id: '11111'
            }
        ],
    }
  ]
}

export const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
      load: (state, action) => {
        state.data = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { load } = listsSlice.actions
  
  export default listsSlice.reducer