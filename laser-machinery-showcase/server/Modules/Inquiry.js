import mongoose from 'mongoose';

const InquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  companyName: { type: String, default: 'Individual' },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  machineModel: { type: String, default: 'General Inquiry' },
  metalType: { type: String, default: 'Stainless Steel' },
  thicknessRequirement: { type: String, default: 'Not Specified' },
  message: { type: String, default: '' },
}, { timestamps: true });

export default mongoose.model('Inquiry', InquirySchema);