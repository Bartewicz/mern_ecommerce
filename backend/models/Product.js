import mongoose from 'mongoose'

import { USER } from './User.js'

export const PRODUCT = 'Product'
const REVIEW = 'Review'

const COFFEE_TYPES = ['Arabica', 'Robusta', 'Blend']

const { model, Schema } = mongoose

function isValidType(type) {
  return COFFEE_TYPES.includes(type)
}

const reviewSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: USER,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },
    comment: { type: String },
  },
  {
    timestamps: true,
  }
)

const productSchema = new Schema(
  {
    brand: { type: String, required: true },
    caffeine: {
      type: Number,
      min: 0,
      max: 7,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      min: 0,
      required: true,
      default: 0,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: USER,
    },
    description: { type: String, required: true },
    image: { type: String, required: true },
    name: { type: String, required: true },
    numReviews: {
      type: Number,
      min: 0,
      default: 0,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    views: [reviewSchema],
    size: {
      type: Number,
      min: 0,
      required: true,
      default: 0,
    },
    type: {
      type: String,
      required: true,
      validate: {
        validator: isValidType,
        message: (type) => `${type} is not valid!`,
      },
    },
  },
  { timestamps: true }
)

export const Product = model(PRODUCT, productSchema)
export const Review = model(REVIEW, reviewSchema)
