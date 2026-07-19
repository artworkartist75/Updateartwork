import {
  Button,
  Grid,
  Box
} from "@mui/material";

import type { ExhibitionToApi } from "../types/exhibition.types";
import { useGetExhibitionList } from "../hooks/useExhibition"; 
import FormModal from "../utils/subformModel";
import { useState } from "react";
import ExhibitionCard from '../components/exhibitionCart';
import ExhibitionFormData from '../components/exhibitionbtn';


export default function AddExhibition() {

  const {data: exhibitionData, isLoading, isError } = useGetExhibitionList();
  
  const [open, setOpen] = useState(false);
  const [selectedExhibition, setSelectedExhibition] = useState<ExhibitionToApi | null>(null);
  const [exhibitionMode, setExhibitionMode] = useState<"add" | "edit">("add");

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const handleClose = () => {
    setOpen(false);
  }
  const handleEdit = (exhibition: ExhibitionToApi) => {
    console.log("inside edit handle ");
    setExhibitionMode("edit");
    console.log("edit handle ", exhibition);
    setSelectedExhibition(exhibition);
    setOpen(true);
  };
 
  const handleCreate = () => {
    console.log("inside create handle ");
    setExhibitionMode("add");
    setOpen(true);
  }

  return (
    <>
      <FormModal
          open={open}
          title="Edit Artwork"
          onClose={handleClose}
      > 
        {
          exhibitionMode === "add" ? 
          (
            console.log("Exhibition add"),
            <ExhibitionFormData
              mode="create"
              onClose={handleClose}
            />
          ) : ( console.log("Exhibition:", selectedExhibition),
            <ExhibitionFormData
              mode="update"
              exhibition={selectedExhibition!}
              onClose={handleClose}
            />
          )
        }
      </FormModal>

      {!isError && exhibitionData && exhibitionData.length > 0 && (
        <Grid container spacing={2} sx={{p:0.5}}>
          {exhibitionData.map((exhi: ExhibitionToApi) => (
            <Grid key={exhi._id} size={{ xs: 6, sm: 6, md: 4 }}>
              <ExhibitionCard
                exhibition={exhi}
                onEdit={handleEdit}
              />
            </Grid>
          ))}
        </Grid>
      )}
      <Box
        sx={{
          display:"flex",
          justifyContent:"center",
          mt:3
        }}
      >
        <Button
          variant="contained"
          onClick={handleCreate}
        >
          Add Exhibition
        </Button>
      </Box>
    </>
  );
}