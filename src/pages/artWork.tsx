import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

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

export default function Artwork() {
  return (
    <Box sx={{ p: 4, bgcolor: "#f5f5f5" }}>
      <Card sx={{ maxWidth: 1000, mx: "auto", borderRadius: 3 }}>
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
            />

            <TextField
              label="Slug"
              fullWidth
              required
            />

            <TextField
              select
              label="Category"
              fullWidth
              required
            >
              {categories.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Medium"
              fullWidth
              placeholder="Oil on Canvas"
            />

            <TextField
              label="Year Created"
              type="number"
              fullWidth
            />

            <TextField
              label="Tags"
              fullWidth
              placeholder="Nature, Portrait, Modern"
            />
          </Box>

          <Box sx={{ mt: 3 }}>
            <TextField
              label="Description"
              multiline
              rows={5}
              fullWidth
              required
            />
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Dimensions */}

          <Typography variant="h6" sx={{ mb: 2 }}>
            Dimensions
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr 1fr",
              },
              gap: 3,
            }}
          >
            <TextField
              label="Width"
              type="number"
              fullWidth
            />

            <TextField
              label="Height"
              type="number"
              fullWidth
            />

            <TextField
              label="Unit"
              defaultValue="cm"
              fullWidth
            />
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Pricing */}

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
            />

            <TextField
              select
              label="Status"
              defaultValue="Available"
              fullWidth
            >
              {status.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Upload */}

          <Typography variant="h6" sx={{ mb: 2 }}>
            Artwork Images
          </Typography>

          <Button
            variant="contained"
            component="label"
          >
            Upload Images
            <input hidden type="file" multiple />
          </Button>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" sx={{ mb: 2 }}>
            Artwork Video
          </Typography>

          <Button
            variant="contained"
            component="label"
          >
            Upload Video
            <input hidden type="file" accept="video/*" />
          </Button>

          <Divider sx={{ my: 4 }} />

          {/* Options */}

          <Typography variant="h6" sx={{ mb: 2 }}>
            Options
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Featured Artwork"
            />

            <FormControlLabel
              control={<Checkbox />}
              label="Available For Sale"
            />
          </Box>

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
              Save Artwork
            </Button>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}