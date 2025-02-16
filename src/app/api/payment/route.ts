import { NextResponse, NextRequest } from 'next/server'
import Razorpay from 'razorpay'

// export async function GET(req: NextRequest) {
  

//   const products = await stripe.prices.list({
//     limit: 3,
//   })

//   return NextResponse.json(products.data)
// }

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET!,
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const order = await razorpay.orders.create({
      amount: data.amount*100,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      payment_capture: true,
    })
  
    // const orderDetail = {
    //   orderID: order.id,
    //   amout: order.amount,
    //   currency: order.currency,
    //   receipt: order.receipt,
    //   status: order.status,
    // }
    return NextResponse.json({status: true, order})
  } catch (error: any) {
    console.log("Error in creating order: ", error)
    return NextResponse.json({ success: false, message: error.message})
  }
}
