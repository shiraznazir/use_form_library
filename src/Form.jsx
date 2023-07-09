import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    watch,
    clearErrors,
    getValues,
    setValue,
  } = useForm();

  const handleClick = handleSubmit((data)=>{
    console.log("Dat ", data);
  })
  return (
    <>
      <Box component="form" autoComplete="off" noValidate>
        <TextField
          type="text"
          hiddenLabel
          required
          placeholder="Name"
        //   label={("item_group_name")}
          error={Boolean(errors.itemgroup_name)}
          helperText={
            Boolean(errors.itemgroup_name) && errors.itemgroup_name.message
          }
          {...register("itemgroup_name", {
            required: "Required",
            maxLength: {
              value: 50,
              message: "Maximum allowed length is 50",
            },
          })}
          onKeyUp={() => {
            trigger("itemgroup_name");
          }}
        />
        <Button onClick={handleClick}>Save</Button>
      </Box>
    </>
  );
};

export default Form;
