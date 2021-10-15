import { model, Schema } from 'mongoose'

import { PRODUCT } from './Product'
import { USER } from './User'

const ORDER = 'Order'

const orderSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: USER,
    },
    deliveredAt: Date,
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    orderItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: PRODUCT,
        },
      },
    ],
    paidAt: Date,
    paymentMethod: { type: String, required: true },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    shippingAddress: {
      recipient_name: { type: String, required: true },
      address_line_1: { type: String, required: true },
      address_line_2: { type: String },
      city: { type: String, required: true },
      postal_code: { type: String, required: true },
      phone: { type: Number, required: true },
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
  },
  { timestamps: true }
)

export const Order = model(ORDER, orderSchema)
