import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";

YupPassword(Yup);

const validationSchema = Yup.object({
  email: Yup.string().required("Email is required").email(),
  password: Yup.string()
    .required("Password is required")
    .min(6)
    .max(12)
    .minLowercase(1)
    .minUppercase(1)
    .minSymbols(1)
    .minNumbers(1),
});

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });

  // console.log(formik.values);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email" style={{ display: "block" }}>
            Email
          </label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <p style={{ color: "red" }}>{formik.errors.email}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="password" style={{ display: "block" }}>
            Password
          </label>
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password ? (
            <p style={{ color: "red" }}>{formik.errors.password}</p>
          ) : null}
        </div>
        <button type="submit">login</button>
      </form>
    </>
  );
};

export default Formik;
