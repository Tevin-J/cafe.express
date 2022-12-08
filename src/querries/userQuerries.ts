export const getUserByEmailQuery = `
  SELECT email,password,contact FROM User
  WHERE email=?
`;
export const createUserQuery = `
  INSERT INTO User(name,contact,email,password,status,role)
  VALUES(?,?,?,?,'false','user')
`;
export const getRegularUsersQuery = `
  SELECT id,name,email,contact,status FROM User
  WHERE role='user'
`;
export const updateUserQuery = `
  UPDATE User SET status=?
  WHERE id=?
`;
