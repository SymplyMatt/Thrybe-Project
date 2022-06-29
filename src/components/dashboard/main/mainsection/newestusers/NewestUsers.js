import React, { useState, useEffect } from "react";
import NewestUsersList from "./NewestUsersList";
import { useNavigate } from "react-router-dom";

const NewestUsers = ({ page, setPage, setNewestUsersSection }) => {
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  let [result, setResult] = useState([1, 2, 3]);
  let [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem("token") || sessionStorage.getItem("token"));
    if (!token) {
      setPage("login");
      navigate("/login");
    }
  }, [page]);

  useEffect(() => {
    if (token && token != " ") {
      fetchData().catch((error) => {
        console.error(error);
        setTimeout(() => {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("img");
          sessionStorage.removeItem("pages");
          navigate("/login");
        }, 1500);
      });
    }
  }, [page, token]);

  async function fetchData() {
    let results = await fetch(
      "https://thrybe.azurewebsites.net/api/BackofficeUser/NewestUser",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    results = await results.json();
    setResult(results);
    setNewestUsersSection(true);
  }

  return (
    <div className='col-xl-3 col-lg-6 col-md-12 px-0 p-custom col-md-6 mb-3 d-flex flex-column flex-grow-1'>
      <div className='custom-card h-100'>
        <div className='d-flex justify-content-between'>
          <h5>Newest Users</h5>
          <a href='#'>
            <img
              src='./assets/images/right-pointer.svg'
              className='img-fluid'
              alt=''
            />
          </a>
        </div>
        {
          <ul className='p-0 mt-3' style={{ listStyleType: "none" }}>
            {result.map((item, index) => (
              <NewestUsersList
                key={index}
                name={item.fullName}
                email={item.email}
                src={item.picture}
                index={index}
              />
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default NewestUsers;
