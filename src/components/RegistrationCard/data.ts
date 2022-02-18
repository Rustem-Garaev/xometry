import {
  FORM_EMAIL_RULE,
  FORM_LENGTH_RULE,
  FORM_REQUIRED_RULE,
} from "../../constants/formRules";
import { FormRules, REGISTRATION_FORM_FIELDS } from "./types";

export const REGISTRATION_FORM_RULES: FormRules<REGISTRATION_FORM_FIELDS> = {
  [REGISTRATION_FORM_FIELDS.fullName]: [FORM_REQUIRED_RULE],
  [REGISTRATION_FORM_FIELDS.jobTitle]: [FORM_REQUIRED_RULE],
  [REGISTRATION_FORM_FIELDS.email]: [FORM_REQUIRED_RULE, FORM_EMAIL_RULE],
  [REGISTRATION_FORM_FIELDS.phone]: [
    FORM_REQUIRED_RULE,
    FORM_LENGTH_RULE(5, 20),
  ],
  [REGISTRATION_FORM_FIELDS.password]: [
    FORM_REQUIRED_RULE,
    FORM_LENGTH_RULE(5, 20),
  ],
  [REGISTRATION_FORM_FIELDS.agreementToOffers]: [],
  [REGISTRATION_FORM_FIELDS.agreementToTerms]: [
    {
      validator: (_, value) =>
        value
          ? Promise.resolve()
          : Promise.reject(new Error("Should accept agreement")),
    },
  ],
};
