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
        "Feito com Kombuchá Base, tem a acidez e o gostinho tropical característicos do Maracujá, um ligeiro dulçor e frizância. Encanta pela sua elegância e sutileza.",
        "Além do sabor o que mais tem de bom?",
        "O Maracujá auxilia no relaxamento, tendo ação calmante e atenuando dores atribuídas ao estresse e tensão, como dores musculares e de cabeça. Isso porque possui alcaloides e ﬂavonoides que atuam como tranquilizantes no sistema nervoso central.",
      ];
    case Flavour.LAVENDER:
      return [
        "O sabor altamente floral da Lavanda é quebrado pela acidez e a frizância do Kombuchá Base, conferindo um sabor adocicado, incomum e delicioso.",
        "Além do sabor o que mais tem de bom?",
        "A Lavanda, que surpreende pelo sabor inusitado, traz seus vastos benefícios conhecidos na aromaterapia: tem ação sedativa, analgésica, antiinﬂamatória, bactericida e cicatrizante. Muito eﬁcaz para minimizar ansiedade e distúrbios do sono.",
      ];
    case Flavour.LEMON_AND_GINGER:
      return [
        "Feito com nosso Kombuchá Base. Gasoso, doce na medida certa e altamente refrescante. A intensidade do Gengibre é atenuada pelo perfume do Limão Tahiti.",
        "Além do sabor o que mais tem de bom?",
        "O Kombuchá é repleto de vitaminas, ácidos benéficos e minerais. Protege o fígado, equilibra a flora intestinal e auxilia na digestão. O Limão Tahiti possui propriedades antioxidantes, fortalece o sistema imunológico e equilibra os níveis de PH do organismo. O Gengibre desintoxica, é antiinﬂamatório, anticoagulante, bactericida e acelera o metabolismo.",
      ];
    case Flavour.HIBISCUS:
      return [
        "Na boca:",
        "O azedinho do chá da flor do HIBISCO vem na frente, seguido pela explosão do MORANGO, um ligeiro dulçor e frizância.",
        "Além do sabor o que mais tem de bom?",
        "O KOMBUCHÁ protege o fígado, equilibra a flora intestinal e auxilia na digestão, entre outros benefícios. O HIBISCO tem ação antioxidante, anti-hipertensiva, diurética, anti-inflamatória, relaxante, digestiva e calmante. O MORANGO tem ação antioxidante e anti-inflamatória e auxilia no controle da glicemia.",
      ];
    case Flavour.JUN:
      return [
        "Fermentado com mel e nada mais. A acidez característica do Kombuchá e o sabor inigualável do mel com o toque luxuoso das minúsculas bolhas de gás. Praticamente uma champanhe, só que sem álcool.",
        "Além do sabor o que mais tem de bom?",
        "O Mel é um antibiótico natural, fortalece o sistema imunológico, tonifica órgãos, é antiinflamatório e altamente nutritivo",
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
