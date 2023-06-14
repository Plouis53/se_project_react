import React, { useState } from "react";

const RegisterModal = ({ onRegistration }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegistration(name, email, password);
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;

// import React from "react";
// import { Link } from "react-router-dom";
// import * as auth from "../utils/auth";
// import "../blocks/register.css";

// class Register extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       calGoal: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.password === this.state.confirmPassword) {
//       auth.register(this.state.username, this.state.password, this.state.email);
//     }
//   };

//   render() {
//     return (
//       <div className="register">
//         <p className="register__welcome">Please register.</p>
//         <form onSubmit={this.handleSubmit} className="register__form">
//           <label htmlFor="username">Username:</label>
//           <input
//             id="username"
//             name="username"
//             type="text"
//             value={this.state.username}
//             onChange={this.handleChange}
//           />
//           <label htmlFor="email">Email:</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             value={this.state.email}
//             onChange={this.handleChange}
//           />
//           <label htmlFor="password">Password:</label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             value={this.state.password}
//             onChange={this.handleChange}
//           />
//           <label htmlFor="confirmPassword">Confirm password:</label>
//           <input
//             id="confirmPassword"
//             name="confirmPassword"
//             type="password"
//             value={this.state.confirmPassword}
//             onChange={this.handleChange}
//           />
//           <label htmlFor="calGoal">Daily calorie goal:</label>
//           <input
//             id="calGoal"
//             name="calGoal"
//             type="number"
//             value={this.state.calGoal}
//             onChange={this.handleChange}
//           />
//           <div className="register__button-container">
//             <button
//               type="submit"
//               onSubmit={this.handleSubmit}
//               className="register__link"
//             >
//               Sign up
//             </button>
//           </div>
//         </form>
//         <div className="register__signin">
//           <p>Already have an account??</p>
//           <Link to="login" className="register__login-link">
//             Log in here
//           </Link>
//         </div>
//       </div>
//     );
//   }
// }

// export default Register;
