export const getUserByEmailQuery = `
  SELECT email,password,contact FROM User
  WHERE email=?
`;
export const createUserQuery = `
  INSERT INTO User(name,contact,email,password,status,role)
  VALUES(?,?,?,?,"false","user")
`;
