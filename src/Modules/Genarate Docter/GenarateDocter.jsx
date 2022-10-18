import React from 'react';
import * as Yup from 'yup';
import '../Auth/CSS/custom.min.css';
import { Formik } from 'formik';
import { Docregister } from '../../Services/docService';
import { toast } from 'react-toastify';
import Error from '../Auth/Error';

const validationSchema = Yup.object().shape({
  
  name: Yup.string()
  .required(" Name is Requird")
  .matches(/^[A-Za-z _.]+$/, "Not valid")
  .trim(),
  username: Yup.string()
    .required(" User Name is Requird")
    .trim(),
  password: Yup.string()
    .required(" Password is Requird")
    .trim(),
  email: Yup.string()
    .required(" Email is Requird")
    .email("Email must be valid email")
    .trim(),
  phone: Yup.string()
    .required("Docter Phonenumber is Required")
    .matches(/^[0-9]{10}$/, 'Phone number Must be like xxxxxxxxxx')
    .matches(/^[0-9]{10}$/, 'Not valid')
    .trim(),

})

const GenarateDocter = () => {
  return (
    <div>

      <Formik
        initialValues={{ name: "",username: "",password: "", email: "",phone: "" }}
        validationSchema={validationSchema}

        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          await Docregister(values);
          toast.info("Successfully created new account")
          resetForm();
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm,
          isValid,
          isSubmitting,
          errors,
        touched,
        }) => (

            <div className="col-md-12 col-sm-12 ">
              <div className="x_title">
                <h2 className="mainTopicP">Genarate Docter</h2>
                <ul className="nav navbar-right panel_toolbox"> </ul>
                <div className="clearfix"></div>
              </div>

              <form data-parsley-validate className="form-horizontal form-label-left" onSubmit={handleSubmit} onReset={resetForm}>
                <br />
                <div className="item form-group title">
                  <label className="col-form-label col-md-3 col-sm-3 label-align" for="first-name">Docter Name </label>
                  <div className="col-md-5 col-sm-5 ">
                    <input className="form-control"
                      type="text"
                      name="name"
                      placeholder="Docter Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    >
                    </input>
                    <Error  touched={touched.name} message={errors.name} />
                  </div>
                </div>

                <div className="item form-group title">
                  <label className="col-form-label col-md-3 col-sm-3 label-align" for="first-name">Username </label>
                  <div className="col-md-5 col-sm-5 ">
                    <input className="form-control"
                      type="text"
                      name="username"
                      placeholder="Username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    ></input>
                    <Error  touched={touched.username} message={errors.username} />
                  </div>
                </div>
                <div className="item form-group title">
                  <label className="col-form-label col-md-3 col-sm-3 label-align" for="first-name">Password </label>
                  <div className="col-md-5 col-sm-5 ">
                    <input className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    ></input>
                    <Error  touched={touched.password} message={errors.password} />
                  </div>
                </div>
                <div className="item form-group title">
                  <label className="col-form-label col-md-3 col-sm-3 label-align" for="first-name">Email </label>
                  <div className="col-md-5 col-sm-5 ">
                    <input className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    ></input>
                    <Error  touched={touched.email} message={errors.email} />
                  </div>
                </div>
                <div className="item form-group title">
                  <label className="col-form-label col-md-3 col-sm-3 label-align" for="first-name">Phone Number </label>
                  <div className="col-md-5 col-sm-5 ">
                    <input className="form-control"
                      type="text"
                      name="phone"
                      placeholder="Phonenumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    ></input>
                    <Error  touched={touched.phone} message={errors.phone} />
                  </div>
                </div>
                {isSubmitting ? (<div id="cover-spin"></div>) : (<div>
                  <div className="item form-group ">
                    <div className="col-md-5 col-sm-5 offset-md-3 ">
                      <button
                        type="submit"
                        className="btn btn-warning"
                        disabled={!isValid}
                        style={{ backgroundColor: "rgb(238, 112, 9)" }}
                      ><p style={{ height: "9px", color: "white", fontWeight: "400" }}>Submit</p>

                      </button>
                      <button className="btn btn-secondary buttn"
                        type="reset"
                      >
                        Reset
                      </button>

                    </div>
                  </div>
                </div>)}
              </form>
            </div>
          )}

      </Formik>
    </div>
  );
}

export default GenarateDocter;