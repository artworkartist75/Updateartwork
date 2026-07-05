import { useMutation, useQuery } from "@tanstack/react-query"
import { createArtist, getArtist, updateArtist } from "../api/artistApi"
import toast from "react-hot-toast";


export const useCreateArtist = () => {
    return useMutation({
        mutationFn: createArtist,
        
        onSuccess: () => {
            toast.success("Artist Created Successfully!");
        },
        onError: () => {
            toast.error("Try After Sometime!");
        }
        
    });
};

export const useUpdateArtist = () => {
    return useMutation({
        mutationFn: updateArtist,
        
        onSuccess: () => {
        toast.success("Artist updated successfully!");
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