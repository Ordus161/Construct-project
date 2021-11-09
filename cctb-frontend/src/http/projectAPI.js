export const createNewProject = async (
  projectName,
  status,
  contract,
  estimation,
  file,
  dateStart,
  dateEnd,
  projManager,
  customer,
  customerName,
  payment
) => {
  const response = await fetch("http://localhost:8080/api/user/newproject", {
    method: "POST",
    mode: "cors",
    body: {
      projectName: projectName,
      status: status,
      contract: contract,
      estimation: estimation,
      file: file,
      dateStart: dateStart,
      dateEnd: dateEnd,
      projManager: projManager,
      customer: customer,
      customerName: customerName,
      payment: payment,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    console.log(response);
    return false;
  }
};

export const projects = async (email, token) => {
  const response = await fetch("http://localhost:8080/api/user/projects", {
    method: "GET",
    mode: "cors",
    body: { email: email, token: token },
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    console.log(response);
    return false;
  }
};
