import React from 'react';
import img from './esnotary.png'

function Login() {
  return (
    <div>
      <div>
      <img src={img} width="100px" height="50px" />
      </div>

      {/* esnotary */}
      <form>
        <div class="form-group">
          <input
            type="email"
            //   class="form-control" 
            //   style="width:90%; font-size:0.85rem"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            autoComplete="on"
          />
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
          <small class="invalid">Spaces are not allowed</small>
          <small
          >Provide a valid email like johndoe@domain.com</small>
        </div>

        <button
        >Continue</button>
      </form>

      <button >
        <small>No account? Sign up for free</small>
      </button>
    </div>
  );
}

export default Login;