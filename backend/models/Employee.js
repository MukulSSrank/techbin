import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNo: { type: String },
  employeeId: { type: String, required: true },
});

const Employee = mongoose.model('Employee', EmployeeSchema);

export default Employee;
