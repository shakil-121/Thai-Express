import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Button, Image } from "react-bootstrap";
import { deleteUser } from "firebase/auth";

const Profile = () => {
  const { user } = useContext(AuthContext);


  const deleteaccount=()=>{
    deleteUser(user)
    .then(()=>{
        alert('Account Delate')
    })
    .catch()
  }
  return (
    <div>
      <div style={{height:'250px',backgroundColor:'#251B37'}} className="py-4">
        <Image
          style={{ width: "100px", height: "100px" }}
          className="my-3 mx-auto d-block border border-5"
          src={user?.photoURL}
          rounded
        />
        <h4 className="text-center text-light">{user?.displayName}</h4>
      </div>


      <div className="row my-5">
        <div className="col-md-6">
          <div style={{width:'350px',height:'400px',backgroundColor:'#251B37'}} className="border p-4 rounded mx-auto text-light">
          <p>User Name : {user?.displayName}</p>
          <p>Email : {user?.email}</p>  
          <p className=""><a href={user?.photoURL}>Click For Image Find Out</a></p>
          <Button variant="danger" className="border-none" onClick={deleteaccount}>Delete Account</Button>
          </div>
        </div>

        <div className="col-md-6">
          {/* <form  style={{width:'350px'}} className="border p-5 rounded mx-auto">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
