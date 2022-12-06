import React, { createContext, useContext, useState } from "react";
import { END_POINTS } from "../app-constants/urls";
// import toast from "../components/toast/toast";

const JobsContext = createContext(null);

const JobsProvider = ({ children }) => {
  const [appliedJobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const controller = new AbortController();
  const signal = controller.signal;

  const request = async (path, method = "GET", data, action) => {
    let url = `${process.env.REACT_APP_HOST}${path}`;
    if (method === "GET" && !!data) {
      const params = new URLSearchParams(data);
      url += `?${params.toString()}`;
    }
    setLoading(true);
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: method !== "GET" && !!data ? JSON.stringify(data) : undefined,
      signal: signal,
    })
      .then(async (response) => {
        console.log(response);
        if (response.ok) {
          const responseData = await response.json();
          if (!!responseData.success) {
            return responseData;
          }
        }
      })
      .catch((error) => {
        // toast({
        //   type: "error",
        //   title: "Failed to Process Request",
        //   description: error?.message,
        // });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getAppliedJobs = async () => {
    request(END_POINTS.getAppliedJobs, "GET").then((resp) => {
      setJobs(resp.appliedJobs);
    });
  };

  const applyToJob = async (data) => {
    return request(END_POINTS.applyToJobs, "POST", data);
  };

  return (
    <JobsContext.Provider
      value={{
        loading,
        getAppliedJobs,
        applyToJob,
        appliedJobs,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export const useJobServices = () => useContext(JobsContext);

export default JobsProvider;
