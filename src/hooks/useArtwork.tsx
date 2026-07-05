import { useMutation, useQuery } from "@tanstack/react-query"
import { createArtwork, getArtwork } from "../api/artworkApi"


export const useAddArtWork = () => {
    return useMutation({
        mutationFn: createArtwork
    });
};

export const useGetArtWork = () => {
    return useQuery({
        queryKey: ["getArtwork"],
        queryFn: () => getArtwork(),
    });
}