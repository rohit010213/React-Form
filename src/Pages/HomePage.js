import React, { useState } from "react";
// import { FaAlignCenter } from "react-icons/fa";
import { toast } from "react-toastify";
import Header from "../Components/Header";

const HomePage = () => {
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";
    
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [gender , setGender] = useState("")
    const [terms , setTerms] = useState(false)
    const [img , setImg] = useState(profilePIcDefault)

    // convert img to dataurl to store in localStorage
    const getBase64 = (file) =>{
      return new Promise((resolve,reject) =>{
         const reader = new FileReader()
         reader.onload = () => resolve(reader.result)
         reader.abort = (error) => reject(error)
         reader.readAsDataURL(file)
      })
    }

    // handle img to save in localStorage
     const handleImg = (e)=>{
      const file = e.target.files[0];
      getBase64(file).then((base64) => {
         localStorage["img"] = base64;
      })
     }


    //submit logic
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === ""){
      toast.error("Name is Required");
    }
    else if(email === ""){
      toast.error("Email is Required");
    }
    else if(password === ""){
      toast.error("Password is required");
    }
    else{
      localStorage.setItem("name" , name);
      localStorage.setItem("email" , email);
      localStorage.setItem("password", password );
      localStorage.setItem("gender" , gender);
      localStorage.setItem("terms" , terms);
      toast.success("User Detail Saved");
    }
  };

  return (
    <>
      <Header />
      <div className="container content mt-4">
        <h5> 📝 Add New User</h5>
        <div className="row border p-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                value={name}
                onChange = {(e) => setName(e.target.value)}
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            {/* radios button inpput ================== */}
            <div className="d-flex flex-row">
              Gender :
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="Male"
                  defaultChecked = {gender === "Male"}
                  onClick ={ (e) => setGender(e.target.value)}
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="Female"
                  defaultChecked = {gender === "Female"}
                  onClick ={ (e) => setGender(e.target.value)}
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Female
                </label>
              </div>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked = {terms}
                onClick = { (e) => setTerms(e.target.value)}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I Acept Terms And Conditions
              </label>
            </div>
            <button
              type="submit"
              className="form__submit-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {/* col-md-6 ends */}

          <div className="col-md-4 ">
            <div className="profile_section">
              <p>Select Profile Picture :</p>
              <img
                src={
                  profilePIcDefault
                }
                alt="profile_pic"
                className="img-thumbnail"
                height={250}
                width={250}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Default file input example
              </label>
              <input className="form-control" type="file" id="formFile" onChange={handleImg} name="file" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
