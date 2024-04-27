import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UsersDetails = () => {
  const navigate = useNavigate();
  const [taskDta, setTaskData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("https://662b8bf2de35f91de158a588.mockapi.io/api/usersdetails")
      .then((res) => setTaskData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  const moreDeteails = () => {
    navigate("/usersdetails");
  };
  const handleCreat = () => {
    navigate("/userscreat");
  };

  return (
    <div>
      <h1>Users Details</h1>
      <hr />
      <div className="nav">
        <button className="creat" onClick={handleCreat}>
          +Creat
        </button>
        <button className="details" onClick={moreDeteails}>
          Users More Detils
        </button>
      </div>

      {taskDta.map((item, index) => {
        return (
          <>
            <div key={index}>
              <div class="card ">
                <h5 class="card-header">Name:{item._name}</h5>
                <div class="card-body">
                  <h6 class="card-title">User Name:{item.user_name}</h6>
                  <h6 className="card-title">User E-mail:{item.user_email}</h6>
                  <h6 className="card-title">
                    User PhoneNumper:{item.user_phonenumper}
                  </h6>
                  <h6 className="card-title">City Name:{item.user_cityname}</h6>
                  <h6 className="card-title">
                    Country Name:{item.user_countryname}
                  </h6>
                  <h6 className="card-title">
                    Country Code:{item.user_countrycode}
                  </h6>
                </div>
              </div>
              <br />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default UsersDetails;
