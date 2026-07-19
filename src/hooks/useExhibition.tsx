import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"; 
import { addExhibition, deleteExhibition, getExhibitionList,updateExhibition } from "../api/exhibitionApi";
import toast from "react-hot-toast";

export const useAddExhibition = () => {
    return useMutation({
        mutationFn: addExhibition,
        onSuccess: () => {
            toast.success("Exhibition Added successfully!");
        },
        onError: () => {
            toast.error("Try After Sometime!");
        }
    });
};

export const useUpdateExhibition = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn : updateExhibition,
        onSuccess: () => {
            toast.success("Exhibition updated successfully!");
            queryClient.invalidateQueries({
                queryKey: ["exhibitionList"]
            });
        },
        onError: () => {
            toast.error("Try After Sometime!");
        }
    })
}

export const useGetExhibitionList = () => {
    return useQuery({
        queryKey: ["exhibitionList"], 
        queryFn: getExhibitionList 
    });
};

export const useDeleteExhibition = () => {
    const qureyClient = useQueryClient();
    return useMutation({
        mutationFn: deleteExhibition, 
        onSuccess: () => {
            toast.success("Exhibition delete successfully!");
            qureyClient.invalidateQueries({
                queryKey: ["exhibitionList"]
            });
        },
        onError: () => {
            toast.error("Try After Sometime!");
        }
    })
}