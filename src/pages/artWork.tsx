import {
  Button,
  Grid,
  Box
} from "@mui/material";
import type { ArtworkToApi } from "../types/artwork.types";
import { useGetArtWork } from "../hooks/useArtwork";
import { useState } from "react";
import FormModal from "../utils/subformModel";
import ArtworkFormData from "../components/artworkbtn"
import ArtworkCard from "../components/artworkCart";

export default function Artwork() {

  const {data: artworkData, isLoading, isError } = useGetArtWork();
  const [open, setOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkToApi | null>(null);
  const [artworkMode, setArtworkMode] = useState<"add" | "edit">("add");
  
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError || !artworkData) {
    return <h2>Something went wrong</h2>;
  }
  const handleClose = () => {
    setOpen(false);
  }
  const handleEdit = (artwork: ArtworkToApi) => {
    console.log("inside edit handle ");
    setArtworkMode("edit");
    console.log("edit handle ", artworkMode);
    setSelectedArtwork(artwork);
    setOpen(true);
  };
  const handleCreate = () => {
    console.log("inside create handle ");
    setArtworkMode("add");
    setOpen(true);
  }

  // return (
  //   <>
  //     <FormModal
  //         open={open}
  //         title="Edit Artwork"
  //         onClose={handleClose}
  //     > 
  //       {
  //         artworkMode === "add" ? 
  //         (
  //           console.log("Artwork add"),
  //           <ArtworkFormData
  //             mode="create"
  //             onClose={handleClose}
  //           />
  //         ) : ( console.log("Artwork:", selectedArtwork),
  //           <ArtworkFormData
  //             mode="update"
  //             artwork={selectedArtwork!}
  //             onClose={handleClose}
  //           />
  //         )
  //       }
          
  //     </FormModal>

  //     <Grid container spacing={3}>
  //       {artworkData.map((art: ArtworkToApi) => (
  //         <Grid key={art._id} size={{ xs: 6, sm: 6, md: 4 }}>
  //           <ArtworkCard artwork={art} onEdit={handleEdit} />
  //         </Grid>
  //       ))}
  //     </Grid>

  //     <Button
  //         variant="contained"
  //         onClick={handleCreate}
  //         sx={{mb:"auto", mt:2}}
  //     >
  //       Add Artwork
  //     </Button>

  //   </>
  // );
  return (
  <>
    <FormModal
      open={open}
      title={artworkMode === "add" ? "Add Artwork" : "Edit Artwork"}
      onClose={handleClose}
    >
      {artworkMode === "add" ? (
        <ArtworkFormData
          mode="create"
          onClose={handleClose}
        />
      ) : (
        <ArtworkFormData
          mode="update"
          artwork={selectedArtwork!}
          onClose={handleClose}
        />
      )}
    </FormModal>

    <Grid container spacing={3} sx={{mt:2}}>
      {artworkData.map((art: ArtworkToApi) => (
        <Grid key={art._id} size={{ xs: 6, sm: 6, md: 4 }}>
          <ArtworkCard
            artwork={art}
            onEdit={handleEdit}
          />
        </Grid>
      ))}
    </Grid>

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 3,
      }}
    >
      <Button
        variant="contained"
        onClick={handleCreate}
      >
        Add Artwork
      </Button>
    </Box>
  </>
);
}