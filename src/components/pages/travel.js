import { React, useMemo, useState } from "react";
import { styled } from "@mui/system";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SellIcon from "@mui/icons-material/Sell";
import FlightIcon from "@mui/icons-material/Flight";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import HawthorneHouse from "../../images/hawthornehouse1.jpg";
import MCIAirport from "../../images/mci_airport.jpg";
import UnionStation from "../../images/union_station.jpg";
import LibertyMemorial from "../../images/liberty_memorial.jpg";
import PowerAndLightDistrict from "../../images/power_and_light_district.jpg";
import NelsonAtkins from "../../images/nelson_atkins.jpg";
import JackStack from "../../images/jack_stack.jpg";

const locations = {
  default: {
    latlng: { lat: 39.1509528, lng: -94.6515581 },
    zoom: 11,
    marker: false,
    mapsUrl: "",
    img: UnionStation,
  },
  hawthorneHouse: {
    latlng: { lat: 39.2039303, lng: -94.68936889999999 },
    zoom: 13,
    marker: true,
    mapsUrl: "https://goo.gl/maps/ouehM5aze2vtN9jh9",
    img: HawthorneHouse,
  },
  hotel: {
    latlng: { lat: 39.100454, lng: -94.5862796 },
    zoom: 13,
    marker: true,
    mapsUrl: "",
  },
  airport: {
    latlng: { lat: 39.3035862, lng: -94.7092596 },
    zoom: 11,
    marker: true,
    mapsUrl: "https://g.page/KCIAirport?share",
    img: MCIAirport,
  },
  unionStation: {
    latlng: { lat: 39.0860073, lng: -94.58586059999999 },
    zoom: 15,
    marker: true,
    mapsUrl: "https://goo.gl/maps/7ap1pntvoxKriht29",
    img: UnionStation,
  },
  libertyMemorial: {
    latlng: { lat: 39.080663, lng: -94.5860835 },
    zoom: 15,
    marker: true,
    mapsUrl: "https://goo.gl/maps/KUkBD8berNccEGL67",
    img: LibertyMemorial,
  },
  powerAndLightDistrict: {
    latlng: { lat: 39.0987792, lng: -94.5825043 },
    zoom: 15,
    marker: true,
    mapsUrl: "https://goo.gl/maps/RwYXy8n4nVPSZgHp6",
    img: PowerAndLightDistrict,
  },
  nelsonAtkins: {
    latlng: { lat: 39.0449506, lng: -94.58092839999999 },
    zoom: 15,
    marker: true,
    mapsUrl: "https://goo.gl/maps/rNBasMhRcLpGe4hP7",
    img: NelsonAtkins,
  },
  jackStack: {
    latlng: { lat: 39.08741, lng: -94.5852962 },
    zoom: 15,
    marker: true,
    mapsUrl: "https://goo.gl/maps/DhYXHQYrAH44jPQc7",
    img: JackStack,
  },
};

const Spacer = styled("div")(({ theme }) => ({
  height: theme.spacing(3),
}));

const ImgStyled = styled("img")({
  maxHeight: "100%",
  maxWidth: "100%",
  borderRadius: "5px",
});

const InfoWrapper = styled("div")({
  margin: "10px",
});

const InfoLine = styled("div")({
  display: "inline-flex",
});

const InfoLineItem = styled("div")({
  display: "inline-flex",
  alignSelf: "center",
});

const InfoLineItem2 = styled("div")({
  display: "inline-flex",
  alignSelf: "center",
  marginLeft: "15px",
});

const StyledLink = styled("a")(({ theme }) => ({
  color: theme.palette.secondary.main,
  "&:hover": {
    color: "#000000",
  },
}));

const StickyDiv = styled("div")({
  // position: "sticky",
  top: 80,
  zIndex: 1000,
  boxShadow: "0 4px 4px rgba(0,0,0,0.2)",
});

const MapInfoDiv = styled("div")({
  display: "flex",
});

const Travel = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  });

  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
    clickableIcons: true,
    styles: [
      {
        elementType: "labels",
        featureType: "poi.business",
        //stylers: [{ visibility: "off" }],
      },
    ],
  };

  const [location, setLocation] = useState(locations.default);

  const updateMap = (location) => {
    setLocation(location);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const openUrl = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <Container maxWidth="lg">
      <Spacer />
      {isLoaded ? (
        <div>
          <StickyDiv>
            <GoogleMap
              zoom={location.zoom}
              center={location.latlng}
              options={options}
              mapContainerStyle={{ width: "100%", height: "400px" }}
            >
              <Marker
                position={locations.hawthorneHouse.latlng}
                onClick={() => openUrl(locations.hawthorneHouse.mapsUrl)}
              />
              {location.marker ? (
                <Marker
                  position={location.latlng}
                  onClick={() => openUrl(location.mapsUrl)}
                ></Marker>
              ) : (
                <></>
              )}
            </GoogleMap>
          </StickyDiv>
          <MapInfoDiv>
            <InfoOutlinedIcon fontSize="small" variant="outlined" />
            <Typography variant="body2">
              Click markers to open google maps
            </Typography>
          </MapInfoDiv>
        </div>
      ) : (
        <div>Loading map...</div>
      )}
      <Spacer />
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} lg={4}>
          <Grid item xs={12}>
            <Typography variant="h5">
              <strong>The Hawthorne House</strong>
            </Typography>
          </Grid>
          <InfoWrapper>
            <Grid
              container
              alignItems="center"
              justifyContent="flex-start"
              spacing={1}
            >
              <Grid item xs={12}>
                <InfoLine>
                  <InfoLineItem>
                    <PinDropIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => updateMap(locations.hawthorneHouse)}
                    >
                      View on Map
                    </Button>
                  </InfoLineItem2>
                </InfoLine>
              </Grid>
              <Grid item xs={12} />
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} />
              <Grid item xs={12}>
                <Typography variant="body1">
                  The Hawthorne House is a ~20 minute drive from downtown KC, or
                  a ~40 minute drive from South Overland Park.{" "}
                  <strong>
                    Parking is free, and you may leave your car overnight if
                    necessary.
                  </strong>
                </Typography>
              </Grid>
            </Grid>
          </InfoWrapper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid item xs={12}>
            <Typography variant="h5">
              <strong>Hotel Block Options</strong>
            </Typography>
          </Grid>
          <InfoWrapper>
            <Grid
              container
              alignItems="center"
              justifyContent="flex-start"
              spacing={1}
            >
              <Grid item xs={12}>
                <InfoLine>
                  <InfoLineItem>
                    <PinDropIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => updateMap(locations.hotel)}
                    >
                      Hotel Indigo Downtown
                    </Button>
                  </InfoLineItem2>
                </InfoLine>
              </Grid>
              <Grid item xs={12}>
                <InfoLine>
                  <InfoLineItem>
                    <SellIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <Typography>$189/night</Typography>
                  </InfoLineItem2>
                </InfoLine>
              </Grid>
              <Grid item xs={12}>
                <InfoLine>
                  <InfoLineItem>
                    <LocalPhoneIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <StyledLink
                      href="tel:+18162838000"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Typography>(816) 283-8000</Typography>
                    </StyledLink>
                  </InfoLineItem2>
                </InfoLine>
              </Grid>
              <Grid item xs={12}>
                <InfoLine>
                  <InfoLineItem>
                    <InfoIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <StyledLink href="" target="_blank" rel="noreferrer">
                      <Typography>
                        Booking info will be avilable at a later time
                      </Typography>
                    </StyledLink>
                  </InfoLineItem2>
                </InfoLine>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  Located just North of the Power and Light District, guests who
                  want to stay downtown closer to the venue and KC bar scene
                  will want to look at this option.
                </Typography>
              </Grid>
              <Grid item xs={12} />
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} />
              <Grid item xs={12}>
                <InfoLine>
                  <InfoLineItem>
                    <PinDropIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => updateMap(locations.hotel)}
                    >
                      ??? Overland Park
                    </Button>
                  </InfoLineItem2>
                </InfoLine>
              </Grid>
              <Grid item xs={12}>
                <InfoLine>
                  <InfoLineItem>
                    <SellIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <Typography>$???/night</Typography>
                  </InfoLineItem2>
                </InfoLine>
              </Grid>
              <Grid item xs={12}>
                <InfoLine>
                  <InfoLineItem>
                    <LocalPhoneIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <StyledLink
                      href="tel:+18162838000"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Typography>(???) ???-????</Typography>
                    </StyledLink>
                  </InfoLineItem2>
                </InfoLine>
              </Grid>
              <Grid item xs={12}>
                <InfoLine>
                  <InfoLineItem>
                    <InfoIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <StyledLink href="" target="_blank" rel="noreferrer">
                      <Typography>
                        Booking info will be avilable at a later time
                      </Typography>
                    </StyledLink>
                  </InfoLineItem2>
                </InfoLine>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  Out of town guests with family in Overland Park may want to
                  stay out of the city and closer to relatives' houses.
                </Typography>
              </Grid>
            </Grid>
          </InfoWrapper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid item xs={12}>
            <Typography variant="h5">
              <strong>Other Kansas City Landmarks</strong>
            </Typography>
          </Grid>
          <InfoWrapper>
            <Grid
              container
              alignItems="center"
              justifyContent="flex-start"
              spacing={1}
            >
              <Grid item xs={12}>
                <InfoLine>
                  <InfoLineItem>
                    <FlightIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <Button
                      variant="text"
                      color="secondary"
                      onClick={() => updateMap(locations.airport)}
                    >
                      MCI International Airport
                    </Button>
                  </InfoLineItem2>
                </InfoLine>
              </Grid>
              <Grid item xs={12}>
                <InfoLine>
                  <InfoLineItem>
                    <AccountBalanceIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <Button
                      variant="text"
                      color="secondary"
                      onClick={() => updateMap(locations.unionStation)}
                    >
                      Union Station
                    </Button>
                  </InfoLineItem2>
                  <InfoLineItem2>
                    <Button
                      variant="text"
                      color="secondary"
                      onClick={() => updateMap(locations.libertyMemorial)}
                    >
                      Liberty Memorial
                    </Button>
                  </InfoLineItem2>
                </InfoLine>
              </Grid>
              <Grid item xs={12}>
                <InfoLine>
                  <InfoLineItem>
                    <SportsBarIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <Button
                      variant="text"
                      color="secondary"
                      onClick={() => updateMap(locations.powerAndLightDistrict)}
                    >
                      Power and Light District
                    </Button>
                  </InfoLineItem2>
                </InfoLine>
              </Grid>
              <Grid item xs={12}>
                <InfoLine>
                  <InfoLineItem>
                    <AccountBalanceIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <Button
                      variant="text"
                      color="secondary"
                      onClick={() => updateMap(locations.nelsonAtkins)}
                    >
                      Nelson Atkins Art Museum
                    </Button>
                  </InfoLineItem2>
                </InfoLine>
              </Grid>
              <Grid item xs={12}>
                <InfoLine>
                  <InfoLineItem>
                    <LocalDiningIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <Button
                      variant="text"
                      color="secondary"
                      onClick={() => updateMap(locations.jackStack)}
                    >
                      Jack Stack Barbeque
                    </Button>
                  </InfoLineItem2>
                </InfoLine>
              </Grid>
            </Grid>
          </InfoWrapper>
        </Grid>
      </Grid>
      <Spacer />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Grid item xs={12} lg={8}>
          <ImgStyled src={location.img} alt="img" />
        </Grid>
      </Grid>
    </Container>
  );
  //return content;
};

export default Travel;
