import { Container, Grid } from "@mui/material";
import { useParams } from "react-router";
import { CreateWishlist } from "./wishlist/create_wishlist";
import { ViewWishlist } from "./wishlist/view_wishlist";

export const Wishlist = () => {
  const { id } = useParams();

  let content = (
    <Container maxWidth="xs">
      <Grid container direction="column" spacing={2}>
        {id ? <ViewWishlist id={id} /> : <CreateWishlist />}
      </Grid>
    </Container>
  );
  return content;
};
