import Employee from '../models/Employee.js';
import bcrypt from 'bcryptjs';

export const registerEmployee = async (req, res) => {
  const { firstName, lastName, email, password, phoneNo, employeeId } = req.body;
  try {
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({ message: 'Employee already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 12);
    
    const newEmployee = new Employee({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNo,
      employeeId,
    });
    
    await newEmployee.save();
    res.status(201).json({ message: 'Employee registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
