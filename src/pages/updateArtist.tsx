import { useGetArtist } from "../hooks/useArtist";
import ArtistInfo from "../components/artistInfo";
import CreateUpdatePage from "../components/createUpdatePage";

export default function UpdateArtist() {

  const { data: artistData, isLoading, isError } = useGetArtist();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError || !artistData) {
    return <h2>Something went wrong</h2>;
  }
  return (
    <> 
      {
        artistData?.length > 0 ? 
        (<ArtistInfo artist={artistData[0]} />) : 
        (<CreateUpdatePage mode="create" />) 
      }      
    </>
  );
}