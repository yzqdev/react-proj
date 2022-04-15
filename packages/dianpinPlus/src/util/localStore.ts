export default {
  getItem: (key: string) => {
    let value;
    try {
      value = localStorage.getItem(key);
    } catch (err) {
      console.log(err.message);
    } finally {
      return value;
    }
  },
  setItem: (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch (err) {
      console.log(err.message);
    }
  },
};
