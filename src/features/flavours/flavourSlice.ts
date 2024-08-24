import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "@/store/createAppSlice";

export enum Flavour {
  PASSIONFRUIT = "Maracujá",
  LAVENDER = "Lavanda",
  LEMON_AND_GINGER = "Limão com Gengibre",
  HIBISCUS = "Hibisco com Morango",
  JUN = "Jun",
}

export const bottleImages = {
  [Flavour.PASSIONFRUIT]: "./maracuja1.png",
  [Flavour.LAVENDER]: "./lavanda1.png",
  [Flavour.LEMON_AND_GINGER]: "./limaoegengibre1.png",
  [Flavour.HIBISCUS]: "./morango1.png",
  [Flavour.JUN]: "./junmel1.png",
};

export function getFlavourIndex(flavour: Flavour) {
  return Object.values(Flavour).findIndex((f) => f === flavour);
}

export interface FlavourSliceState {
  flavour: Flavour | null;
}

const initialState: FlavourSliceState = {
  flavour: null,
};

export const flavourSlice = createAppSlice({
  name: "flavour",
  initialState,
  reducers: (create) => ({
    setFlavour: create.reducer(
      (state, action: PayloadAction<Flavour | null>) => {
        state.flavour = action.payload;
      }
    ),
  }),
  selectors: {
    selectFlavour: (state) => state.flavour,
  },
});

export const { setFlavour } = flavourSlice.actions;

export const { selectFlavour } = flavourSlice.selectors;
