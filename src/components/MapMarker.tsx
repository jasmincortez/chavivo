import { PropsWithChildren, useState } from "react";
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectActiveMarker, setActiveMarker } from "@/features/map/mapSlice";

export interface MapMarkerProps extends PropsWithChildren {
  lat: number;
  lng: number;
  title: string;
  id: string;
}

export const MapMarker = (props: MapMarkerProps) => {
  const selectedMarker = useAppSelector(selectActiveMarker);
  const dispatch = useAppDispatch();

  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => dispatch(setActiveMarker(props.id))}
        position={{ lat: props.lat, lng: props.lng }}
        title={props.title}
      />
      {props.id === selectedMarker && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => dispatch(setActiveMarker(""))}
          headerContent={
            <Typography fontWeight={700}>{props.title}</Typography>
          }
        >
          {props.children}
        </InfoWindow>
      )}
    </>
  );
};
