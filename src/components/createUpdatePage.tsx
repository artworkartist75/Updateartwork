import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import { useCreateArtist, useUpdateArtist } from "../hooks/useArtist";
import { useForm, Controller } from "react-hook-form";
import type { ArtistForm, ArtistToApi  } from "../types/artist.types";
import { createArtistFormData } from "../utils/createArtistFormData";
import { useEffect } from "react";

interface ArtistFormProps {
  mode: "create" | "update";
  artist?: ArtistToApi;
}

export default function CreateUpdatePage({ mode, artist } : ArtistFormProps) {
  const createMutation = useCreateArtist();
  const updateMutation = useUpdateArtist();
//   console.log("update : ",artist);

  const defaultValues: ArtistForm = {
    profileImage: null,
    coverImage: null,

    name: "",
    profession: "",
    shortBio: "",
    bio: "",

    email: "",
    phone: "",
    website: "",
    address: "",
    city: "",
    state: "",
    country: "",

    socialLinks: {
      instagram: "",
      facebook: "",
      youtube: "",
      linkedin: "",
      behance: "",
      dribbble: "",
      pinterest: "",
      twitter: "",
    },
    experience: "",
    isAvailableForWork: false,

    skills: "",
    specialties: "",
    languages: "",
  };

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    watch,
  } = useForm<ArtistForm>({
    defaultValues,
  });
  
  console.log(watch("name"));

  const handleProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setValue("profileImage", e.target.files[0]);
    }
  };

  const handleCoverImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setValue("coverImage", e.target.files[0]);
    }
  };

  useEffect(() => {
    if (mode === "update" && artist) {
        reset({
            profileImage: null,
            coverImage: null,

            name: artist.name,
            profession: artist.profession,
            shortBio: artist.shortBio,
            bio: artist.bio,

            email: artist.email,
            phone: artist.phone,
            website: artist.website,
            address: artist.address,
            city: artist.city,
            state: artist.state,
            country: artist.country,

            socialLinks: {
                instagram: artist.socialLinks?.instagram ?? "",
                facebook: artist.socialLinks?.facebook ?? "",
                youtube: artist.socialLinks?.youtube ?? "",
                linkedin: artist.socialLinks?.linkedin ?? "",
                behance: artist.socialLinks?.behance ?? "",
                dribbble: artist.socialLinks?.dribbble ?? "",
                pinterest: artist.socialLinks?.pinterest ?? "",
                twitter: artist.socialLinks?.twitter ?? "",
            },

            experience: String(artist.experience),
            isAvailableForWork: artist.isAvailableForWork,

            skills: artist.skills.join(", "),
            specialties: artist.specialties.join(", "),
            languages: artist.languages.join(", "),
        });
    }
  }, [artist, mode, reset]);

  const onSubmit = (data: ArtistForm) => {
    const formData = createArtistFormData(data);

    if (mode === "create") {
        createMutation.mutate(formData);
    } else {
        updateMutation.mutate(
            { 
                id: artist!._id, 
                artistData:formData 
            }
        );
    }
  };

  return (
    <> 
    
        <Box sx={{ p: 4, background: "#f5f5f5" }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          >
          <Card sx={{ maxWidth: 1200, mx: "auto", borderRadius: 3 }}>
            <CardContent>

              <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                    mb: 3,
                }}
                >
                Update Artist Profile
              </Typography>

              <Divider sx={{ mb: 4 }} />

              {/* Images */}

              <Grid container size={{ md: 4 }} spacing={3}> 
                <Grid size={{ xs: 12, md: 6 }} >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    Profile Image
                  </Typography>
                  <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}
                    >
                    <Avatar sx={{ width: 90, height: 90 }} />
                    <input
                      hidden
                      type="file"
                      id="profileImage"
                      accept="image/*"
                      onChange={handleProfileImage}
                    />
                    <Button 
                      variant="contained"
                      component="label"
                      htmlFor="profileImage"
                    >
                        Upload
                    </Button>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    Cover Image
                  </Typography>
                  <input
                    hidden
                    type="file"
                    id="coverImage"
                    accept="image/*"
                    onChange={handleCoverImage}
                  />
                  <Button 
                    variant="contained"
                    component="label"
                    htmlFor="coverImage"
                  >
                      Upload Cover
                  </Button>
                </Grid>
              </Grid>

              <Divider sx={{ mb: 4 }} />

              {/* Basic */}

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Basic Information
              </Typography>

              <Grid container spacing={3}>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Name" {...register("name")} />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Profession" {...register("profession")}/>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth label="Short Bio" {...register("shortBio")} />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    label="Bio"
                    {...register("bio")}
                  />
                </Grid>

              </Grid>

              <Divider sx={{ my: 4 }} />

              {/* Contact */}

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Contact Information
              </Typography>

              <Grid container spacing={3}>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Email" {...register("email")} />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Phone" {...register("phone")} />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth label="Website" {...register("website")} />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth label="Address" {...register("address")} />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField fullWidth label="City" {...register("city")} />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField fullWidth label="State" {...register("state")} />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField fullWidth label="Country" {...register("country")} />
                </Grid>

              </Grid>

              <Divider sx={{ my: 4 }} />

              {/* Social */}

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Social Media
              </Typography>

              <Grid container spacing={3}>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Instagram" {...register("socialLinks.instagram")} />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Facebook" {...register("socialLinks.facebook")} />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="YouTube" {...register("socialLinks.youtube")} />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="LinkedIn" {...register("socialLinks.linkedin")} />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Behance" {...register("socialLinks.behance")} />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Dribbble" {...register("socialLinks.dribbble")} />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Pinterest" {...register("socialLinks.pinterest")} />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="X (Twitter)" {...register("socialLinks.twitter")} />
                </Grid>

              </Grid>

              <Divider sx={{ my: 4 }} />

              {/* Professional */}

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Professional Information
              </Typography>

              <Grid container spacing={3}>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    type="number"
                    fullWidth
                    label="Experience (Years)"
                    {...register("experience")}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Typography>
                      Available For Work
                    </Typography>
                    <Controller
                      name="isAvailableForWork"
                      control={control}
                      render={({ field }) => (
                          <Switch
                              checked={field.value}
                              onChange={(e) => field.onChange(e.target.checked)}
                          />
                      )}
                    />
                    {/* <Switch /> */}
                  </Box>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Skills (Comma separated)"
                    {...register("skills")}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Specialties (Comma separated)"
                    {...register("specialties")}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Languages (Comma separated)"
                    {...register("languages")}
                  />
                </Grid>

              </Grid>

              <Divider sx={{ my: 4 }} />

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
                  type="submit"
                  variant="contained"
                  disabled={
                    mode === "create" ? createMutation.isPending : updateMutation.isPending
                  }
                >
                  {
                    mode === "create" ? 
                    (createMutation.isPending ? "Creating..." : "Create Profile") : 
                    (updateMutation.isPending ? "Updating..." : "Update Profile")
                  }
                </Button>
              </Box>

            </CardContent>
          </Card>
        </Box>
    </>
  );
}