import React, { useState } from "react"

const Contact = () => {
  const [data,setData] = useState({
    name : "",
    mobno : "",
    email : "",
    msg : "",
  })

  const InputEvent = (event) =>{
    const { name,value } = event.target;
    setData((preval)=>{
      return {
        ...preval,
        [name] : value
      }

    })

  }
  const formSubmit = (e) =>{
    e.preventDefault();
    alert(
      `My name is ${data.name}. My mobile no is ${data.mobno},
      email is ${data.email} with my message ${data.msg}`
    )

  };
  return (
   <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit = {formSubmit}>
              <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" 
                  name ="name"
                  value={data.name}
                  onChange={InputEvent}
                  placeholder="Enter Full Name" />
              </div>

              <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                  <input type="number" class="form-control" id="exampleFormControlInput1" 
                  name ="mobno"
                  value={data.mobno}
                  onChange={InputEvent}
                  placeholder="Enter Mobile no" />
              </div>

              <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" 
                  name ="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com" />
              </div>


              <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                   name ="msg"
                   value={data.msg}
                   onChange={InputEvent}
                  ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
   </>
  );
}

export default Contact;