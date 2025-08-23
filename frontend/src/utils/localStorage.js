const USER_KEY = "bookstore_user";

export const saveUserToLocalStorage = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
  const data = localStorage.getItem(USER_KEY);
  return data ? JSON.parse(data) : null;
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem(USER_KEY);
};
