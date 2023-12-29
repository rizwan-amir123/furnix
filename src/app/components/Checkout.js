"use client"
import { useState } from 'react';
import {loadStripe} from "@stripe/stripe-js";

export default function Cart({src}) {
    
    const [formData, setFormData] = useState({
        email: '',
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        postalcode: '',
        phone: '',
        shipaddress: '',
        country: 'United States',
        payment: 'Cash on Delivery',
    });
    
    const handleCheckout = async () => {
        try {
            const amount =140
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY);

            if (!stripe) throw new Error('Stripe failed to initialize.');

            const checkoutResponse = await fetch('/api/checkout_sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"amount": 140}),
            });

            const {sessionId} = await checkoutResponse.json();
            const stripeError = await stripe.redirectToCheckout({sessionId});

            if (stripeError) {
                console.error(stripeError);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const [sameAddressCheck, setSameAddressCheck] = useState(true);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        const submitData = {
        "email": formData.email,
        "firstname": formData.firstname,
        "lastname": formData.lastname,
        "address": formData.address,
        "city": formData.city,
        "postalcode": formData.postalcode,
        "phone": formData.phone,
        "shipaddress": formData.shipaddress,
        "country": formData.country,
        "payment": formData.payment
        };
        const request = new Request('/api/info',{
            method: 'POST',
            body: JSON.stringify(submitData),
            headers: {
            'content-type': 'application/json'
            }
        })
        fetch(request)
        .then((response) => {
            if (response.status === 200) {
                console.log("submitted data successfully!");
            return response.json();
            } else {
            throw new Error("Something went wrong on API server!");
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    const handleCheckboxChange = () => {
        // Toggle the checkbox state
        setSameAddressCheck(!sameAddressCheck);
        if (sameAddressCheck) {
            setFormData({
                ...formData,
                "shipaddress": formData.address,
            });
        }
        else {
            setFormData({
                ...formData,
                "shipaddress": "",
            });;
        }
        console.log(sameAddressCheck);
    };

    return (
    <section className="bg-stone-200 text-gray-900 p-20">
    <div className="flex">
        <div className="w-2/3">
            <form  >
            <p className="text-2xl pb-5 font-bold">Contact</p>
            <div className="mb-5">
            <input type="text" required={true} name="email" onChange={handleInputChange} value={formData.email} id="email" placeholder="Email" className="bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-2/5 p-2.5"/>
            <p className="text-2xl mt-6 pb-4 font-bold">Delivery</p>
            <label htmlFor="countries" className="block mb-2 text-lg font-medium text-gray-900 ">Select your country</label>
            <select name="country" value={formData.country} onChange={handleInputChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5">
            <option value="United States">United States</option>
            <option value="Pakistan">Pakistan</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Germany">Germany</option>
            </select>

            <div className="flex">
            <input type="text" required={true} name="firstname" onChange={handleInputChange} value={formData.firstname} placeholder="First Name" className="mr-3 mt-5 bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-2/5 p-2.5"/>
            <input type="text" required={true} name="lastname" onChange={handleInputChange} value={formData.lastname} placeholder="Last Name" className="mt-5 bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-2/5 p-2.5"/>
            </div>
            
            <input type="text" required={true} name="address" onChange={handleInputChange} value={formData.address} placeholder="Billing Address" className="h-1/2 mt-5 bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-2/5 p-4"/>

           <div className="flex">
            <input type="text" required={true} name="city" onChange={handleInputChange} value={formData.city} placeholder="City" className="mr-3 mt-5 bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-2/5 p-2.5"/>
            <input type="text" required={true} name="postalcode" onChange={handleInputChange} value={formData.postalcode} placeholder="Postal Code" className="mt-5 bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-2/5 p-2.5"/>
            </div>
            
            <input type="text" required={true} name="phone" onChange={handleInputChange} value={formData.phone} placeholder="Phone" className="mt-5 bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-2/5 p-2.5"/>

            <div className="flex items-center mt-3 mb-4">
                <input defaultChecked id="saveinfo" type="checkbox" name="saveinfo"  className="w-4 h-4
                text-amber-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                " />
                <label htmlFor="checkbox-1" className="ml-2 text-sm font-medium text-gray-900">
                Save this information for next time</label>
            </div>

            <p className="text-2xl pb-2 mt-6 font-bold">Shipping Details</p>
            <div className="flex items-center mt-3 mb-3">
                <input value={sameAddressCheck} onChange={handleCheckboxChange} id="sameaddress" name="sameaddress" type="checkbox" className="w-4 h-4
                text-amber-500 bg-gray-100 border-gray-300 rounded" />
                <label htmlFor="checkbox-1" className="ml-2 text-sm font-medium text-gray-900">
                Same as Billing Address</label>
            </div>
            <input type="text" required={true} onChange={handleInputChange} disabled={!sameAddressCheck} value={formData.shipaddress} 
            placeholder="Shipping Address" name="shipaddress" className="h-1/2 mt-3 bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-2/5 p-4"/>

            <p className="text-2xl mt-6 pb-5 font-bold">Payment</p>
            <div className="flex items-center mb-4">
                <input id="payment-option-1" onChange={handleInputChange} value="Cash on Delivery" 
                type="radio" name="payment"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 
                " defaultChecked/>
                <label htmlFor="payment-option-1" className="block ml-2 text-md  text-gray-900">
                Cash On Delivery
                </label>
            </div>

            <div className="flex items-center mb-10">
                <input id="payment-option-2" type="radio" name="payment" 
                value="Credit/Debit Card"
                onChange={handleInputChange} className="w-4 h-4 border-gray-300 focus:ring-2 
                focus:ring-blue-300"/>
                <label htmlFor="payment-option-2" className="block ml-2 text-md text-gray-900">
                Credit/Debit Card
                </label>
            </div>

            <div className="bg-amber-500 w-1/5 text-white font-semibold  
                p-3 hover:bg-amber-600 text-center">
                <button onClick={handleSubmit} type="submit" className="">
                    Submit
                </button>
            </div>

           


            </div>
            </form>
        </div>
        
        {/*Right column*/}
        <div >
            <div className="bg-stone-300 rounded px-5 py-5">
            <div className="flex justify-between pb-3 text-2xl ">
                <p className="font-bold ">Order Summary</p>
            </div>
            <div className="flex justify-between py-3">
                <p className="font-semibold">Subtotal</p>
                <p> $130</p>
            </div>

            <div className="flex justify-between py-3">
                <p className="font-semibold">Shipping Fee</p>
                <p> $10</p>
            </div>

            
            
            <div className="flex justify-between items-center">
                <input type="text" placeholder="Discount Code" className="h-1/3 mt-3 bg-gray-50 border border-gray-300 
                text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-4/6 p-4"/>
                <button className="mt-1 rounded-lg hover:bg-amber-600 text-white px-4 py-2 font-semibold bg-amber-500"
                ><a className="">Apply</a>
            </button>
            </div>

            <div className="flex justify-between py-3">
                <p className="font-semibold">Total</p>
                <p> $140</p>
            </div>

            <div className="bg-amber-500">
                <button onClick={handleCheckout} type="submit" className="bg-amber-500 w-full text-white font-semibold  
                p-3 hover:bg-amber-600 ">
                    <a >Place Order</a>
                </button>
            </div>
            </div>
        </div>
        
    </div>
    </section>
    );
}