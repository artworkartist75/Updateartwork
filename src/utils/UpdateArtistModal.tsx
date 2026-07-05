import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import CreateUpdatePage from "../components/createUpdatePage";
import type { ArtistToApi } from "../types/artist.types";

interface Props {
  open: boolean;
  onClose: () => void;
  artist: ArtistToApi;
}

export default function UpdateArtistModal({
  open,
  onClose,
  artist,
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle>
        Update Artist

        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <CreateUpdatePage
          mode="update"
          artist={artist}
        />
      </DialogContent>
    </Dialog>
  );
}