import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  
  const handleMailSignUp = () => {
    navigate("/signup-with-mail");
  };

  return (
    <div className="card-sign-up">
      <h1>Sign Up</h1>
      <p>Join us now! Sign up to kick-start your journey.</p>
      <div className="button-container">
        <button className="button">
          <svg className="icon">
            <use href="/src/assets/icons.svg#icon-google"></use>
          </svg>
          Sign up with Google
        </button>
        <button className="button button-dark" onClick={handleMailSignUp}>
          <svg className="icon">
            <use href="/src/assets/icons.svg#icon-mail"></use>
          </svg>
          Sign up with Email
        </button>
      </div>

      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default SignUp;
