import React, { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import { indigo } from "@mui/material/colors";
import { StyledInput, Label } from "./formStyle";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../models/LoginContext";
import { authenticateUser } from "../models/API";

const Login = () => {
  const navigate = useNavigate();
  const colorBlue = indigo[700];
  const userContext = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const authenticatedUser = await authenticateUser(
        formData.email,
        formData.password
      );
      setFormData({
        email: "",
        password: "",
      });
      userContext.setUser(authenticatedUser);
      moveToAllBooks();
    } catch (error) {
      console.log("Could not log in", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (formData.email && formData.password) {
          const authenticatedUser = await authenticateUser(
            formData.email,
            formData.password
          );
          userContext.setUser(authenticatedUser);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const moveToAllBooks = () => {
    navigate(`/`);
  };

  return (
    <form className="addBookPage" onSubmit={handleSubmit}>
      <div style={{ marginBottom: "5px" }}>
        <Label>Email:</Label>
        <StyledInput
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
          required
        />
      </div>
      <div style={{ marginBottom: "5px" }}>
        <Label>Password:</Label>
        <StyledInput
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={formData.password}
          required
        />
      </div>
      <div>
        {/* Button to sign in */}
        <Button
          style={{
            maxWidth: "110px",
            color: colorBlue,
            borderColor: colorBlue,
            borderRadius: "15px",
          }}
          variant="outlined"
          type="submit"
        >
          Sign In
        </Button>
        {/* Button to navigate back to the main page */}
        <Button
          style={{
            maxWidth: "90px",
            marginLeft: "120px",
            color: colorBlue,
            borderColor: colorBlue,
            borderRadius: "15px",
          }}
          variant="outlined"
          onClick={moveToAllBooks}
        >
          Back
        </Button>
      </div>
    </form>
  );
};

export default Login;
