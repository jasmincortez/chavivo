import {
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { stores } from "./data/Stores";
import { MapMarker } from "./components/MapMarker";
import theme from "./theme";
import { FixedSizeList, ListChildComponentProps } from "react-window";

/**
 * Function that renders each individual row in the list.
 */
function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  const store = stores[index];
  const subtitle = [
    store.address,
    store.address2,
    store.city,
    store.state,
    store.country,
  ].join(", ");

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={store.name} secondary={subtitle} />
      </ListItemButton>
    </ListItem>
  );
}

const MAP_HEIGHT = 512;

export default function OndeEncontrar() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box>
      <Typography variant="h2" sx={{ fontFamily: "Playfair Display" }}>
        Onde encontrar
      </Typography>
      <Stack direction={isDesktop ? "row" : "column-reverse"}>
        {/* TODO: add interactive legend/ search bar*/}
        <FixedSizeList
          height={MAP_HEIGHT}
          width={320}
          itemSize={136}
          itemCount={stores.length}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
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
                <MapMarker
                  title={store.name}
                  lat={store.lat}
                  lng={store.lng}
                  key={store.id}
                  id={store.id}
                >
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
