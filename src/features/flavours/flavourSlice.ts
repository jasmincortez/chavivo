import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "@/store/createAppSlice"
import { Flavour } from "@/Sabores"

export interface FlavourSliceState {
  flavour: Flavour | null
}

const initialState: FlavourSliceState = {
  flavour: null,
}

export const flavourSlice = createAppSlice({
  name: "flavour",
  initialState,
  reducers: create => ({
    setFlavour: create.reducer(
      (state, action: PayloadAction<Flavour | null>) => {
        state.flavour = action.payload
      }
    ),
  }),
  selectors: {
    selectFlavour: state => state.flavour,
  },
})

export const { setFlavour } = flavourSlice.actions

export const { selectFlavour } = flavourSlice.selectors
