export const getUsername = ({ user }) => user?.username || "";
export const getIsAuthenticated = ({ user }) => user?.isAuthenticated || false;
export const getUserConfig = ({ user }) => user?.userConfig || {};