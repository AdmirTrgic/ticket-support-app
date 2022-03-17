const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    product: {
      type: String,
      required: [true, 'Please select a product'],
      enum: ['HP', 'Apple Macbook', 'Dell', 'Lenovo'],
    },
    description: {
      type: String,
      required: [true, 'Please enter a description of issue'],
    },
    status: {
      type: String,
      required: true,
      ebum: ['new', 'open', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Ticket', ticketSchema);
