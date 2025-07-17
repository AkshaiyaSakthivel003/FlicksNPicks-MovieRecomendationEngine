const userData = [];

export const addUser = (username, password) => {
  if (!username || !password) {
    throw new Error("Username and password cannot be empty");
  }

  const userExists = userData.some((user) => user.username === username);
  if (!userExists) {

    userData.push({ username, password });
    return true; 
  } else {
    throw new Error("Username already exists. Please choose a different username.");
  }
};

export const findUser = (username, password) => {

  const user = userData.find((user) => user.username === username && user.password === password);
  return user;
};


export const getUsers = () => {
  return userData;
};
