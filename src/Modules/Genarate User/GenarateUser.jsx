import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Error from '../Auth/Error';
import {register} from '../../Services/userService';

import '../Genarate User/user.css';
import '../Auth/CSS/custom.min.css';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  name: Yup.string()
  .required(" Name is Requird")
  .max(50,"Maximum limit reached"),
  email: Yup.string()
  .email("Email must be valid email")
  .required(" Email is Requird as username")
  .min(8, "Password should be more than 5")
  .max(50,"Maximum limit reached"),
  password: Yup.string()
  .required("Password is Required")
  .max(15, "Password should be less than 15")
  .min(5, "Password should be more than 5")
  })
  
const GenarateUser = () => {
    return ( 
         <div>
             
            <Formik
             initialValues={{ email:"", password:"", name:"" }}
             validationSchema={validationSchema}
             
             onSubmit={async (values, { setSubmitting,resetForm }) => {
             setSubmitting(true);
             await register(values);
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
                   
                <div  className="col-md-12 col-sm-12 ">
              
                    <div className="x_title">
                           <h2 className="mainTopicP">Genarate User</h2>
                            <ul className="nav navbar-right panel_toolbox"></ul>
                             <div className="clearfix"></div>
                          </div>
                           <br/>
                    <form  data-parsley-validate className="form-horizontal form-label-left" onSubmit={handleSubmit} onReset={resetForm}>
                    <div className="item form-group title">
                       <label className="col-form-label col-md-3 col-sm-3 label-align" for="first-name">Name </label>    
                         <div className="col-md-5 col-sm-5 ">
                              <input className ="form-control" 
                               type="text"
                               name="name"
                               placeholder="Name"
                               value = {values.name}
                               onChange={handleChange}
                               onBlur={handleBlur}
                              ></input>
                              <Error  touched={touched.name} message={errors.name} />
                            </div>
                           </div>
                           <div className="item form-group title">
                       <label className="col-form-label col-md-3 col-sm-3 label-align" for="first-name">Email </label>    
                         <div className="col-md-5 col-sm-5 ">
                              <input className ="form-control" 
                               type="text"
                               name="email"
                               placeholder="Email"
                               value = {values.email}
                               onChange={handleChange}
                               onBlur={handleBlur}
                              ></input>
                              <Error  touched={touched.email} message={errors.email} />
                            </div>
                           </div>

                         <div className="item form-group title">
                            <label className="col-form-label col-md-3 col-sm-3 label-align" for="first-name"> Password </label>    
                             <div className="col-md-5 col-sm-5 ">
                              <input className ="form-control" 
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
          
                           {isSubmitting ? (<div id="cover-spin"></div>) : (<div>
                  <div className="item form-group ">
                    <div className="col-md-5 col-sm-5 offset-md-3 ">
                      <button
                        type="submit"
                        className="btn btn-warning"
                        disabled={!isValid}
                        style={{backgroundColor:"rgb(238, 112, 9)"}}
                      ><p style={{ height: "9px",color:"white", fontWeight: "400" }}>Submit</p>

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
 
export default GenarateUser;

