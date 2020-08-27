const translations = {
    APP_TITLE: 'Worklobster',
  };
  const get = (key) => {
    return translations[key] || null;
  };
  export default {
    get,
  };
