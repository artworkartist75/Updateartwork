import { Card,CardMedia,CardContent,Typography,CardActions,Button } from '@mui/material';
import type {ArtworkToApi} from '../types/artwork.types';

interface ArtworkCardProps {
  artwork: ArtworkToApi;
  onEdit: (artwork: ArtworkToApi) => void;
}

export default function ArtworkCard({
  artwork,
  onEdit,
}: ArtworkCardProps) {
  return (
    <Card>
      <CardMedia
        component="img"
        height={220}
        image={artwork.artworkImages[0].url}
      />

      <CardContent>
        <Typography variant="h6">
          {artwork.title}
        </Typography>

        <Typography color="text.secondary">
          ₹{artwork.price}
        </Typography>

        <Typography variant="body2">
          {artwork.category}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          onClick={() => onEdit(artwork)}
        >
          Edit
        </Button>

        <Button
          color="error"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}