import { PropsWithChildren } from "react";
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectActiveMarker, setActiveMarker } from "@/features/map/mapSlice";
import { Store } from "@/data/Stores";

export interface MapMarkerProps extends PropsWithChildren {
  store: Store;
}

export const MapMarker = (props: MapMarkerProps) => {
  const selectedMarker = useAppSelector(selectActiveMarker);
  const dispatch = useAppDispatch();

  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => dispatch(setActiveMarker(props.store.id))}
        position={{ lat: props.store.lat, lng: props.store.lng }}
        title={props.store.name}
      />
      {props.store.id === selectedMarker && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => dispatch(setActiveMarker(""))}
          headerContent={
            <Typography mb={1} fontSize={14} fontWeight={700}>
              {props.store.name}
            </Typography>
          }
        >
          {props.children}
        </InfoWindow>
      )}
    </>
  );
};
