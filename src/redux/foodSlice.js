import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const initialState = {
    foods: [],
    food:{},
    loading:false
  }
  


export const getProducts = createAsyncThunk(
  'foods',
  async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/food/products/search?apiKey=018a82e3be1441f787d85e6feff06457&query=cheese`
      );
      const data = await response.json(); // JSON formatındaki veriyi parse et
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
)


const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.foods = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        console.error('Error fetching data:', action.error);
      });
  },
});

export const { } = foodSlice.actions

export default foodSlice.reducer