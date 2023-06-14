import React, { useState } from "react";
import "../blocks/LoginModal.css";

const LoginModal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Call the onLogin callback with the email and password
    onLogin(email, password);
  };

  return (
    <div className="modal">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default LoginModal;

// 61323 import React, { useState } from "react";

// const LoginModal = ({ onSignIn }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSignIn(email, password);
//   };

//   return (
//     <div className="modal">
//       <div className="modal__content">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;
