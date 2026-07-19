import {
  Button,
  Grid
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
      <Button
          variant="contained"
          onClick={handleCreate}
      >
          Add Exhibition
      </Button>

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
        <Grid container spacing={3}>
          {exhibitionData.map((exhi: ExhibitionToApi) => (
            <Grid key={exhi._id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ExhibitionCard
                exhibition={exhi}
                onEdit={handleEdit}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>

    // <Box sx={{ p: 4, bgcolor: "#f5f5f5" }}
    //   component="form"
    //   onSubmit={handleSubmit(onSubmit)}
    // >
    //   <Card sx={{ maxWidth: 1000, mx: "auto", borderRadius: 3 }}>
    //     <CardContent>

    //       <Typography
    //         variant="h4"
    //         sx={{ fontWeight: 700, mb: 3 }}
    //       >
    //         Add Exhibition
    //       </Typography>

    //       <Divider sx={{ mb: 4 }} />

    //       <Box
    //         sx={{
    //           display: "grid",
    //           gridTemplateColumns: {
    //             xs: "1fr",
    //             md: "1fr 1fr",
    //           },
    //           gap: 3,
    //         }}
    //       >
    //         <TextField
    //           label="Title"
    //           fullWidth
    //           required
    //           {...register("title", { required: "Title is required" })}
    //         />

    //         <TextField
    //           select
    //           label="Event Type"
    //           fullWidth
    //           required
    //           {...register("eventType", { required: "Event Type is required" })}
    //         >
    //           {eventTypes.map((item) => (
    //             <MenuItem key={item} value={item}>
    //               {item}
    //             </MenuItem>
    //           ))}
    //         </TextField>

    //         <TextField
    //           label="Organizer"
    //           fullWidth
    //           {...register("organizer", { required: "Organizer is required" })}
    //         />

    //         <TextField
    //           label="Venue"
    //           fullWidth
    //           {...register("venue", { required: "Venue is required" })}
    //         />

    //         <TextField
    //           label="City"
    //           fullWidth
    //           {...register("city", { required: "City is required" })}
    //         />

    //         <TextField
    //           label="State"
    //           fullWidth
    //           {...register("state", { required: "State is required" })}
    //         />

    //         <TextField
    //           label="Country"
    //           fullWidth
    //           {...register("country", { required: "Country is required" })}
    //         />

    //         <TextField
    //           type="date"
    //           label="Start Date"
    //           // InputLabelProps={{ shrink: true }}
    //           fullWidth
    //           {...register("startDate", { required: "Start Date is required" })}
    //         />

    //         <TextField
    //           type="date"
    //           label="End Date"
    //           // InputLabelProps={{ shrink: true }}
    //           fullWidth
    //           {...register("endDate", { required: "End Date is required" })}
    //         />

    //         <TextField
    //           label="Achievement"
    //           fullWidth
    //           {...register("achievements", { required: "Achievement is required" })}
    //         />

    //         {/* <TextField  
    //           type="number"
    //           label="Display Order"
    //           fullWidth
    //           {...register("displayOrder", { required: "Display Order is required" })}
    //         /> */}
    //       </Box>

    //       <Box sx={{ mt: 3 }}>
    //         <TextField
    //           label="Description"
    //           multiline
    //           rows={5}
    //           fullWidth
    //           {...register("description", { required: "Description is required" })}
    //         />
    //       </Box>

    //       <Divider sx={{ my: 4 }} />

    //       <Typography
    //         variant="h6"
    //         sx={{ mb: 2 }}
    //       >
    //         Certificate Image
    //       </Typography>

    //       <Button
    //         variant="contained"
    //         component="label"
    //       >
    //         Upload Certificate
    //         <input hidden type="file" onChange={handleCertificateUpload} />
    //       </Button>

    //       <Divider sx={{ my: 4 }} />

    //       <Typography
    //         variant="h6"
    //         sx={{ mb: 2 }}
    //       >
    //         Event Images
    //       </Typography>

    //       <Button
    //         variant="contained"
    //         component="label"
    //       >
    //         Upload Event Images
    //         <input hidden type="file" multiple onChange={handleEventImagesUpload} />
    //       </Button>

    //       <Box
    //         sx={{
    //           display: "flex",
    //           justifyContent: "flex-end",
    //           gap: 2,
    //           mt: 5,
    //         }}
    //       >
    //         <Button variant="outlined">
    //           Cancel
    //         </Button>

    //         <Button 
    //           variant="contained"
    //           type="submit"
    //           disabled={mutation.isPending}  
    //         >
    //           {mutation.isPending ? "Submitting..." : "Submit"}
    //         </Button>
    //       </Box>

    //     </CardContent>
    //   </Card>
    // </Box>
  );
}