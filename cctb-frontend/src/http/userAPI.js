//import $host from "./index";
import jwt_decode from "jwt-decode";

// export const registration = async (email, password) => {
//   const { data } = await $host.post(
//     { url: "api/user/registration" },
//     { email, password, role: "ADMIN" }
//   );
//   return jwt_decode(data.token);
// };

export const registration = async (email, password, role) => {
  const { data } = await fetch("http://localhost:8080/api/user/registration", {
    method: "POST",
    body: { email: email, password: password, role: role },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await fetch("http://localhost:8080/api/user/registration", {
    method: "POST",
    body: { email: email, password: password},
    headers: {
      "Content-Type": "application/json",
    },
  });
  return jwt_decode(data.token);
};

export const newProject = async (nameProject, customer, address, timeline, estimation) => {
  const { data } = await fetch("http://localhost:8080/api/user/newproject", {
    method: "POST",
    body: { nameProject: nameProject, customer: customer, address: address, timeline: timeline, estimation: estimation },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return jwt_decode(data.token);
};

export const projects = async (email, token) => {
  const { data } = await fetch("http://localhost:8080/api/user/projects", {
    method: "GET",
    body: { email: email, token: token},
    headers: {
      "Content-Type": "application/json",
    },
  });
  return jwt_decode(data.token);
};

// export const login = async (email, password) => {
//   const { data } = await $host.post(
//     { url: "api/user/login" },
//     { email, password }
//   );
//   return jwt_decode(data.token);
// };

// export const check = async () => {
//   const response = await $host.post({ url: "api/auth/registration" });
//   return response;
// };
