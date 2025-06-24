import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import Stripe from 'stripe'

admin.initializeApp()
const db = admin.firestore()

const stripe = new Stripe(functions.config().stripe.secret, {
  apiVersion: '2022-11-15', // 👈 ここは "as const" をつけなくてもOK（v11なら）
})
