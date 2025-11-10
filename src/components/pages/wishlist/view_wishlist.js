import {
  Button,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  TextField,
  IconButton,
  Divider,
  InputAdornment,
  CircularProgress,
  Container,
} from "@mui/material";
import { getWishlist, updateWishlist } from "./wishlist_utils";
import { Fragment, useEffect, useState } from "react";
import {
  AddCircle,
  ArrowCircleRight,
  Forward,
  RemoveCircle,
} from "@mui/icons-material";

export const ViewWishlist = ({ id }) => {
  const [wishlist, setWishlist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [error, setError] = useState(null);
  const [myWishlistId, setMyWishListId] = useState(
    localStorage.getItem("my_wishlist_id")
  );
  const [ownershipDialog, setOwnershipDialog] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  useEffect(() => {
    setMyWishListId(localStorage.getItem("my_wishlist_id"));
  }, [id]);

  useEffect(() => {
    if (myWishlistId !== id) {
      setOwnershipDialog(true);
    } else {
      setOwnershipDialog(false);
    }
  }, [id, myWishlistId]);

  useEffect(() => {
    if (!id) {
      setError("No wishlist ID provided");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const data = await getWishlist(id);
        setWishlist(data);
      } catch (err) {
        setError("Failed to load wishlist");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const saveWishlist = async () => {
    setLoadingUpdate(true);
    setError(null);
    setWishlist((prev) => {
      if (!prev) return prev;
      const copy = structuredClone(prev);
      copy.record.updatedAt = new Date().toISOString();
      return copy;
    });
    try {
      const data = await updateWishlist(wishlist, id);
      setWishlist(data);
    } catch (err) {
      setError("Failed to update wishlist");
    } finally {
      setLoadingUpdate(false);
    }
  };

  // controlled input and handlers for section
  const [newSectionValue, setNewSectionValue] = useState("");

  const handleAddSection = () => {
    const title = newSectionValue.trim();
    if (!title) return;

    setWishlist((prev) => {
      if (!prev) return prev;
      const copy = structuredClone(prev);
      copy.record.sections.push({ title, items: [] });
      return copy;
    });
    setNewSectionValue("");
  };

  const handleRemoveSection = (index) => {
    console.log("removing section", index);
    if (index < 0 || index > wishlist.record.sections.length) return;
    setWishlist((prev) => {
      const copy = structuredClone(prev);
      copy.record.sections.splice(index, 1);
      return copy;
    });
  };

  // controlled input and handlers for items
  const [newItemValues, setNewItemValues] = useState({});

  const handleNewItemChange = (sectionIndex, value) => {
    setNewItemValues((prev) => ({ ...prev, [sectionIndex]: value }));
  };

  const handleAddItem = (sectionIndex) => {
    const item = (newItemValues[sectionIndex] || "").trim();
    if (!item || item.length < 2) return;

    setWishlist((prev) => {
      if (!prev) return;

      const copy = structuredClone(prev);
      copy.record.sections[sectionIndex].items.push({
        name: item,
        checked: false,
      });
      return copy;
    });
    setNewItemValues((prev) => ({ ...prev, [sectionIndex]: "" }));
  };

  const handleRemoveItem = (sectionIndex, itemIndex) => {
    if (
      sectionIndex < 0 ||
      sectionIndex >= wishlist.record.sections.length ||
      itemIndex < 0 ||
      itemIndex >= wishlist.record.sections[sectionIndex].items.length
    )
      return;

    setWishlist((prev) => {
      const copy = structuredClone(prev);
      copy.record.sections[sectionIndex].items.splice(itemIndex, 1);
      return copy;
    });
  };

  // handle checkbox updates live
  const toggleCheckbox = async (sectionIndex, itemIndex) => {
    setLoadingUpdate(true);
    setError(null);
    if (
      sectionIndex < 0 ||
      sectionIndex >= wishlist.record.sections.length ||
      itemIndex < 0 ||
      itemIndex >= wishlist.record.sections[sectionIndex].items.length
    )
      return;

    const copy = structuredClone(wishlist);
    copy.record.sections[sectionIndex].items[itemIndex].checked =
        !copy.record.sections[sectionIndex].items[itemIndex].checked;
    setWishlist(copy);
    try {
      const data = await updateWishlist(copy, id);
      setWishlist(data);
    } catch (err) {
      setError("Failed to update wishlist");
    } finally {
      setLoadingUpdate(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  let content = (
    <>
      {loading && (
        <Grid item>
          <CircularProgress size="40px" color="secondary" />
        </Grid>
      )}
      {error && (
        <Grid item>
          <Typography color="error">{error}</Typography>
        </Grid>
      )}
      {wishlist?.record && ownershipDialog && !loading && (
        <>
          <Grid item>
            <Typography variant="h4">{wishlist.record.name}</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              size="small"
              color="secondary"
              onClick={copyToClipboard}
              sx={{ textTransform: "none" }}
            >
              Copy Wishlist Link
            </Button>
          </Grid>
          <Grid item>
            <Typography>
              <strong>Is this your wishlist?</strong>
            </Typography>
            <Typography fontSize="11px">
              No peeking: the Checkbox Surveillance Squad is on duty.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              fullWidth
              color="secondary"
              variant="contained"
              sx={{ textTransform: "none" }}
              onClick={() => {
                setOwnershipDialog(false);
              }}
            >
              <strong>NO, take me to check the list!</strong>
            </Button>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              color="secondary"
              label="Password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      color="secondary"
                      onClick={(e) => {
                        setOwnershipDialog(false);
                        setMyWishListId(id);
                        localStorage.setItem("my_wishlist_id", id);
                      }}
                      disabled={passwordValue !== wishlist.record.password}
                    >
                      <ArrowCircleRight />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </>
      )}
      {wishlist?.record && !ownershipDialog && !loading && (
        <>
          <Grid item>
            <Typography variant="h4">{wishlist.record.name}</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              size="small"
              color="secondary"
              onClick={copyToClipboard}
            >
              Copy Wishlist Link
            </Button>
          </Grid>
          {wishlist.record.sections?.map((section, sectionIndex) => (
            <Fragment key={sectionIndex + section.title}>
              {id === myWishlistId ? (
                <Grid item key={sectionIndex + section.title}>
                  <Typography
                    variant="h6"
                    paddingTop="12px"
                    sx={{ cursor: "pointer" }}
                    onDoubleClick={() => handleRemoveSection(sectionIndex)}
                  >
                    {section.title}
                  </Typography>
                </Grid>
              ) : (
                <Grid item key={sectionIndex + section.title}>
                  <Typography variant="h6" paddingTop="12px">
                    <strong>{section.title}</strong>
                  </Typography>
                </Grid>
              )}

              <Grid item key={sectionIndex + section.title + "list"}>
                {section.items?.map((item, itemIndex) => (
                  <Fragment key={item.name + itemIndex}>
                    {id === myWishlistId ? (
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-start"
                      >
                        <Grid item xs={2} paddingRight="10px">
                          <IconButton
                            color="error"
                            onClick={() => handleRemoveItem(sectionIndex, itemIndex)}
                          >
                            <RemoveCircle />
                          </IconButton>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography>{item.name}</Typography>
                        </Grid>
                      </Grid>
                    ) : (
                      <div>
                        <FormControlLabel
                          key={item.name + itemIndex}
                          control={
                            <Checkbox
                              sx={{ marginLeft: "12px" }}
                              color="secondary"
                              checked={item.checked}
                              disabled={loadingUpdate}
                              onClick={() =>
                                toggleCheckbox(sectionIndex, itemIndex)
                              }
                            ></Checkbox>
                          }
                          label={<Typography sx={{textDecoration:item.checked ? "line-through" : "none"}}>{item.name}</Typography>}
                          labelPlacement="end"
                        />
                      </div>
                    )}
                  </Fragment>
                ))}
              </Grid>
              {id === myWishlistId && (
                <Grid item paddingTop="12px">
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    color="secondary"
                    label="New Item"
                    value={newItemValues[sectionIndex] || ""}
                    onChange={(e) => handleNewItemChange(sectionIndex, e.target.value)}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" &&
                        (newItemValues[sectionIndex] || "").trim().length > 1
                      ) {
                        e.preventDefault();
                        handleAddItem(sectionIndex);
                      }
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            color="secondary"
                            onClick={(e) => handleAddItem(sectionIndex)}
                            disabled={
                              !((newItemValues[sectionIndex] || "").trim().length > 1)
                            }
                          >
                            <AddCircle />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              )}
            </Fragment>
          ))}
          {id === myWishlistId && (
            <>
              <Grid item>
                <Divider />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  size="small"
                  variant="filled"
                  color="secondary"
                  label="New Section *"
                  value={newSectionValue}
                  onChange={(e) => setNewSectionValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (
                      e.key === "Enter" &&
                      newSectionValue.trim().length > 1
                    ) {
                      e.preventDefault();
                      handleAddSection();
                    }
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          color="secondary"
                          onClick={handleAddSection}
                          disabled={newSectionValue.length < 2}
                        >
                          <AddCircle />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <Typography fontSize="11px">
                  * Double click a section title to remove it.
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  color="secondary"
                  variant="contained"
                  fullWidth
                  onClick={saveWishlist}
                  disabled={loadingUpdate}
                >
                  {loadingUpdate ? (
                    <CircularProgress size="30px" color="secondary" />
                  ) : (
                    "Save"
                  )}
                </Button>
              </Grid>
            </>
          )}
        </>
      )}
    </>
  );
  return content;
};
