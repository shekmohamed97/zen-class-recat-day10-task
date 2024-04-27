import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UsersMoreDetails = ({ setId }) => {
  const [taskDta, setTaskData] = useState([]);
  const navigate = useNavigate();
  const [deleteData, setDleteData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    await axios
      .get("https://662b8bf2de35f91de158a588.mockapi.io/api/usersdetails")
      .then((res) => setTaskData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(
        `https://662b8bf2de35f91de158a588.mockapi.io/api/usersdetails/${id}`
      )
      .then((res) => setDleteData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Users More Details</h1>
      <hr />
      {taskDta.map((item, index) => {
        return (
          <>
            <div key={index}>
              <div class="card">
                <h4 class="card-header">{item._name}</h4>
                <div class="card-body">
                  <h5 class="card-title">User Name:{item.user_name}</h5>
                  <h6 className="card-title">E-mail:{item.user_email}</h6>
                  <h6 className="card-title">
                    {" "}
                    Phone Numper:{item.user_phonenumper}
                  </h6>
                  <h6 className="card-title">City Name:{item.user_cityname}</h6>
                  <h6 className="card-title">
                    Country Name:{item.user_countryname}
                  </h6>
                  <h6 className="card-title">
                    Country Code:{item.user_countrycode}
                  </h6>
                  <div className="more">
                    <button
                      className="edit"
                      onClick={() => {
                        handleEdit(item.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="delete"
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      Deledte
                    </button>
                  </div>
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

export default UsersMoreDetails;
