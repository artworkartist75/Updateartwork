import axios from "axios";

export const addExhibition = async (exhibitionData: FormData) => {
    console.log("Adding exhibition with data:");
    console.log([...exhibitionData.entries()]);
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/Artist/upload/exhibitions`, exhibitionData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};

export const updateExhibition = async ({id,exhibitionData}:{id:String,exhibitionData: FormData}) => {
    console.log("Adding exhibition with data:");
    console.log([...exhibitionData.entries()]);
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/Artist/update/exhibition/${id}`, exhibitionData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};

export const getExhibitionList = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/Artist/get/exhibitions`);
    return response.data.data;
};

export const deleteExhibition = async (id:String) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/Artist/delete/exhibition/${id}`);
}