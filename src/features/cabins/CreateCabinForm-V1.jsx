/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import styled from "styled-components";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useForm } from "react-hook-form";
// import { createEditCabin } from "../../services/apiCabins";
// import toast from "react-hot-toast";

// import Input from "../../ui/Input";
// import Form from "../../ui/Form";
// import Button from "../../ui/Button";
// import FileInput from "../../ui/FileInput";
// import Textarea from "../../ui/Textarea";
// import FormRow from "../../ui/FormRow";

// function CreateCabinForm({ cabinToEdit = {} }) {
//   const { id: editId, ...editValues } = cabinToEdit;
//   const isEditSession = Boolean(editId);

//   const { register, handleSubmit, reset, getValues, formState } = useForm({
//     defaultValues: isEditSession ? editValues : {},
//   });

//   const { errors } = formState;
//   console.log(errors);

//   const queryClient = useQueryClient();

//   const { mutate, isLoading: isCreating } = useMutation({
//     mutationFn: createEditCabin,
//     onSuccess: () => {
//       toast.success("New Cabin has been successfully created");
//       queryClient.invalidateQueries({
//         queryKeys: ["cabins"],
//       });
//       reset();
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });

//   function onSubmit(data) {
//     mutate({ ...data, image: data.image[0] });
//   }
//   function onError(errors) {
//     console.log(errors);
//   }

//   return (
//     <Form onSubmit={handleSubmit(onSubmit, onError)}>
//       <FormRow label="Cabin name" error={errors?.name?.message}>
//         <Input
//           type="text"
//           id="name"
//           disabled={isCreating}
//           {...register("name", {
//             required: {
//               value: true,
//               message: "Cabin name is required",
//             },
//           })}
//         />
//       </FormRow>

//       <FormRow label="Max Capacity" error={errors?.maxCapacity?.message}>
//         <Input
//           type="number"
//           id="maxCapacity"
//           disabled={isCreating}
//           {...register("maxCapacity", {
//             required: "This field is required",
//             min: {
//               value: 1,
//               message: "Minimum capacity should atleast 1",
//             },
//           })}
//         />
//       </FormRow>

//       <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
//         {" "}
//         <Input
//           type="number"
//           id="regularPrice"
//           disabled={isCreating}
//           {...register("regularPrice", {
//             required: "This field is required",
//             min: {
//               value: 100,
//               message: "Minimum price should be 100 atleast",
//             },
//           })}
//         />
//       </FormRow>

//       <FormRow label="Discount" error={errors?.discount?.message}>
//         {" "}
//         <Input
//           type="number"
//           id="discount"
//           disabled={isCreating}
//           defaultValue={0}
//           {...register("discount", {
//             required: "This field is required",
//             validate: (value) =>
//               value <= getValues().regularPrice ||
//               "Discount should be less than regular Price",
//           })}
//         />
//       </FormRow>

//       <FormRow
//         label="Description for website"
//         error={errors?.description?.message}
//       >
//         <Textarea
//           type="number"
//           id="description"
//           disabled={isCreating}
//           defaultValue=""
//           {...register("description", {
//             required: "This field is required",
//           })}
//         />
//       </FormRow>

//       <FormRow label="Cabin Photo">
//         <FileInput
//           id="image"
//           accept="image/*"
//           {...register("image", {
//             required: isEditSession ? false : "This field is required",
//           })}
//           disabled={isCreating}
//         />
//       </FormRow>

//       <FormRow>
//         {/* type is an HTML attribute! */}
//         <Button variation="secondary" type="reset">
//           Cancel
//         </Button>
//         <Button disabled={isCreating}>
//           {isEditSession ? "Edit cabin" : "Add Cabin"}
//         </Button>
//       </FormRow>
//     </Form>
//   );
// }

// export default CreateCabinForm;
