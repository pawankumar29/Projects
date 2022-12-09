/* eslint-disable func-names */
const LocalStorageService = (function () {
  let _service;
  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  function _setCurrentUser(userObj) {
    localStorage.setItem("current_user", JSON.stringify(userObj));
  }
  function _getCurrentUser() {
    return JSON.parse(localStorage.getItem("current_user"));
  }
  function _setToken(token) {
    localStorage.setItem("access_token", token);
  }
  function _getAccessToken() {
    return localStorage.getItem("access_token");
  }
  function _setRefreshToken(token) {
    return localStorage.setItem("refresh_token", token);
  }
  function _getRefreshToken() {
    return localStorage.getItem("refresh_token");
  }
  function _clearToken() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_type");
    localStorage.removeItem("current_user");
  }

  return {
    getService: _getService,
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    clearToken: _clearToken,
    setCurrentUser: _setCurrentUser,
    getCurrentUser: _getCurrentUser,
    getRefreshToken: _getRefreshToken,
    setRefreshToken: _setRefreshToken,
  };
})();
export default LocalStorageService;
