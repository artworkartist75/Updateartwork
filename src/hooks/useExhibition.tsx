import { useMutation, useQuery } from "@tanstack/react-query"; 
import { addExhibition, getExhibitionList } from "../api/exhibitionApi";

export const useAddExhibition = () => {
    return useMutation({
        mutationFn: addExhibition 
    });
};

export const useGetExhibitionList = () => {
    return useQuery({
        queryKey: ["exhibitionList"], 
        queryFn: getExhibitionList 
    });
};
