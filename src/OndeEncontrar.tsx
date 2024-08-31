import {
  Box,
  ButtonBase,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Store, stores } from "./data/Stores";
import { MapMarker } from "./components/MapMarker";
import { useAppDispatch } from "./store/hooks";
import { setActiveMarker } from "./features/map/mapSlice";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const MAP_HEIGHT = 512;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function OndeEncontrar() {
  const dispatch = useAppDispatch();
  const [store, setStore] = useState<Store | null>(null);

  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const handleClick = (store: Store) => {
    dispatch(setActiveMarker(store.id)); // Tell the map marker which store to render.
    setStore(store); // Tell the map to center itself on the selected store.
    setTabIndex(1); // Open the map.
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h2" mb={1} sx={{ fontFamily: "Playfair Display" }}>
        Onde encontrar
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          variant="fullWidth"
          aria-label="basic tabs example"
          sx={{
            "&.Mui-selected": {
              color: "red",
            },
          }}
        >
          <Tab label="Lojas" {...a11yProps(0)} />
          <Tab label="Mapa" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={tabIndex} index={0}>
        <Stack spacing={2} sx={{ p: 1 }}>
          {stores.map((store) => {
            return (
              <ButtonBase
                key={store.id}
                sx={{ textAlign: "start", justifyContent: "start", m: 1 }}
                onClick={() => handleClick(store)}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  <Stack spacing={0.5}>
                    <Typography fontWeight={700}>{store.name}</Typography>
                    <Typography variant="body2">{store.address}</Typography>
                    <Typography variant="body2">{store.address2}</Typography>
                    <Typography variant="body2">{store.city}</Typography>
                    {/* <Typography variant="body2">{store.state}</Typography>
                    <Typography variant="body2">{store.country}</Typography> */}

                    {store.phone && (
                      <Typography variant="body2">{store.phone}</Typography>
                    )}
                  </Stack>
                  <ChevronRightIcon fontSize="large" />
                </Paper>
              </ButtonBase>
            );
          })}
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={tabIndex} index={1}>
        <APIProvider
          apiKey="AIzaSyAwms3txiyHM6ZcWdebVJCerR7LtMm8hDM"
          language="pt-BR"
          region="BR"
        >
          <Map
            style={{ width: "100%", height: MAP_HEIGHT }}
            defaultCenter={
              store !== null
                ? { lat: store.lat, lng: store.lng }
                : { lat: -22.9068, lng: -43.1729 } // Rio de Janeiro
            }
            defaultZoom={store !== null ? 14 : 10}
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
      </CustomTabPanel>
    </Box>
  );
}
