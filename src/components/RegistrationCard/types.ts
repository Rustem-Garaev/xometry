import { Rule } from "antd/es/form";

export enum REGISTRATION_FORM_FIELDS {
  fullName = "fullName",
  jobTitle = "jobTitle",
  email = "email",
  phone = "phone",
  password = "password",
  agreementToOffers = "agreementToOffers",
  agreementToTerms = "agreementToTerms",
}

export type FormRules<T extends string> = Partial<Record<T, Rule[]>>;
