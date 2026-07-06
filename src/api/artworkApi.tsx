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

export const updateArtwork = async ({id , artworkData}:{id:string, artworkData:any}) => {
    console.log("Artist Data");
    console.log([...artworkData.entries()]);
    const res = await axios.put(`${import.meta.env.VITE_API_URL}/Artist/update/artworks/${id}`, artworkData,{
        headers: {
        "Content-Type": "multipart/form-data",
        },
    });
    return res.data;
};

export const getArtwork = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/Artist/get/artworks`);
    return res.data.data;
}