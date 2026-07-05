import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import type { ExhibitionForm } from "../types/exhibition.types";
import { useAddExhibition } from "../hooks/useExhibition"; 
import { useForm } from "react-hook-form";

const eventTypes = [
  "Art Fair",
  "Exhibition",
  "Competition",
  "Workshop",
  "Seminar",
  "Festival",
];

export default function AddExhibition() {

  const mutation = useAddExhibition();

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
    formState: { errors },
  } = useForm<ExhibitionForm>({
    defaultValues: defaultExhibitionData,
  });

  console.log("Form Errors:", errors);
  
  const handleCertificateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setValue("certificate", e.target.files[0]);
    }
  };

  const handleEventImagesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setValue("eventImages", Array.from(e.target.files));
    }
  };

  const onSubmit = (data: ExhibitionForm) => {
    console.log("Form Data:", data);
    const formData = new FormData();
    
    formData.append("artist", "6a4807d5df0d709bdb5a9ece");
    formData.append("title", data.title);
    formData.append("eventType", data.eventType);
    formData.append("organizer", data.organizer);
    formData.append("venue", data.venue);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("country", data.country);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);
    formData.append("achievements", data.achievements);
    formData.append("description", data.description);

    if (data.certificate) {
      formData.append("certificate", data.certificate);
    }

    data.eventImages.forEach((image) => {
      formData.append("eventImages", image);
    });

    mutation.mutate(formData, {
      onError: (error) => {
        console.error("Error submitting form:", error);
      },
      onSuccess: (response) => {
        console.log("Exhibition created successfully:", response);
      }
    });
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

            <TextField
              select
              label="Event Type"
              fullWidth
              required
              {...register("eventType", { required: "Event Type is required" })}
            >
              {eventTypes.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

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

            {/* <TextField  
              type="number"
              label="Display Order"
              fullWidth
              {...register("displayOrder", { required: "Display Order is required" })}
            /> */}
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
              disabled={mutation.isPending}  
            >
              {mutation.isPending ? "Submitting..." : "Submit"}
            </Button>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}