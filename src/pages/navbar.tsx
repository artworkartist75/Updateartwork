import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Artist", path: "/artist" },
    { label: "Artworks", path: "/artworks" },
    { label: "Exhibitions", path: "/exhibitions" },
    { label: "Collaborations", path: "/collaborations" },
  ];

  return (
    <>
      <AppBar position="static" color="primary" elevation={2}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
              },
            }}
          >
            Artist Dashboard
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              gap: 2,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                component={Link}
                to={item.path}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: 250,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              p: 2,
              fontWeight: "bold",
            }}
          >
            Artist Dashboard
          </Typography>

          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.label}
                disablePadding
              >
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}