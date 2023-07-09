import { useForm } from "react-hook-form";
import "./App.css";

function SimpleForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    trigger,
    setValue,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Log In</h1>

          <input
            className="input-field"
            type="text"
            required
            label={"User Name"}
            placeholder="User Name"
            error={Boolean(errors.user_name)}
            helperText={Boolean(errors.user_name) && errors.user_name.message}
            {...register("user_name", {
              required: "Required",
              maxLength: {
                value: 50,
                message: "Maximum allowed length is 50",
              },
            })}
            onKeyUp={() => {
              trigger("user_name");
            }}
          />
          <input
            type="text"
            required
            placeholder="Password"
            className="input-field"
            {...register("password", {
              required: true,
            })}
          />
          <button type="submit" className="input-field" >Save</button>
        </form>
      </header>
    </div>
  );
}

export default SimpleForm;