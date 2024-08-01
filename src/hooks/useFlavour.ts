import { useEffect, useState } from "react";
import { Flavour } from "@/Sabores";

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

export default function useFlavour() {
  const [flavour, setFlavour] = useState<Flavour>(Flavour.HIBISCUS);
  return { flavour, setFlavour };
}
