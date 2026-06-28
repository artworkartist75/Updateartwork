import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

export default function Collaboration() {
  return (
    <Box
        sx={{
            p: {
            xs: 2,
            sm: 3,
            md: 4,
            },
            bgcolor: "#f5f5f5",
        }}
        >
        <Card
            sx={{
            maxWidth: 900,
            mx: "auto",
            borderRadius: 3,
            }}
        >
            <CardContent
            sx={{
                p: {
                xs: 2,
                sm: 3,
                md: 4,
                },
            }}
            >
            <Typography
                variant="h4"
                sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: {
                    xs: "1.7rem",
                    sm: "2rem",
                },
                }}
            >
                Add Collaboration
            </Typography>

            <Divider sx={{ mb: 4 }} />

            <Box
                sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    md: "1fr 1fr",
                },
                gap: {
                    xs: 2,
                    md: 3,
                },
                }}
            >
                <TextField label="Collaboration Title" fullWidth required />

                <TextField label="Company Name" fullWidth />

                <TextField
                label="Website"
                fullWidth
                placeholder="https://example.com"
                />

                <TextField
                type="number"
                label="Display Order"
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

            <Typography variant="h6" sx={{ mb: 2 }}>
                Company Logo
            </Typography>

            <Button
                variant="contained"
                component="label"
                // fullWidth={{ xs: true, sm: false }}
                sx={{
                width: {
                    xs: "100%",
                    sm: "auto",
                },
                }}
            >
                Upload Logo
                <input hidden type="file" accept="image/*" />
            </Button>

            <Divider sx={{ my: 4 }} />

            <Box
                sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    sm: "row",
                },
                gap: 2,
                }}
            >
                <FormControlLabel
                control={<Checkbox />}
                label="Current Collaboration"
                />

                <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Active"
                />
            </Box>

            <Box
                sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    sm: "row",
                },
                justifyContent: "flex-end",
                gap: 2,
                mt: 5,
                }}
            >
                <Button
                variant="outlined"
                fullWidth
                >
                Cancel
                </Button>

                <Button
                variant="contained"
                fullWidth
                >
                Save Collaboration
                </Button>
            </Box>
            </CardContent>
        </Card>
        </Box>
  );
}