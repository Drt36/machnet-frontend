import "./form.css";
import logo from "./images/rocket.png";

function Welcome() {
  return (
    <div className="welcome-div">
      <img src={logo} />
      <h3>Welcome</h3>
      <p>Register youself within 1 minute.Thank You!</p>
      <button>Login</button>
    </div>
  );
}
export default Welcome;
