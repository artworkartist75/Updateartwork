import { Card,CardMedia,CardContent,Typography,CardActions,Button } from '@mui/material';
import type { ExhibitionToApi } from '../types/exhibition.types';
import { useDeleteExhibition } from '../hooks/useExhibition';

interface ExhibitionCardProps {
  exhibition: ExhibitionToApi;
  onEdit: (artwork: ExhibitionToApi) => void;
}

export default function ExhibitionCard({
  exhibition,
  onEdit,
}: ExhibitionCardProps) {
  const {mutate: deleteExhibitionMutation, isPending: isDeleting,} = useDeleteExhibition();
  console.log("exhibition data: ", exhibition);

  const handleDelete = (id:string) => {
    deleteExhibitionMutation(id);
  }

  return (
    <Card>
      <CardMedia
        component="img"
        height={220}
        image={exhibition.eventImages[0].url}
      />

      <CardContent>
        <Typography variant="h6">
          {exhibition.title}
        </Typography>

        <Typography color="text.secondary">
          {exhibition.organizer}
        </Typography>

        <Typography variant="body2">
          {exhibition.city}
        </Typography>

        <Typography variant="body2">
          {exhibition.state}
        </Typography>

        <Typography variant="body2">
          {exhibition.country}
        </Typography>
        
        <Typography variant="body2">
          {exhibition.description}
        </Typography>

      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          onClick={() => onEdit(exhibition)}
        >
          Edit
        </Button>

        <Button
          color="error"
          onClick={() => handleDelete(exhibition!._id)}
        >
          {isDeleting? "Deleting...": "Delete"}
        </Button>
      </CardActions>
    </Card>
  );
}