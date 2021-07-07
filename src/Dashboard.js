import React, { useEffect } from 'react';
// import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
import Display from "./Display";
import axios from "axios";


function LoginForm({ values, errors, touched, isSubmitting, handleSubmit, status }) {
    // const [data, setData] = useState('')
    // const [ball, setBall] = useState(0)
    // const [strike, setStrike] = useState(0)
  
    // console.log('users up',users);
  // console.log('status up',status);
//   console.log('strike',status.strike)

  useEffect(() => {

    function gb () {return parseInt(localStorage.getItem('ball'))}
    function gs () {return parseInt(localStorage.getItem('strike'))}
    function sb (b) {localStorage.setItem('ball', b)}
    function ss (s) {localStorage.setItem('strike', s)}

    if (status) {
        if (status.ball+status.strike+status.foul+status.over === 1) {
            if (status.over)
            {
               sb(0)
               ss(0)
                // setBall(0)
                    // setStrike(0)
            }        
            if (status.ball)
           {
            // console.log('gb',gb())
            // console.log('gb',gb()+1)
            if (gb() === 3)
                {
                    sb(0)
                    ss(0)
                    //      setBall(0)
                    // setStrike(0)
                }
                else
                {
                    sb(gb()+1)
                        //  setBall(parseInt(ball) + 1)
                }
            }        
            if (status.strike)
            {
                if (gs() === 2)
                {
                    sb(0)
                    ss(0)
                    //      setBall(0)
                    // setStrike(0)
                }
                else
                {
                    ss(gs()+1)
                        //  setStrike(parseInt(strike) + 1)
                }
            }
            if (status.foul)
            {
                if (parseInt(gs()) === 2)
                {
                }
                else
                {
                    ss(gs()+1)
                    // setStrike(parseInt(strike) + 1)
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
      <button type='submit' disabled={isSubmitting}>Submit</button>

    </Form>
<Display />
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
        // setStatus(res.data);
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
