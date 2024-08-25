import { createAppSlice } from "@/store/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export interface MapSliceState {
  activeMarker: string;
}

const initialState: MapSliceState = {
  activeMarker: "",
};

export const mapSlice = createAppSlice({
  name: "map",
  initialState,
  reducers: (create) => ({
    setActiveMarker: create.reducer((state, action: PayloadAction<string>) => {
      state.activeMarker = action.payload;
    }),
  }),
  selectors: {
    selectActiveMarker: (state) => state.activeMarker,
  },
});

export const { setActiveMarker } = mapSlice.actions;

export const { selectActiveMarker } = mapSlice.selectors;
