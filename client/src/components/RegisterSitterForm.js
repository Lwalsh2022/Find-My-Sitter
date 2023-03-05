import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_SITTER } from "../services/mutations";

/** 
 * @type { {
  firstName: string;
  lastName: string;
  email: string;
  experience: string;
  certifications: string[];
}}  ISitter
*/

function RegisterSitterForm() {
  // this is component allows a sitter to register an account
  const [sitterInfo, setSitterInfo] = useState(
    /** @type {ISitter} */ {
      firstName: "noname",
      lastName: "somename",
      email: "email@domain.com",
      experience: "we know things",
      certifications: [],
    }
  );

  // setup addSittr mutation
  const [addSitter, { error }] = useMutation(
    ADD_SITTER,
    //after mutation, refecth sitters
    {
      refetchQueries: ["GET_SITTERS"],
    }
  );

  const doRegister = async (event) => {
    event.preventDefault();
    console.log("doRegister fired");

    //make a mutation request using sitterInfo and addSitter
    try {
      const { data } = await addSitter({
        variables: { ...sitterInfo },
      });
      console.log(data);
      alert("sitter added");
      // if there's an error, show it
    } catch (e) {
      console.error(e);
      alert("something went wrong");
    }
  };

  const doUpdatField = (/** @type {keyof sitterInfo}*/ field, value) => {
    const updatdFields = {
      ...sitterInfo,
      [field]: value,
    };
    setSitterInfo(updatdFields);
    console.log({ updatdFields });
  };

  return (
    <div className="flex justify-center justify-center align-center animated-outline w-100">
      <form className="flex flex-column gap-3 w-55 m-auto" onSubmit={doRegister}>
        <legend>Register</legend>

        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" value={sitterInfo.firstName} onChange={(e) => doUpdatField("firstName", e.target.valu)} />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" value={sitterInfo.lastName} onChange={(e) => doUpdatField("lastName", e.target.value)} />

        <label htmlFor="experience">Experience</label>
        <input type="text" name="experience" value={sitterInfo.experience} id="experience" />

        <label>Certifications</label>
        <select value={sitterInfo.value} onChange={(e) => doUpdatField("certifications", e.currentTarget.value)}>
          <option value="CPR">CPR</option>
          <option value="First Aid">First Aid</option>
          <option value="CPR and First Aid">CPR and First Aid</option>
          <option value="Child Care and Babysitting Certification">Childcare and Babysitting Certification</option>
          <option value="None">None</option>
        </select>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={sitterInfo.email} id="email" onChange={(e) => doUpdatField(e.target.name, e.target.value)} />

        <label htmlFor="password">Create Password</label>
        <input type="password" name="password" value={sitterInfo.password} id="password" onChange={(e) => doUpdatField(e.target.name, e.target.value)} />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" value={sitterInfo.confirmPassword} id="confirmPassword" onChange={(e) => doUpdatField(e.target.name, e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterSitterForm;
