//import {NextRequest, NextResponse} from "next/server";
import {headers} from "next/headers";


import stripe from "../../config/stripe";


export async function POST(req) {
    const headersList = headers();
    //const {cartDetails} = await req.json();
    //const cartDetailsArray: CartItem[] = Object.values(cartDetails) as CartItem[];
    /*
    const lineItems = cartDetailsArray.map((item: CartItem) => {
        return {
            price_data: {
                currency: item.currency,
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price,
            },
            quantity: item.quantity,
        };
    });
    */
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                  price_data: {
                    currency: "usd",
                    product_data: {
                      name: "INV-",
                    },
                    //unit_amount: body?.amount * 100,
                    unit_amount: 10 * 100,
                  },
                  quantity: 1,
                },
              ],
            mode: "payment",
            success_url: `${headersList.get("origin")}/`,
            cancel_url: `${headersList.get("origin")}/`,
        });
        console.log()
        return Response.json({sessionId: session.id});
    } catch (err) {
        console.log(err)
        return Response.json({error: "Error creating checkout session"});
    }
}