import InputWithLabel from './InputWithLabel'
import './SignUpWithMail.css'

const SignUpWithMail = () => {

  const handleSignUp = () => {
    console.log("Sign up with mail");
  };
  return (
    <div className="card-sign-up-with-mail">
      <h1>Sign Up</h1>
      <p>Join us now! Sign up to kick-start your journey.</p>
      <div className="input-container">
        <InputWithLabel label="Name" />
        <InputWithLabel label="Email" />
        <InputWithLabel label="Password" type="password" />
      </div>
      <button className="button button-dark" onClick={handleSignUp}>
          Sign up
      </button>
      <p>Already have an account? <a href="/">Login</a></p>
      <div className="divider">
        <span>or</span>
      </div>
      <button className="button mt-auto" >
          <svg className="icon">
          <use href="/icons.svg#icon-google"></use>
          </svg>
          Sign up with Google
      </button>
    </div>
    )
}

export default SignUpWithMail