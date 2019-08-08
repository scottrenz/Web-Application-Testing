import React, { useState, useEffect } from 'react';
// import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
import Display from "./Display";
import axios from "axios";


function LoginForm({ values, errors, touched, isSubmitting, handleSubmit, status }) {
    const [ball, setBall] = useState(0)
    const [strike, setStrike] = useState(0)
    // console.log('users up',users);
  // console.log('status up',status);
//   console.log('strike',status.strike)

  useEffect(() => {
    if (status) {
        if (status.ball+status.strike+status.foul+status.over === 1) {
            if (status.over)
            {
                    setBall(0)
                    setStrike(0)
            }        
            if (status.ball)
            {
                if (ball === 3)
                {
                    setBall(0)
                    setStrike(0)
                }
                else
                {
                    setBall(parseInt(ball) + 1)
                }
            }        
            if (status.strike)
            {
                if (strike === 2)
                {
                    setBall(0)
                    setStrike(0)
                }
                else
                {
                    setStrike(parseInt(strike) + 1)
                }
            }
            if (status.foul)
            {
                if (parseInt(strike) === 2)
                {
                }
                else
                {
                    setStrike(parseInt(strike) + 1)
                }
            }
                    
                                // console.log('strike',status.ball+status.strike+status.foul)
        // setUsers([...users, status]);
    }
}
}, [status]);

  return (
    <div>
    <Form >
      <label>Ball
        <Field style={{width: '50px'}} type="checkbox" name="ball" checked={values.ball} />
      </label>
      <label>Strike
        <Field style={{width: '50px'}} type="checkbox" name="strike" checked={values.strike} />
      </label>
      <label>Foul
        <Field style={{width: '50px'}} type="checkbox" name="foul" checked={values.foul} />
      </label>
      <label>At Bat Has Ended
        <Field style={{width: '50px'}} type="checkbox" name="over" checked={values.over} />
      </label>
      <button disabled={isSubmitting}>Submit</button>

    </Form>
<Display ball={ball} strike={strike} />
</div>
  );
}

const Dashboard = withFormik({
  mapPropsToValues({ ball, strike, foul, over }) {
    return {
      ball: ball || false,
      strike: strike || false,
      foul: foul || false,
      over: over || false
    };
  },

//   validationSchema: Yup.object().shape({
//     player: Yup.string()
//       .min(2, "player must be 2 characters or longer")
//       .required("player is required"),
//   }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    if (false ) {
      setErrors({ player: "That player is already taken" });
    } else {
      axios
      // https://reqres.in/api/users
      .post("https://reqres.in/api/users", values)
      // .post("https://yourdatabaseurlgoeshere.com", values)
      .then(res => {
        setStatus(res.data);
        // console.log(res.data); // Data was created successfully and logs to console
        // console.log('status',status); // Data was created successfully and logs to console
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  }
})(LoginForm);

export default Dashboard;
