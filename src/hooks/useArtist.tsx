import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createArtist, getArtist, updateArtist } from "../api/artistApi"
import toast from "react-hot-toast";


export const useCreateArtist = () => {
    const qureyClient = useQueryClient();
    return useMutation({
        mutationFn: createArtist,
        onSuccess: () => {
            toast.success("Artist Created Successfully!");
            qureyClient.invalidateQueries({
                queryKey: ["artist"]
            });
        },
        onError: () => {
            toast.error("Try After Sometime!");
        }
        
    });
};

export const useUpdateArtist = () => {
    const qureyClient = useQueryClient();
    return useMutation({
        mutationFn: updateArtist,
        onSuccess: () => {
            toast.success("Artist updated successfully!");
            qureyClient.invalidateQueries({
                queryKey: ["artist"]
            });
        },
        onError: () => {
            toast.error("Try After Sometime!");
        }
    });
}

export const useGetArtist = ( /*artistId: string*/) => {
    return useQuery({
        queryKey: ["artist"],
        queryFn: () => getArtist(),
        // enabled: !!artistId,
    });
}