import axios from "axios";

export const addExhibition = async (exhibitionData: FormData) => {
    console.log("Adding exhibition with data:");
    console.log([...exhibitionData.entries()]);
    const response = await axios.post("/api/exhibitions", exhibitionData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};

export const getExhibitionList = async () => {
    const response = await axios.get("/api/exhibitions");
    return response.data;
};
