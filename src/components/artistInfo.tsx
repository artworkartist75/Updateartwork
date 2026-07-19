import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import UpdateArtistModal from "../utils/UpdateArtistModal";

import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaBehance,
  FaDribbble,
  FaPinterest,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";

import type { ArtistToApi } from '../types/artist.types';

type Props = {
  artist: ArtistToApi;
};

export default function ArtistInfo({ artist }: Props) {
  console.log("Artist Info Component - Artist Data:", artist);
  const [open, setOpen] = useState(false);
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      {/* Cover */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 300,
          borderRadius: 3,
          overflow: "hidden",
          mb: 8,
        }}
      >
        {artist?.coverImage && (
          <img
            src={artist.coverImage[0].url}
            alt={artist.name}
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        )}
      </Box>

      {/* Profile */}

      <Box
        sx={{
          textAlign: "center",
          mt: -18,
          mb: 5,
        }}
      >
        <Avatar
          src={artist.profileImage[0].url}
          sx={{
            width: 170,
            height: 170,
            mx: "auto",
            border: "5px solid white",
          }}
        />

        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mt: 2,
          }}
        >
          {artist.name}
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {artist.profession}
        </Typography>

        <Typography
          sx={{
            mt: 2,
            maxWidth: 700,
            mx: "auto",
          }}
        >
          {artist.shortBio}
        </Typography>
      </Box>
        
      <Grid container spacing={4}>
        {/* Left */}

        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent>

              <Typography
                variant="h5"
                sx={{ fontWeight: 700 }}
              >
                About
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Typography>
                {artist.bio}
              </Typography>

              <Typography
                variant="h5"
                sx={{ mt: 5, fontWeight: 700 }}
              >
                Skills
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Stack
                direction="row"
                sx={{ spacing: 1, flexWrap: "wrap" }}
                useFlexGap
              >
                {artist.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                  />
                ))}
              </Stack>

              <Typography
                variant="h5"
                sx={{ mt: 5, fontWeight: 700 }}
              >
                Specialties
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Stack
                direction="row"
                useFlexGap
                sx={{ spacing: 1, flexWrap: "wrap" }}
              >
                {artist.specialties.map((item) => (
                  <Chip
                    key={item}
                    color="primary"
                    label={item}
                  />
                ))}
              </Stack>

              <Typography
                variant="h5"
                sx={{ mt: 5, fontWeight: 700 }}
              >
                Languages
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Stack
                direction="row"
                sx={{ spacing: 1, flexWrap: "wrap" }}
                useFlexGap
              >
                {artist.languages.map((lang) => (
                  <Chip
                    key={lang}
                    label={lang}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Right */}

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>

              <Typography
                variant="h5"
                sx={{ fontWeight: 700 }}
              >
                Contact
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Stack spacing={2} sx={{mb:3}}>

                <Box sx={{gap: 2, display: "flex"}}>
                  <FaEnvelope />
                  <Typography>{artist.email}</Typography>
                </Box>

                <Box sx={{gap: 2, display: "flex"}}>
                  <FaPhone />
                  <Typography>{artist.phone}</Typography>
                </Box>

                <Box sx={{gap: 2, display: "flex"}}>
                  <FaGlobe />
                  <Link
                    href={artist.website}
                    target="_blank"
                  >
                    {artist.website}
                  </Link>
                </Box>

                <Box sx={{gap: 2, display: "flex"}}>
                  <FaLocationDot />
                  <Typography>
                    {artist.address}
                    <br />
                    {artist.city}, {artist.state}
                    <br />
                    {artist.country}
                  </Typography>
                </Box>

              </Stack>

              <Typography
                variant="h5"
                sx={{ mb: 2, fontWeight: 700 }}
              >
                Professional
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Typography>
                <strong>Experience:</strong>{" "}
                {artist.experience} Years
              </Typography>

              <Typography sx={{mt:1}}>
                <strong>Available:</strong>{" "}
                {artist.isAvailableForWork
                  ? "Yes"
                  : "No"}
              </Typography>

              {/* <Typography
                variant="h5"
                sx={{ mt: 5, fontWeight: 700 } }
              >
                Social Media
              </Typography>

              <Divider sx={{ my: 2 }} /> */}

              <Stack
                direction="row"
                sx={{ spacing: 2, fontSize: 26, mt:2 }}
              >
                {artist.socialLinks?.instagram && (
                  <Link
                    href={artist.socialLinks.instagram}
                    target="_blank"
                  >
                    <FaInstagram />
                  </Link>
                )}

                {artist.socialLinks?.facebook && (
                  <Link
                    href={artist.socialLinks.facebook}
                    target="_blank"
                  >
                    <FaFacebook />
                  </Link>
                )}

                {artist.socialLinks?.youtube && (
                  <Link
                    href={artist.socialLinks.youtube}
                    target="_blank"
                  >
                    <FaYoutube />
                  </Link>
                )}

                {artist.socialLinks?.linkedin && (
                  <Link
                    href={artist.socialLinks.linkedin}
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Link>
                )}

                {artist.socialLinks?.behance && (
                  <Link
                    href={artist.socialLinks.behance}
                    target="_blank"
                  >
                    <FaBehance />
                  </Link>
                )}

                {artist.socialLinks?.dribbble && (
                  <Link
                    href={artist.socialLinks.dribbble}
                    target="_blank"
                  >
                    <FaDribbble />
                  </Link>
                )}

                {artist.socialLinks?.pinterest && (
                  <Link
                    href={artist.socialLinks.pinterest}
                    target="_blank"
                  >
                    <FaPinterest />
                  </Link>
                )}

                {artist.socialLinks?.twitter && (
                  <Link
                    href={artist.socialLinks.twitter}
                    target="_blank"
                  >
                    <FaTwitter />

                  </Link>
                )}
              </Stack>

            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Button
        sx={{mt:2}}
        variant="contained"
        onClick={() => setOpen(true)}
      >
        Edit Profile
      </Button>

      <UpdateArtistModal
        open={open}
        onClose={() => setOpen(false)}
        artist={artist}
      />
    </Container>
  );
}