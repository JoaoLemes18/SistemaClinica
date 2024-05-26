// STYLES
import "react-toastify/dist/ReactToastify.css";
import "../styles/CrudUsers.scss";

// OTHERS
import { useEffect, useState } from "react";
import axios from "axios";

// COMPOTENTS
import List from "../components/List";
import Card from "../components/Card";
import CreateAppointment from "../components/CreateAppointment";

const CrudUsers = () => {
  const [appointments, setAppointments] = useState();

  useEffect(() => {
    const fetchCookies = async () => {
      const cookie = document.cookie
        .split(";")
        .find((cookie) => cookie.trim().startsWith("userToken="));

      if (cookie) {
        const token = cookie.split("=")[1];

        try {
          const response = await axios.get(
            "http://localhost:3000/appointments",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setAppointments(response.data);
          console.log(response.data);
        } catch (err) {
          return err;
        }
      } else {
        console.log("User token cookie not found.");
      }
    };
    fetchCookies();
  }, []);

  const [typeListCustomers, setTypeListCustomers] = useState("list");

  const handleWindowResize = () => {
    if (window.innerWidth < 800) setTypeListCustomers("card");
    else setTypeListCustomers("list");
  };

  window.addEventListener("resize", handleWindowResize);
  window.addEventListener("load", handleWindowResize);

  return (
    <section className="body">
      <div className="container-all">
        <CreateAppointment />
        {typeListCustomers == "list" ? (
          <List item={appointments || []} />
        ) : (
          <Card item={appointments || []} />
        )}
      </div>
    </section>
  );
};

export default CrudUsers;
