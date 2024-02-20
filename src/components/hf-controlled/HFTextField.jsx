import TextField from "../enhanced/TextField";

import { Controller } from "react-hook-form";

function HFTextField({ name, control, rules, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          inputProps={{ ...field, ...rest }}
          error={error}
          helperText={error?.message}
        />
      )}
    />
  );
}

export default HFTextField;
