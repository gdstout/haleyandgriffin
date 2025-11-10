import {
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { PageLink } from "../home";

const ACCESS_KEY = "merry2025";

export const CreateWishlist = () => {
  const navigate = useNavigate();

  // form state
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [accessKey, setAccessKey] = useState("");
  const [canCreate, setCanCreate] = useState(false);

  useEffect(() => {
    setCanCreate(
      name.length > 2 && password.length > 2 && accessKey === ACCESS_KEY
    );
  }, [name, password, accessKey]);

  // loading and submitting state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createWishlist = async () => {
    console.log("Creating wishlist...");
    setLoading(true);
    setError(null);

    try {
      const apiKey = process.env.REACT_APP_JSONBIN_API_ACCESS_KEY;
      if (!apiKey) {
        setError("Missing API key");
        setLoading(false);
        throw new Error("Missing API key");
      }

      const payload = {
        name: name,
        password: password,
        updatedAt: new Date().toISOString(),
        sections: []
      };

      const response = await fetch("https://api.jsonbin.io/v3/b", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Access-Key": apiKey,
          "X-Bin-Private": "true",
          "X-Bin-Name": `${name}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error creating wishlist: ${text}`);
      }

      const data = await response.json();
      setLoading(false);
      localStorage.setItem("my_wishlist_id", data.metadata.id);
      navigate(`/wishlist/${data.metadata.id}`);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  let content = (
    <>
      <Grid item>
        <Typography variant="h4">Create a Wishlist</Typography>
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          color="secondary"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          color="secondary"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Access Key"
          variant="outlined"
          color="secondary"
          value={accessKey}
          onChange={(e) => setAccessKey(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          disabled={!canCreate || loading}
          onClick={createWishlist}
        >
          {loading ? "creating..." : "Create"}
        </Button>
      </Grid>
      {localStorage.getItem("my_wishlist_id") && (
        <>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <Typography>
              Or go to{" "}
              <PageLink
                to={`/wishlist/${localStorage.getItem("my_wishlist_id")}`}
              >
                <strong>my last wishlist!</strong>
              </PageLink>
            </Typography>
          </Grid>
        </>
      )}
    </>
  );
  return content;
};
