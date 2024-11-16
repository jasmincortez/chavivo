import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "@/store/createAppSlice";

export enum Flavour {
  PASSIONFRUIT = "Maracujá",
  LAVENDER = "Lavanda",
  LEMON_AND_GINGER = "Limão com Gengibre",
  HIBISCUS = "Hibisco com Morango",
  JUN = "Jun",
}

export function getDescription(flavour: Flavour | null): string[] {
  switch (flavour) {
    case Flavour.PASSIONFRUIT:
      return [
        "Na boca:",
        "A acidez e o gostinho tropical característicos do MARACUJÁ DOCE, com gás.",
        "Além do sabor o que mais tem de bom?",
        "O KOMBUCHÁ protege o fígado, equilibra a flora intestinal e auxilia na digestão, entre outros benefícios.",
        "O MARACUJÁ tem ação calmante, antioxidante, auxilia na digestão e é benéfico para os olhos.",
      ];
    case Flavour.LAVENDER:
      return [
        "Na boca:",
        "O sabor altamente floral da LAVANDA é quebrado pela acidez e a frizância do KOMBUCHÁ, conferindo um sabor adocicado, inusitado e delicioso.",
        "Além do sabor o que mais tem de bom?",
        "A LAVANDA tem ação analgésica, anti-inflamatória, bactericida, sedativa e cicatrizante.",
        "O KOMBUCHÁ ajuda na digestão, é antioxidante, auxilia no processo de emagrecimento e protege o fígado, entre outros benefícios.",
      ];
    case Flavour.LEMON_AND_GINGER:
      return [
        "Na boca:",
        "Gasoso, doce na medida certa e altamente refrescante, com a intensidade do GENGIBRE sendo atenuada pelo perfume do LIMÃO Tahiti.",
        "Além do sabor o que mais tem de bom?",
        "O KOMBUCHÁ é repleto de vitaminas, ácidos e minerais, protege o fígado, equilibra a flora intestinal e auxilia na digestão.",
        "O LIMÃO possui propriedades antioxidantes, fortalece o sistema imunológico e equilibra os níveis de PH no sangue.",
        "O GENGIBRE desintoxica, é anti-inflamatório, anticoagulante, antioxidante e bactericida.",
      ];
    case Flavour.HIBISCUS:
      return [
        "Na boca:",
        "O azedinho do chá da flor do HIBISCO vem na frente, seguido pela explosão do MORANGO, um ligeiro dulçor e frizância.",
        "Além do sabor o que mais tem de bom?",
        "O KOMBUCHÁ protege o fígado, equilibra a flora intestinal e auxilia na digestão, entre outros benefícios.",
        "O HIBISCO tem ação antioxidante, anti-hipertensiva, diurética, anti-inflamatória, relaxante, digestiva e calmante.",
        "O MORANGO tem ação antioxidante e anti-inflamatória e auxilia no controle da glicemia.",
      ];
    case Flavour.JUN:
      return [
        "Na boca:",
        "A acidez característica do KOMBUCHÁ e o sabor inigualável do mel com o toque luxuoso das minúsculas bolhas de gás. Praticamente uma champanhe.",
        "Além do sabor o que mais tem de bom?",
        "O MEL, além de ser um antibiótico natural, fortalece o sistema imunológico, tonifica órgãos como os pulmões e o estômago, é anti-inflamatório e é altamente nutritivo.",
        "O KOMBUCHÁ protege o fígado, equilibra a flora intestinal e auxilia na digestão, entre outros benefícios.",
      ];
    default:
      return [""];
  }
}

export const getFlavourBgCss = (flavour: Flavour) => {
  switch (flavour) {
    case Flavour.PASSIONFRUIT:
      return {
        background:
          "linear-gradient(0deg, rgba(242,151,32,1) 50%, rgba(236,172,104,1) 50%)",
      };
    case Flavour.LAVENDER:
      return {
        background:
          "linear-gradient(0deg, rgba(94,85,155,1) 50%, rgba(192,162,196,1) 50%)",
      };
    case Flavour.LEMON_AND_GINGER:
      return {
        background:
          "linear-gradient(0deg, rgba(117,153,62,1) 50%, rgba(134,175,126,1) 50%)",
      };
    case Flavour.HIBISCUS:
      return {
        background:
          "linear-gradient(0deg, rgba(200,72,134,1) 50%, rgba(198,109,147,1) 50%)",
      };
    case Flavour.JUN:
      return {
        background:
          "linear-gradient(0deg, rgba(237,203,88,1) 50%, rgba(229,205,142,1) 50%)",
      };
    default:
      return {};
  }
};

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
