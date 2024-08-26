import {
  Box,
  ButtonBase,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { stores } from "./data/Stores";
import { MapMarker } from "./components/MapMarker";
import theme from "./theme";
import { useAppDispatch } from "./store/hooks";
import { setActiveMarker } from "./features/map/mapSlice";

const MAP_HEIGHT = 512;

export default function OndeEncontrar() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const dispatch = useAppDispatch();

  return (
    <Box>
      <Typography variant="h2" sx={{ fontFamily: "Playfair Display" }}>
        Onde encontrar
      </Typography>
      <Stack direction={isDesktop ? "row" : "column-reverse"}>
        {/* TODO: add interactive legend/ search bar*/}
        <Stack spacing={2} sx={{ overflowY: "scroll", height: MAP_HEIGHT }}>
          {stores.map((store) => {
            return (
              <ButtonBase
                key={store.id}
                sx={{ textAlign: "start", justifyContent: "start", p: 1 }}
                onClick={() => dispatch(setActiveMarker(store.id))}
              >
                <Stack spacing={0.5}>
                  <Typography fontWeight={700}>{store.name}</Typography>
                  <Typography variant="body2">{store.address}</Typography>
                  <Typography variant="body2">{store.address2}</Typography>
                  <Typography variant="body2">{store.city}</Typography>
                  <Typography variant="body2">{store.state}</Typography>
                  <Typography variant="body2">{store.country}</Typography>

                  {store.phone && (
                    <Typography variant="body2">{store.phone}</Typography>
                  )}
                </Stack>
              </ButtonBase>
            );
          })}
        </Stack>
        <APIProvider
          apiKey="AIzaSyAwms3txiyHM6ZcWdebVJCerR7LtMm8hDM"
          language="pt-BR"
          region="BR"
        >
          <Map
            style={{ width: "100%", height: MAP_HEIGHT }}
            defaultCenter={{ lat: -22.9068, lng: -43.1729 }}
            defaultZoom={10}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
            mapId="o-mapa"
          >
            {stores.map((store) => {
              return (
                <MapMarker store={store} key={store.id}>
                  <Typography>
                    {store.address}
                    {store.address2}
                  </Typography>
                </MapMarker>
              );
            })}
          </Map>
        </APIProvider>
      </Stack>
    </Box>
  );
}
