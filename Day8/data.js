const addUser = (username, password) => {
  if (!username || !password) {
    throw new Error("Username and password cannot be empty");
  }

  const storedData = JSON.parse(localStorage.getItem('userData')) || [];

  const userExists = storedData.some((user) => user.username === username);
  if (!userExists) {
    storedData.push({ username, password });
    localStorage.setItem('userData', JSON.stringify(storedData));
    return true;
  } else {
    throw new Error("Username already exists. Please choose a different username.");
  }
};

const findUser = (username, password) => {
  const storedData = JSON.parse(localStorage.getItem('userData')) || [];
  const user = storedData.find((user) => user.username === username && user.password === password);
  return user;
};

const getUsers = () => {
  const storedData = JSON.parse(localStorage.getItem('userData')) || [];
  return storedData;
};

export { addUser, findUser, getUsers };
