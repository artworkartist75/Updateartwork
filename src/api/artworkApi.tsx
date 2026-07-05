import axios from "axios";

export const createArtwork = async (artworkData: any) => {
    console.log("Artwork Data");
    console.log([...artworkData.entries()]);
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/Artist/upload/artworks`, artworkData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
     });
    return res; 
}

export const getArtwork = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/Artist/artworks`);
    return res;
}