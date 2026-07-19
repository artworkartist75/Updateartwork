import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createArtwork, deleteArtwork, getArtwork, updateArtwork } from "../api/artworkApi"
import toast from "react-hot-toast";


export const useAddArtWork = () => {
    const qureyClient = useQueryClient();
    return useMutation({
        mutationFn: createArtwork,
        onSuccess: () => {
            toast.success("ArtWork updated successfully!");
            qureyClient.invalidateQueries({
                queryKey: ["getArtwork"]
            });
        },
        onError: () => {
            toast.error("Try After Sometime!");
        }
    });
};

export const useUpdateArtwork = () => {
    const qureyClient = useQueryClient();
    return useMutation({
        mutationFn: updateArtwork,
        onSuccess: () => {
            toast.success("ArWork updated successfully!");
            qureyClient.invalidateQueries({
                queryKey: ["getArtwork"]
            });
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

export const useDeleteArtwork = () => {
    const qureyClient = useQueryClient();
    return useMutation({
        mutationFn: deleteArtwork, 
        onSuccess: () => {
            toast.success("Artwork delete successfully!");
            qureyClient.invalidateQueries({
                queryKey: ["getArtwork"]
            });
        },
        onError: () => {
            toast.error("Try After Sometime!");
        }
    })
}