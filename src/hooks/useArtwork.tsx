import { useMutation, useQuery } from "@tanstack/react-query"
import { createArtwork, getArtwork, updateArtwork } from "../api/artworkApi"
import toast from "react-hot-toast";


export const useAddArtWork = () => {
    return useMutation({
        mutationFn: createArtwork,
        onSuccess: () => {
            toast.success("ArtWork updated successfully!");
        },
        onError: () => {
            toast.error("Try After Sometime!");
        }
    });
};

export const useUpdateArtwork = () => {
    return useMutation({
        mutationFn: updateArtwork,
        onSuccess: () => {
            toast.success("ArWork updated successfully!");
        },
        onError: () => {
            toast.error("Try After Sometime!");
        }
    });
};

export const useGetArtWork = () => {
    return useQuery({
        queryKey: ["getArtwork"],
        queryFn: () => getArtwork(),
    });
}