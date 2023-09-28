import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin(){
    const queryClient = useQueryClient();

    const { mutate: editCabin, isLoading: isEditing } = useMutation({
      mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
      onSuccess: () => {
        toast.success("Cabin successfully Edited");
        queryClient.invalidateQueries({
          queryKeys: ["cabins"],
        });
    
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
    return { editCabin, isEditing };
}