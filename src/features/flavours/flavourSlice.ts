import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "@/store/createAppSlice";

export enum Flavour {
  PASSIONFRUIT = "Maracujá",
  LAVENDER = "Lavanda",
  LEMON_AND_GINGER = "Limão com Gengibre",
  HIBISCUS = "Hibisco com Morango",
  JUN = "Jun",
}

export function getDescription(flavour: Flavour | null) {
  switch (flavour) {
    case Flavour.PASSIONFRUIT:
      return "Feito com Kombuchá Base, tem a acidez e o gostinho tropical característicos do Maracujá, um ligeiro dulçor e frizância. Encanta pela sua elegância e sutileza. /n /n Além do sabor o que mais tem de bom? /n O Maracujá auxilia no relaxamento, tendo ação calmante e atenuando dores atribuídas ao estresse e tensão, como dores musculares e de cabeça. Isso porque possui alcaloides e ﬂavonoides que atuam como tranquilizantes no sistema nervoso central.";

    case Flavour.LAVENDER:
      return "O sabor altamente floral da Lavanda é quebrado pela acidez e a frizância do Kombuchá Base, conferindo um sabor adocicado, incomum e delicioso. /n /n Além do sabor o que mais tem de bom? /n  A Lavanda, que surpreende pelo sabor inusitado, traz seus vastos benefícios conhecidos na aromaterapia: tem ação sedativa, analgésica, antiinﬂamatória, bactericida e cicatrizante. Muito eﬁcaz para minimizar ansiedade e distúrbios do sono.";
    case Flavour.LEMON_AND_GINGER:
      return "Feito com nosso Kombuchá Base. Gasoso, doce na medida certa e altamente refrescante. A intensidade do Gengibre é atenuada pelo perfume do Limão Tahiti. /n /n Além do sabor o que mais tem de bom? /n O Kombuchá é repleto de vitaminas, ácidos benéficos e minerais. Protege o fígado, equilibra a flora intestinal e auxilia na digestão. O Limão Tahiti possui propriedades antioxidantes, fortalece o sistema imunológico e equilibra os níveis de PH do organismo. O Gengibre desintoxica, é antiinﬂamatório, anticoagulante, bactericida e acelera o metabolismo.";
    case Flavour.HIBISCUS:
      return "Feito a partir do Kombuchá Base. O azedinho do chá da Flor de Hibisco vem na frente, seguido pela explosão do Morango. /n /n Além do sabor o que mais tem de bom? /n O Hibisco, rico em antocianinas - pigmento natural com ação antioxidante - tem potencial anti hipertensivo, diurético, antinflamatório, relaxante, digestivo e calmante. O Morango, é fonte de vitamina C, tem ação antioxidante, antiinﬂamatória e auxilia no controle da glicemia";
    case Flavour.JUN:
      return "Fermentado com mel e nada mais. A acidez característica do Kombuchá e o sabor inigualável do mel com o toque luxuoso das minúsculas bolhas de gás. Praticamente uma champanhe, só que sem álcool. /n /n Além do sabor o que mais tem de bom? /n O Mel é um antibiótico natural, fortalece o sistema imunológico, tonifica órgãos, é antiinflamatório e altamente nutritivo";
    default:
      return "";
  }
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
