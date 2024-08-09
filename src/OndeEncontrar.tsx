import { Box, Stack, Typography } from "@mui/material";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

// ADD MAP WITH LOCATIONS

export default function OndeEncontrar() {
  return (
    <Box>
      <Typography variant="h2" sx={{ fontFamily: "Playfair Display" }}>
        Onde encontrar
      </Typography>
      <Stack direction={"row"}>
        {/* TODO: Add tocation on the map and side interactive legend/ search bar*/}
        <Typography>This is a list of locations</Typography>
        <APIProvider
          apiKey="AIzaSyAwms3txiyHM6ZcWdebVJCerR7LtMm8hDM"
          language="pt-BR"
          region="BR"
        >
          <Map
            style={{ width: "100%", height: "100vh" }}
            defaultCenter={{ lat: 22.54992, lng: 0 }}
            defaultZoom={3}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          />
        </APIProvider>
      </Stack>
    </Box>
  );
}
