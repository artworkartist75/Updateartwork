import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { defaultValues, type ArtworkFormType, type ArtworkToApi } from "../types/artwork.types";
import { Controller, useForm } from "react-hook-form";
import { useAddArtWork, useUpdateArtwork } from "../hooks/useArtwork";
import { useEffect, useState } from "react";
import { createArtworkFormData } from "../utils/createArtworkFormData";

const categories = [
  "Painting",
  "Sketch",
  "Digital Art",
  "Illustration",
  "Photography",
  "Sculpture",
  "Mixed Media",
];

const status = ["Available", "Sold", "Reserved"];

interface ArtworkFormProps {
  mode: "create" | "update";
  artwork?: ArtworkToApi;
  onClose: () => void;
}

export default function ArtworkFormData({ mode, artwork, onClose } : ArtworkFormProps) {
  const artworkCreate = useAddArtWork();
  const artWorkUpdate = useUpdateArtwork()
  console.log(mode,artwork);
  const [existingImages, setExistingImages] = useState(
    artwork?.artworkImages ?? []
  );

  const [deletedImages, setDeletedImages] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const mapArtworkToForm = (
    artwork: ArtworkToApi
  ): ArtworkFormType => ({
    title: artwork.title,
    category: artwork.category,
    medium: artwork.medium,
    yearCreated: artwork.yearCreated,
    tags: artwork.tags.join(", "),
    description: artwork.description,
    price: artwork.price,
    status: artwork.status,
    images: [], // Existing images File nahi hain
    featuredWork: artwork.isFeatured,
    isForSale: artwork.isForSale,
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    watch,
  } = useForm<ArtworkFormType>({
    defaultValues:
      mode === "create"
        ? defaultValues
        : mapArtworkToForm(artwork!),
  });
  
    console.log(watch("title"));
  useEffect(() => {
    if (artwork) {
      reset(mapArtworkToForm(artwork));
    }
  }, [artwork, reset]);

  const handleArtWorkImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const updatedImages = [...selectedImages, ...files];
      
      setSelectedImages(updatedImages);
      setValue("images", updatedImages);
    }
  };
  
  const handleRemoveImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDeleteExistingImage = (publicId: string) => {
    setExistingImages((prev) =>
      prev.filter((img) => img.publicId !== publicId)
    );

    setDeletedImages((prev) => [...prev, publicId]);
  };

  const onSubmit = (data: ArtworkFormType) => {
    console.log("Form Data on submit :", data);
    console.log("mode on submit ", mode);
    const formData = createArtworkFormData(data);

    if(mode === "create"){
      artworkCreate.mutate(formData,{
        onSuccess:() => {
          onClose();
        },
      });
    }else{
      formData.append("deletedImages",JSON.stringify(deletedImages));
      artWorkUpdate.mutate({id: artwork!._id, artworkData:formData},{
        onSuccess:() => {
          onClose();
        },
      });
    }
  }

  return (
    <Box 
      sx={{ bgcolor: "#f5f5f5" }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card sx={{ maxWidth: 1000, mx: "auto" }}>
        <CardContent>

          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 3 }}
          >
            Add Artwork
          </Typography>

          <Divider sx={{ mb: 4 }} />

          {/* Basic Information */}

          <Typography variant="h6" sx={{ mb: 2 }}>
            Basic Information
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: 3,
            }}
          >
            <TextField
              label="Artwork Title"
              fullWidth
              required
              {...register("title", { required: true })}
            />

            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <TextField select fullWidth label="Category" {...field}>
                  {categories.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

            <TextField
              label="Medium"
              fullWidth
              placeholder="Oil on Canvas"
              {...register("medium")}
            />

            <TextField
              label="Year Created"
              type="number"
              fullWidth
              {...register("yearCreated", { valueAsNumber: true })}
            />

            <TextField
              label="Tags"
              fullWidth
              placeholder="Nature, Portrait, Modern"
              {...register("tags")}
            />
          </Box>

          <Box sx={{ mt: 3 }}>
            <TextField
              label="Description"
              multiline
              rows={5}
              fullWidth
              required
              {...register("description", { required: true })}
            />
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" sx={{ mb: 2 }}>
            Pricing
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: 3,
            }}
          >
            <TextField
              label="Price"
              type="number"
              fullWidth
              {...register("price", { valueAsNumber: true })}
            />

            <Controller
              name="status"
              control={control}
              render={({field}) => (
                <TextField
                  select
                  label="Status"
                  defaultValue="Available"
                  fullWidth
                  {...field}
                >
                  {status.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Upload */}

          <Typography variant="h6" sx={{ mb: 2 }}>
            Artwork Images
          </Typography>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            {existingImages?.map((image) => (
              <Grid
                key={image.publicId}
                size={{ xs: 6, sm: 4, md: 3 }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={image.url}
                    sx={{ borderRadius: 2 }}
                  />

                  <IconButton
                    color="error"
                    size="small"
                    onClick={() => handleDeleteExistingImage(image.publicId)}
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      bgcolor: "white",
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Grid>
            ))}
          </Grid>

          {selectedImages.map((image, index) => (
            <Card key={index} sx={{ width: 150, position: "relative" }}>
              <IconButton
                color="error"
                size="small"
                sx={{
                  position: "absolute",
                  top: 5,
                  right: 5,
                }}
                onClick={() => handleRemoveImage(index)}
              >
               <DeleteIcon />
              </IconButton>

              <CardMedia
              component="img"
             height="120"
            image={URL.createObjectURL(image)}
            />
           </Card>
          ))}

          <Button
            variant="contained"
            component="label"
          >
            Upload Images
            <input hidden type="file" multiple onChange={handleArtWorkImage} />
          </Button>

          <Divider sx={{ my: 4 }} />

          {/* Options */}

          <Typography variant="h6" sx={{ mb: 2 }}>
            Options
          </Typography>

          {/* <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
            }}
          >
            <FormControlLabel
              control={<Checkbox {...register("featuredWork")} />}
              label="Featured Artwork"
            />

            <FormControlLabel
              control={<Checkbox {...register("isForSale")} />}
              label="Available For Sale"
            />
          </Box> */}

          <Controller
            name="featuredWork"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                }
                label="Featured Artwork"
              />
            )}
          />

          <Controller
            name="isForSale"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                }
                label="Available For Sale"
              />
            )}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              mt: 5,
            }}
          >
            <Button 
              variant="outlined"
              onClick={() => onClose()}
            >
              Cancel
            </Button>

            <Button 
              variant="contained"
              type="submit"
              disabled={ mode == "create" ? (artworkCreate.isPending) : (artWorkUpdate.isPending)}
            >
              {
                mode == "create" ?
                (artworkCreate.isPending ? "Submitting..." : "Submit"):
                (artWorkUpdate.isPending ? "Updating..." : "Update") 
              }
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}