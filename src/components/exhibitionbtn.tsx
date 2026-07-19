import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import type { ExhibitionForm, ExhibitionToApi } from "../types/exhibition.types";
import { useAddExhibition, useUpdateExhibition } from "../hooks/useExhibition"; 
import { Controller, useForm } from "react-hook-form";
import { createExhibitionFormData } from "../utils/createExhibitonFormData";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";


const eventTypes = [
  "Art Fair",
  "Exhibition",
  "Competition",
  "Workshop",
  "Seminar",
  "Festival",
];

interface exhibitionFormProps {
  mode: "create" | "update";
  exhibition?: ExhibitionToApi;
  onClose: () => void;
}

export default function ExhibitionFormData({ mode, exhibition, onClose } : exhibitionFormProps) {

    const addExhibition = useAddExhibition();
    const updateExhibition = useUpdateExhibition();
    console.log(mode,exhibition);

    const [existingImages, setExistingImages] = useState(
        exhibition?.eventImages ?? []
    );
    const [deletedImages, setDeletedImages] = useState<string[]>([]);
    const [selectedEventImages, setselectedEventImages] = useState<File[]>([]);
    const [certificatePreview, setCertificatePreview] = useState<string | null>(null);
    const [deletedCertificate, setDeletedCertificate] = useState<string | null>(null);
    const [existingCertificate, setExistingCertificate] = useState<
        ExhibitionToApi["certificateImage"] | null
    >(exhibition?.certificateImage ?? null);
    

    const mapExhibitonToForm = (
        exhibition: ExhibitionToApi
      ): ExhibitionForm => ({
        title: exhibition.title,
        eventType: exhibition.type,
        organizer: exhibition.organizer,
        venue: exhibition.venue,
        city: exhibition.city,
        state: exhibition.state,
        country: exhibition.country,
        startDate: exhibition.startDate ? new Date(exhibition.startDate).toISOString().split("T")[0]: "",
        endDate: exhibition.endDate ? new Date(exhibition.endDate).toISOString().split("T")[0]: "",
        achievements: exhibition.achievement,
        description: exhibition.description,
        certificate: null,
        eventImages: [],
      });

    const defaultExhibitionData: ExhibitionForm = {
        title: "",
        eventType: "",
        organizer: "",
        venue: "",
        city: "",
        state: "",
        country: "",
        startDate: new Date().toISOString().split("T")[0],
        endDate: new Date().toISOString().split("T")[0],
        achievements: "",
        description: "",
        certificate: null,
        eventImages: [],
    };

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        control,
        watch,
    } = useForm<ExhibitionForm>({
        defaultValues: mode === "create"
                ? defaultExhibitionData
                : mapExhibitonToForm(exhibition!),
    });

    console.log(watch("title"));

    useEffect(() => {
        if (exhibition) {
          reset(mapExhibitonToForm(exhibition));
        }
    }, [exhibition, reset]);
    
    const handleCertificateUpload = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      if (!e.target.files?.length) return;
      const file = e.target.files[0]; 
      setValue("certificate", file);
      if (certificatePreview) {
        URL.revokeObjectURL(certificatePreview);
      }
      setCertificatePreview(URL.createObjectURL(file));
    };

    useEffect(() => {
      return () => {
        if (certificatePreview) {
          URL.revokeObjectURL(certificatePreview);
        }
      };
    }, [certificatePreview]);

    const handleEventImagesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const files = Array.from(e.target.files);
        const updatedImages = [...selectedEventImages, ...files];
        setselectedEventImages(updatedImages);
        setValue("eventImages", updatedImages);
      }
    };
      
    const handleRemoveEventImage = (index: number) => {
      setselectedEventImages((prev) => prev.filter((_, i) => i !== index));
    };
      
    const handleDeleteExistingImage = (publicId: string) => {
      setExistingImages((prev) =>
        prev.filter((img) => img.publicId !== publicId)
      );
      setDeletedImages((prev) => [...prev, publicId]);
    };

    const handleDeleteExistingCertificate = () => {
      if(existingCertificate){
          setExistingCertificate(null);
          setDeletedCertificate(existingCertificate.publicId);
      }
    }

    const onSubmit = (data: ExhibitionForm) => {
        console.log("Form Data:", data);
        const formData = createExhibitionFormData(data);

        if(mode == "create"){
            addExhibition.mutate(formData, {
            onError: (error) => {
                console.error("Error submitting form:", error);
                onClose();
            },
            onSuccess: (response) => {
                console.log("Exhibition created successfully:", response);
                onClose();
            }
            });
        }else{
            if (deletedCertificate) {
              formData.append("deleteCertificate", deletedCertificate);
            }
            formData.append("deleteEventImg",JSON.stringify(deletedImages));//JSON.stringify(deletedImages)
            console.log("update exhibition: ", formData);
            updateExhibition.mutate({id:exhibition!._id, exhibitionData:formData},{
                onSuccess:() => {
                    onClose();
                }
            })
        }
    };

  return (
    <Box sx={{ p: 4, bgcolor: "#f5f5f5" }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card sx={{ maxWidth: 1000, mx: "auto", borderRadius: 3 }}>
        <CardContent>

          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 3 }}
          >
            Add Exhibition
          </Typography>

          <Divider sx={{ mb: 4 }} />

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
              label="Title"
              fullWidth
              required
              {...register("title", { required: "Title is required" })}
            />

            <Controller
                name="eventType"
                control={control}
                render={({field}) => (
                    <TextField
                        select
                        label="Event Type"
                        fullWidth
                        required
                        {...field}
                        >
                        {eventTypes.map((item) => (
                            <MenuItem key={item} value={item}>
                            {item}
                            </MenuItem>
                        ))}
                    </TextField>
                )}
            />

            <TextField
              label="Organizer"
              fullWidth
              {...register("organizer", { required: "Organizer is required" })}
            />

            <TextField
              label="Venue"
              fullWidth
              {...register("venue", { required: "Venue is required" })}
            />

            <TextField
              label="City"
              fullWidth
              {...register("city", { required: "City is required" })}
            />

            <TextField
              label="State"
              fullWidth
              {...register("state", { required: "State is required" })}
            />

            <TextField
              label="Country"
              fullWidth
              {...register("country", { required: "Country is required" })}
            />

            <TextField
              type="date"
              label="Start Date"
              // InputLabelProps={{ shrink: true }}
              fullWidth
              {...register("startDate", { required: "Start Date is required" })}
            />

            <TextField
              type="date"
              label="End Date"
              // InputLabelProps={{ shrink: true }}
              fullWidth
              {...register("endDate", { required: "End Date is required" })}
            />

            <TextField
              label="Achievement"
              fullWidth
              {...register("achievements", { required: "Achievement is required" })}
            />

          </Box>

          <Box sx={{ mt: 3 }}>
            <TextField
              label="Description"
              multiline
              rows={5}
              fullWidth
              {...register("description", { required: "Description is required" })}
            />
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h6"
            sx={{ mb: 2 }}
          >
            Certificate Image
          </Typography>

          {existingCertificate && (<Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid
                key={existingCertificate!.publicId}
                size={{ xs: 6, sm: 4, md: 3 }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={existingCertificate!.url}
                    sx={{ borderRadius: 2 }}
                  />

                  <IconButton
                    color="error"
                    size="small"
                    onClick={handleDeleteExistingCertificate}
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
          </Grid>)}
          
          {certificatePreview && (
            <Card sx={{ mt: 2, width: 200 }}>
              <CardMedia
                component="img"
                image={certificatePreview}
                alt="Certificate Preview"
                height="200"
             />
            </Card>
          )}

          <Button
            variant="contained"
            component="label"
          >
            Upload Certificate
            <input hidden type="file" onChange={handleCertificateUpload} />
          </Button>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h6"
            sx={{ mb: 2 }}
          >
            Event Images
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

          {selectedEventImages.map((image, index) => (
            <Card key={index} sx={{ width: 150, position: "relative" }}>
              <IconButton
                color="error"
                size="small"
                sx={{
                  position: "absolute",
                  top: 5,
                  right: 5,
                }}
                onClick={() => handleRemoveEventImage(index)}
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
            Upload Event Images
            <input hidden type="file" multiple onChange={handleEventImagesUpload} />
          </Button>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              mt: 5,
            }}
          >
            <Button variant="outlined">
              Cancel
            </Button>

            <Button 
              variant="contained"
              type="submit"
              disabled={ mode == "create"? (addExhibition.isPending): updateExhibition.isPending}  
            >
                {
                    mode == "create" ?
                    (addExhibition.isPending ? "Submitting..." : "Submit"):
                    (updateExhibition.isPending ? "Updating...": "Update")
                }
            </Button>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}