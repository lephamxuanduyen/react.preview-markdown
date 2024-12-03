import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { quotesApi } from '../apis/quote.api'
import { Quote } from '../types/quote.type'

// Define a type for the slice state
export interface quotesState {
    data: Quote[] | null
    loading: boolean
    error: string | null
}

// Define the initial state using that type
const initialState: quotesState = {
    data: [],
    loading: false,
    error: ""
}

export const getQuotes = createAsyncThunk("quote", async () => {
    const quotes = await quotesApi()
    return quotes
})

export const quotesSlice = createSlice({
    name: 'quote',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getQuotes.pending, (state) => {
                state.loading = true
            })
            .addCase(getQuotes.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.data = action.payload
            })
            .addCase(getQuotes.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false
                state.error = action.payload
                state.data = []
            })
    }
})

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: any) => state.counter.value

export default quotesSlice.reducer