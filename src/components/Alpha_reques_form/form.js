import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./form.css";
import { db } from './firebase.js'
import { collection, addDoc, getDocs, query, where } from "firebase/firestore"; 


function Form() {
  const navigate = useNavigate();
  // const [isPopupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
    otp: ""
  });

  const [showOTPInput, setShowOTPInput] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [showReceiveOTP, setShowReceiveOTP] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleOTPButtonClick = async (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phoneNumber.trim() === ""
    ) {
      toast.error("Please fill out all the required fields");
      return;

    } else {
      const emailExistsQuery = query(collection(db, "alpha_registration"), where("formData.email", "==", formData.email));
      const emailExistsSnapshot = await getDocs(emailExistsQuery);

      if (!emailExistsSnapshot.empty) {
        toast.error("Email already registered.");
        return;

      } else {
        setShowReceiveOTP(false);
        const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedOTP(generatedOTP);
      
        const templateParams = {
          to_name: formData.name,
          to_email: formData.email,
          otp6: generatedOTP
        };
        console.log(templateParams);

        emailjs.init('WB5PQvQE54rvMG6a7')
      
        emailjs.send('service_pwlzrho', 'template_08rlkyk', templateParams)
          .then((response) => {
            toast.info(`OTP sent to ${formData.email}.`);
            setShowOTPInput(true);

          })
          .catch((error) => {
            toast.error(`Error sending email to ${formData.email}`);
          });
      };
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.otp !== generatedOTP) {
      toast.error("OTP mismatch!")
      
    } else {
        try {
          const { otp, ...formDataWithoutOTP } = formData;
          await addDoc(collection(db, "alpha_registration"), {
            formData: formDataWithoutOTP
          });
          toast.info("Form submitted successfully. Your registration is complete.")
          // setPopupOpen(true);
          setFormData({
            name: "",
            email: "",
            message: "",
            phoneNumber: "",
            otp: ""
          });
          // Redirect to /terabhAI
          navigate('/terabhAI');
        } catch (error) {
          toast.error("An error occurred while submitting the form.")
      };
    };
  };

  // const closePopup = () => {
  //   setPopupOpen(false);
  // };


  return (
    <Container className="registration-section">
      <form className="form-container">
      <label className="form-label">
        <span className="placeholder-text">Name :</span>
        <input
          className="form-input"
          type="text"
          name="name"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        <span className="placeholder-text">Email :</span>
        <input
          className="form-input"
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        <span className="placeholder-text">Number :</span>
          <input
            className="form-input"
            type="number"
            name="phoneNumber"
            autoComplete="off"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          </label>
        <label className="form-label">
          <span className="placeholder-text">Message :</span>
          <input
            className="form-input"
            name="message"
            autoComplete="off"
            autoCorrect="on"
            placeholder="(optional)"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        {showOTPInput ? (
          <div
            style={{
              display:"flex",
              flexDirection: "column",
              width: "100%"
            }}
          >
            <label className="form-label">
              <span className="placeholder-text">OTP :</span>
              <input
                className="form-input"
                name="otp"
                type="number"
                autoComplete="one-time-password"
                value={formData.otp}
                onChange={handleChange}
              />
            </label>
            <div 
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginLeft: "8%"
              }}
            >
              <a href='/terabhAI'>
                  <button target="_self" className="form-button" onClick={handleSubmit}>
                    Submit
                  </button>
                </a>  
            </div>
 
          </div>
        ) : (
          showReceiveOTP ? (
            <button className="form-button-otp" onClick={handleOTPButtonClick}>
              Receive OTP
            </button>
          ) : null
        )}
      </form>
      {/* <Modal
        isOpen={isPopupOpen}
        
        onRequestClose={closePopup}
        contentLabel="Form Submission Popup"
        style={{
          overlay: {
            display: "flex",
            // flex:1,
            // flexDirection: "row",
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value for transparency
            justifyContent: 'center',
            alignItems: "center",
          },
          content: {
            border: 'none',
            padding: '20px',
            textAlign: 'center',
            height: '100px',
            width: '300px',

            // Add other styles as needed
          }
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <p>Congratulations! Your registration is complete.</p>
          <button onClick={closePopup}>OK</button>
        </div>
      </Modal> */}
    </Container>
  );

}
export default Form;
