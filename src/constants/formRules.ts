import { Rule } from "antd/lib/form";

export const FORM_REQUIRED_RULE: Rule = {
  required: true,
  message: "field is required",
};

export const FORM_EMAIL_RULE: Rule = {
  type: "email",
  message: "Please enter a valid email",
};

export const FORM_LENGTH_RULE = (min: number, max: number): Rule => ({
  pattern: new RegExp(`^.{${min},${max}}$`),
  message: `Number of characters must be between ${min} and ${max}`,
});
