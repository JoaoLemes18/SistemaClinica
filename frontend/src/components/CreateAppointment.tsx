import { HiOutlineViewGridAdd } from "react-icons/hi";
import { useState, useEffect } from "react";

import axios, { AxiosError } from "axios";
import "../styles/CreateAppointment.scss";
import Button from "./Button";

const CreateAppointment = () => {
  const [appointment, setAppointments] = useState({
    id_user: 81,
    hour: "",
  });

  const handleForm = (e) => {
    setAppointments({ ...appointment, hour: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cookie = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("userToken="));

    if (cookie) {
      const token = cookie.split("=")[1];

      try {
        const response = await axios.post(
          "http://localhost:3000/appointments/create",
          appointment,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response);
      } catch (err: unknown) {
        const response = (err as AxiosError).response?.data;
        console.log(response);
      }
    } else {
      console.log("User token cookie not found.");
    }
  };

  return (
    <div className="header-title-btn">
      <form action="" method="post" onSubmit={handleSubmit}>
        <h2>Agendamento</h2>

        <select onChange={handleForm} name="hour" id="select_hour">
          <option value="09:00:00">09:00</option>
          <option value="10:00:00">10:00</option>
          <option value="11:00:00">11:00</option>
          <option value="12:00:00">12:00</option>
        </select>

        <Button
          content="Agendar Horário"
          icon={<HiOutlineViewGridAdd size={20} />}
        />
      </form>
    </div>
  );
};

export default CreateAppointment;
