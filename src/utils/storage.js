const Session = window.sessionStorage;

export const storeData = async (key, value) => {
  Session.setItem(key, value);
};

export const getData = async (key) => {
  Session.getItem(key);
};

export const removeData = async (key) => {
  Session.removeItem(key);
};
