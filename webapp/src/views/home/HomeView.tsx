import React, { FC, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import dashboardService from "../../services/dashboard/dashboard.service";
import axios from "axios";

const HomeView: FC = () => {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    const result = axios("http://localhost:8080/api/dashboard/users");
    setData(result.data);
  }, []);
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default HomeView;
