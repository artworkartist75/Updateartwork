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

export default function UpdateArtist() {
  return (
    <Box sx={{ p: 4, background: "#f5f5f5" }}>
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
                <Button variant="contained">
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
              <Button variant="contained">
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
              <TextField fullWidth label="Name" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Profession" />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Short Bio" />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                multiline
                rows={5}
                label="Bio"
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
              <TextField fullWidth label="Email" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Phone" />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Website" />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Address" />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth label="City" />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth label="State" />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth label="Country" />
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
              <TextField fullWidth label="Instagram" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Facebook" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="YouTube" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="LinkedIn" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Behance" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Dribbble" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Pinterest" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="X (Twitter)" />
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

                <Switch />
              </Box>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Skills (Comma separated)"
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Specialties (Comma separated)"
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Languages (Comma separated)"
              />
            </Grid>

          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Resume */}

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
            }}
          >
            Resume
          </Typography>

          <Button variant="outlined">
            Upload Resume
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

            <Button variant="contained">
              Update Profile
            </Button>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}