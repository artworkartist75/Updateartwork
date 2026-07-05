import axios from "axios";

//post 
export const createArtist = async (artistData: any) => {
    // console.log("Artist Data sending to db api");
    // console.log([...artistData.entries()]);
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/Artist/upload/artistDetails`, artistData,{
        headers: {
        "Content-Type": "multipart/form-data",
        },
    });
    // console.log("Response from API");
    // console.log(res.data);
    return res.data;
};

//update 
export const updateArtist = async ({id , artistData}:{id:string, artistData:any}) => {
    console.log("Artist Data");
    console.log([...artistData.entries()]);
    const res = await axios.put(`${import.meta.env.VITE_API_URL}/Artist/update/artistDetails/${id}`, artistData,{
        headers: {
        "Content-Type": "multipart/form-data",
        },
    });
    return res.data;
};

//get
export const getArtist = async (/*artistId: string*/) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/Artist/get/artistDetails`);
    // console.log("Response from API of Artist Info");
    // console.log(response.data.data);
    return response.data.data;
};

