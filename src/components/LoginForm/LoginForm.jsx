import css from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

export default function LoginForm({ onLogin }) {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    message: Yup.string()
      .min(3, "Too short")
      .max(256, "Too long")
      .required("Required"),
    level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
  });

  const initialValues = {
    username: "",
    email: "",
    message: "",
    level: "good",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    if (onLogin) {
      onLogin(values);
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.labelContainer}>
          <label className={css.labelText} htmlFor={nameFieldId}>
            Username
          </label>
          <Field
            className={css.inputField}
            type="text"
            name="username"
            id={nameFieldId}
          />
          <ErrorMessage name="username" component="span" />
        </div>

        <div className={css.labelContainer}>
          <label className={css.labelText} htmlFor={emailFieldId}>
            Email
          </label>
          <Field
            className={css.inputField}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage name="email" component="span" />
        </div>

        <div className={css.labelContainer}>
          <label className={css.labelText} htmlFor={msgFieldId}>
            Message
          </label>
          <Field
            className={css.inputField}
            as="textarea"
            name="message"
            id={msgFieldId}
            rows="5"
          />
          <ErrorMessage name="message" component="span" />
        </div>

        <div className={css.labelContainer}>
          <label className={css.labelText} htmlFor={levelFieldId}>
            Service satisfaction level
          </label>
          <Field
            className={css.inputField}
            as="select"
            name="level"
            id={levelFieldId}
          >
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Field>
          <ErrorMessage name="level" component="span" />
        </div>

        <button className={css.submitButton} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
