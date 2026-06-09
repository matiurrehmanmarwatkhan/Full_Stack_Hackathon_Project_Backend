import bcrypt from "bcryptjs";

// Hash password
export const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw new Error("Error hashing password: " + error.message);
  }
};

// Compare password
export const comparePassword = async (enteredPassword, storedPassword) => {
  try {
    return await bcrypt.compare(enteredPassword, storedPassword);
  } catch (error) {
    throw new Error("Error comparing password: " + error.message);
  }
};
