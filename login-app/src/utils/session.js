export const getToken = () => {
    if(localStorage.getItem('token') !== null) return true;
    return false;
  }