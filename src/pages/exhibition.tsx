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

const eventTypes = [
  "Art Fair",
  "Exhibition",
  "Competition",
  "Workshop",
  "Seminar",
  "Festival",
];

export default function AddExhibition() {
  return (
    <Box sx={{ p: 4, bgcolor: "#f5f5f5" }}>
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
            />

            <TextField
              select
              label="Event Type"
              fullWidth
              required
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
            />

            <TextField
              label="Venue"
              fullWidth
            />

            <TextField
              label="City"
              fullWidth
            />

            <TextField
              label="State"
              fullWidth
            />

            <TextField
              label="Country"
              fullWidth
            />

            <TextField
              type="date"
              label="Start Date"
              // InputLabelProps={{ shrink: true }}
              fullWidth
            />

            <TextField
              type="date"
              label="End Date"
              // InputLabelProps={{ shrink: true }}
              fullWidth
            />

            <TextField
              label="Achievement"
              fullWidth
            />

            <TextField  
              type="number"
              label="Display Order"
              fullWidth
            />
          </Box>

          <Box sx={{ mt: 3 }}>
            <TextField
              label="Description"
              multiline
              rows={5}
              fullWidth
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
            <input hidden type="file" />
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
            <input hidden type="file" multiple />
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
              Save Exhibition
            </Button>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}