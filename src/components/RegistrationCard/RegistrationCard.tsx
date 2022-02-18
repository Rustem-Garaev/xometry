import React from "react";
import css from "./RegistrationCard.module.css";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { ReactComponent as BagIcon } from "assets/icons/form/bag.svg";
import { ReactComponent as LockIcon } from "assets/icons/form/lock.svg";
import { ReactComponent as MailIcon } from "assets/icons/form/mail.svg";
import { ReactComponent as UserIcon } from "assets/icons/form/user.svg";
import { ReactComponent as PhoneIcon } from "assets/icons/form/phone.svg";
import { REGISTRATION_FORM_FIELDS } from "./types";
import { REGISTRATION_FORM_RULES } from "./data";
import { useForm } from "antd/es/form/Form";

const RegistrationCard = () => {
  const [form] = useForm();
  const handleGeneratePassword = () => {
    form.setFieldsValue({ [REGISTRATION_FORM_FIELDS.password]: "password" });
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Create an account</h1>
      <p className={css.subtitle}>
        Looking to become a partner?{" "}
        <Typography.Link href="/" strong>
          Sign up here
        </Typography.Link>
      </p>
      <Form size="large" className={css.form} form={form}>
        <div className={css.inputFields}>
          <Form.Item
            name={REGISTRATION_FORM_FIELDS.fullName}
            rules={REGISTRATION_FORM_RULES[REGISTRATION_FORM_FIELDS.fullName]}
          >
            <Input
              prefix={<UserIcon className={css.inputIcon} />}
              placeholder="Full Name *"
            />
          </Form.Item>
          <Form.Item
            name={REGISTRATION_FORM_FIELDS.jobTitle}
            rules={REGISTRATION_FORM_RULES[REGISTRATION_FORM_FIELDS.jobTitle]}
          >
            <Input
              prefix={<BagIcon className={css.inputIcon} />}
              placeholder="Job title *"
            />
          </Form.Item>
          <Form.Item
            name={REGISTRATION_FORM_FIELDS.email}
            rules={REGISTRATION_FORM_RULES[REGISTRATION_FORM_FIELDS.email]}
          >
            <Input
              prefix={<MailIcon className={css.inputIcon} />}
              type="email"
              placeholder="Email *"
            />
          </Form.Item>
          <Form.Item
            name={REGISTRATION_FORM_FIELDS.phone}
            rules={REGISTRATION_FORM_RULES[REGISTRATION_FORM_FIELDS.phone]}
          >
            <Input
              prefix={<PhoneIcon className={css.inputIcon} />}
              placeholder="Phone with country code *"
            />
          </Form.Item>

          <Form.Item className={css.password}>
            <div className={css.passwordContent}>
              <Form.Item
                name={REGISTRATION_FORM_FIELDS.password}
                rules={
                  REGISTRATION_FORM_RULES[REGISTRATION_FORM_FIELDS.password]
                }
                noStyle
              >
                <Input.Password
                  prefix={<LockIcon className={css.inputIcon} />}
                  placeholder="Password *"
                />
              </Form.Item>
              <Button
                type="link"
                className={css.generatePasswordBtn}
                onClick={handleGeneratePassword}
              >
                Generate password
              </Button>
            </div>
          </Form.Item>
        </div>
        <div className={css.agreements}>
          <Form.Item
            name={REGISTRATION_FORM_FIELDS.agreementToOffers}
            valuePropName="checked"
            rules={
              REGISTRATION_FORM_RULES[
                REGISTRATION_FORM_FIELDS.agreementToOffers
              ]
            }
            className={css.agreementItem}
          >
            <Checkbox>
              I agree to receive service and product updates, special offers and
              discounts.
            </Checkbox>
          </Form.Item>
          <Form.Item
            name={REGISTRATION_FORM_FIELDS.agreementToTerms}
            valuePropName="checked"
            rules={
              REGISTRATION_FORM_RULES[REGISTRATION_FORM_FIELDS.agreementToTerms]
            }
            className={css.agreementItem}
          >
            <Checkbox>
              I reviewed and agree to Xometry Europe's{" "}
              <Typography.Link href="/" strong>
                Terms and Conditions
              </Typography.Link>{" "}
              and{" "}
              <Typography.Link href="/" strong>
                Privacy Policy
              </Typography.Link>
              .
            </Checkbox>
          </Form.Item>
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className={css.submit}
          >
            Create account
          </Button>
        </Form.Item>
      </Form>
      <p className={css.footnote}>
        Already registered?{" "}
        <Typography.Link strong href="/">
          Login to your account
        </Typography.Link>
      </p>
    </div>
  );
};

export default RegistrationCard;
