import {
  Button,
  Grid
} from "@mui/material";
import type { ArtworkToApi } from "../types/artwork.types";
import { useGetArtWork } from "../hooks/useArtwork";
import { useState } from "react";
import FormModal from "../utils/subformModel";
import ArtworkFormData from "../components/artworkbtn"
import ArtworkCard from "../components/artistCart";

// const categories = [
//   "Painting",
//   "Sketch",
//   "Digital Art",
//   "Illustration",
//   "Photography",
//   "Sculpture",
//   "Mixed Media",
// ];

// const status = ["Available", "Sold", "Reserved"];


export default function Artwork() {

  // const defaultValues: ArtworkForm = {
  //   title: "",
  //   category: "",
  //   medium: "",
  //   yearCreated: new Date().getFullYear(),
  //   tags: "",
  //   description: "",
  //   price: 0,
  //   status: "Available",
  //   images: [],
  //   featuredWork: false,
  //   isForSale: true,
  // };

  // const {
  //     register,
  //     handleSubmit,
  //     setValue,
  //   } = useForm<ArtworkForm>({
  //     defaultValues,
  //   });

  // const handleArtWorkImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     setValue("images", Array.from(e.target.files));
  //   }
  // };

  // const onSubmit = (data: ArtworkForm) => {
  //   console.log("Form Data:", data);
  //   const formData = new FormData();
    
  //   formData.append("artist", "6a4807d5df0d709bdb5a9ece");
  //   formData.append("title", data.title);
  //   formData.append("category", data.category);
  //   formData.append("medium", data.medium);
  //   formData.append("yearCreated", data.yearCreated.toString());
  //   formData.append("tags", data.tags);
  //   formData.append("description", data.description);
  //   formData.append("price", data.price.toString());
  //   formData.append("status", data.status);
  //   formData.append("featuredWork", data.featuredWork.toString());
  //   formData.append("isForSale", data.isForSale.toString());

  //   data.images.forEach((image) => {
  //     formData.append(`images`, image);
  //   });

  //   mutation.mutate(formData, {
  //     onSuccess: (response) => {
  //       console.log("Artwork created successfully:", response);
  //     },
  //     onError: (error) => {
  //       console.error("Error creating artwork:", error);
  //     },
  //   });

  // }
  const {data: artworkData, isLoading, isError } = useGetArtWork();
  const [open, setOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkToApi | null>(null);
  
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
      console.log("selected ",artwork);
      setSelectedArtwork(artwork);
      setOpen(true);
  };

  return (
    <>
      <Button
          variant="contained"
          onClick={() => setOpen(true)}
      >
          Add Artwork
      </Button>

      <FormModal
          open={open}
          title="Edit Artwork"
          onClose={handleClose}
      >
          <ArtworkFormData
            mode="update"
            artwork={selectedArtwork!}
          />
      </FormModal>

      <Grid container spacing={3}>
        {artworkData.map((art: ArtworkToApi) => (
          <Grid key={art._id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ArtworkCard artwork={art} onEdit={handleEdit} />
          </Grid>
        ))}
      </Grid>

    </>
    // <Box 
    //   sx={{ p: 4, bgcolor: "#f5f5f5" }}
    //   component="form"
    //   onSubmit={handleSubmit(onSubmit)}
    // >
    //   <Card sx={{ maxWidth: 1000, mx: "auto", borderRadius: 3 }}>
    //     <CardContent>

    //       <Typography
    //         variant="h4"
    //         sx={{ fontWeight: 700, mb: 3 }}
    //       >
    //         Add Artwork
    //       </Typography>

    //       <Divider sx={{ mb: 4 }} />

    //       {/* Basic Information */}

    //       <Typography variant="h6" sx={{ mb: 2 }}>
    //         Basic Information
    //       </Typography>

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
    //           label="Artwork Title"
    //           fullWidth
    //           required
    //           {...register("title", { required: true })}
    //         />

    //         <TextField
    //           select
    //           label="Category"
    //           fullWidth
    //           required
    //           {...register("category", { required: true })}
    //         >
    //           {categories.map((item) => (
    //             <MenuItem key={item} value={item}>
    //               {item}
    //             </MenuItem>
    //           ))}
    //         </TextField>

    //         <TextField
    //           label="Medium"
    //           fullWidth
    //           placeholder="Oil on Canvas"
    //           {...register("medium")}
    //         />

    //         <TextField
    //           label="Year Created"
    //           type="number"
    //           fullWidth
    //           {...register("yearCreated", { valueAsNumber: true })}
    //         />

    //         <TextField
    //           label="Tags"
    //           fullWidth
    //           placeholder="Nature, Portrait, Modern"
    //           {...register("tags")}
    //         />
    //       </Box>

    //       <Box sx={{ mt: 3 }}>
    //         <TextField
    //           label="Description"
    //           multiline
    //           rows={5}
    //           fullWidth
    //           required
    //           {...register("description", { required: true })}
    //         />
    //       </Box>

    //       <Divider sx={{ my: 4 }} />

    //       <Typography variant="h6" sx={{ mb: 2 }}>
    //         Pricing
    //       </Typography>

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
    //           label="Price"
    //           type="number"
    //           fullWidth
    //           {...register("price", { valueAsNumber: true })}
    //         />

    //         <TextField
    //           select
    //           label="Status"
    //           defaultValue="Available"
    //           fullWidth
    //           {...register("status")}
    //         >
    //           {status.map((item) => (
    //             <MenuItem key={item} value={item}>
    //               {item}
    //             </MenuItem>
    //           ))}
    //         </TextField>
    //       </Box>

    //       <Divider sx={{ my: 4 }} />

    //       {/* Upload */}

    //       <Typography variant="h6" sx={{ mb: 2 }}>
    //         Artwork Images
    //       </Typography>

    //       <Button
    //         variant="contained"
    //         component="label"
    //       >
    //         Upload Images
    //         <input hidden type="file" multiple onChange={handleArtWorkImage} />
    //       </Button>

    //       <Divider sx={{ my: 4 }} />

    //       {/* <Typography variant="h6" sx={{ mb: 2 }}>
    //         Artwork Video
    //       </Typography>

    //       <Button
    //         variant="contained"
    //         component="label"
    //       >
    //         Upload Video
    //         <input hidden type="file" accept="video/*" />
    //       </Button>

    //       <Divider sx={{ my: 4 }} /> */}

    //       {/* Options */}

    //       <Typography variant="h6" sx={{ mb: 2 }}>
    //         Options
    //       </Typography>

    //       <Box
    //         sx={{
    //           display: "flex",
    //           gap: 4,
    //           flexWrap: "wrap",
    //         }}
    //       >
    //         <FormControlLabel
    //           control={<Checkbox {...register("featuredWork")} />}
    //           label="Featured Artwork"
    //         />

    //         <FormControlLabel
    //           control={<Checkbox {...register("isForSale")} />}
    //           label="Available For Sale"
    //         />
    //       </Box>

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