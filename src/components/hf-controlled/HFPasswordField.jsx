import PasswordField from "../enhanced/PasswordField";

import { Controller } from "react-hook-form";

function HFPasswordField({ name, control, rules, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <PasswordField
          inputProps={{ ...field, ...rest }}
          error={error}
          helperText={error?.message}
        />
      )}
    />
  );
}

export default HFPasswordField;
