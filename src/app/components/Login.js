"use client"
import { useSession, signIn } from "next-auth/react";
//import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
export default function Login({src, cartItems, addMultipleToCart, addToCart}) {
    //const router = useRouter();
    const  { data: session, status }  = useSession();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState({
        minValueValidation: false,
        numberValidation: false,
        capitalLetterValidation: false,
        specialCharacterValidation: false,
        loginpressed:false,
    });

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
      }
    
    useEffect(() => {
        const fetchCart = async () => {
            if (status === 'authenticated') {
                await fetch( `/api/fetchuser?email=${session.user.email}`)
                .then((response) => response.json())
                .then((data) => {
                //addMultipleToCart(data[0].cart);
                //addToCart(data[0].cart[0]);
                console.log("from signin callback data:",data);
                if (data.length !== 0) {
                    addMultipleToCart(data[0].cart);
                }
                else {
                    let nameArray = session.user.name.split(" ");
                    
                    let createUser = async () => {
                        const submitData = {"email":session.user.email, "firstname": nameArray[0], 
                            "lastname": nameArray[1], "password":"none", "cart":"[]", "manual":0};
                        const request = new Request('/api/createuser',{
                              method: 'POST',
                              body: JSON.stringify(submitData),
                              headers: {
                                'content-type': 'application/json'
                              }
                        });
                        await fetch(request)
                            .then((response) => {
                                if (response.status === 200) {
                                    console.log("creation worked");
                                return response.json();
                                } else {
                                throw new Error("Something went wrong on API server!");
                                }
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    }
                    createUser();
                }
                //setInitialized(true);
                //router.push('/');
                })
            .catch((error) => console.error('Error in login', error));

                
            }
        }
        fetchCart();
    }, [session]);
    const handleSignIn = async () => {
        //await signIn('google', { callbackUrl: '/signedin' });
        await signIn('google');

        //console.log("result:",result);
        console.log("Google Sign in ok");
    };

    const handleGithubSignIn = async (e) => {
        //await signIn('google', { callbackUrl: '/signedin' });
        e.preventDefault();
        await signIn('github');
        //console.log("result:",result);
        console.log("Github Sign in ok");
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
        console.log("changing password");
        
    };
    
    useEffect(() => {
        console.log('Updated state:', errors);
        // Other logic with the updated state
      }, [errors]);
    
    const validatePassword = (password) => {
        console.log("initial password:", password);

        if ((password.length >= 8) && (/\d/.test(password)) && (/[A-Z]/.test(password)) &&
        (/[^A-Za-z0-9]/.test(password))) {
            const update = {
                minValueValidation: true,
                numberValidation: true,
                capitalLetterValidation: true,
                specialCharacterValidation: true,
                loginpressed:true,
            };
            setErrors(update);
            return true;
        }
        else {
            setErrors({
                minValueValidation: false,
                numberValidation: false,
                capitalLetterValidation: false,
                specialCharacterValidation: false,
                loginpressed: false,
            });
            /*
            if (errors["minValueValidation"] === false) {
                setErrors({ ...setErrors,
                    minValueValidation: false,
                });
                console.log(setErrors);
            }
            if (errors["numberValidation"] === false) {
                setErrors({ ...setErrors,
                    numberValidation: false,
                });
            }
            if (errors["capitalLetterValidation"] === false) {
                setErrors({ ...setErrors,
                    capitalLetterValidation: false,
                });
            }
            if (errors["specialCharacterValidation"] === false) {
                setErrors({ ...setErrors,
                    specialCharacterValidation: false,
                });
            }
            */
            return false;
        }
    };
  
    const handleChange = event => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        console.log("email value changed");
    };

    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("button pressed");
        console.log(password);
        console.log(email);
        console.log(isValidEmail(email));
        setError(null);
        if (isValidEmail(email)) {
            console.log('email is valid');
            if (validatePassword(password)) {
                console.log('password is valid');
            //await signIn('google', { callbackUrl: '/signedin' });
            const result = await signIn('credentials', {
                redirect: true,
                email: email,
                password: password,
                callbackUrl: '/auth/signin'
            });
            }
            else {
                setErrors({
                    minValueValidation: false,
                    numberValidation: false,
                    capitalLetterValidation: false,
                    specialCharacterValidation: false,
                    loginpressed: true,
                });
                console.log('password is invalid');
                console.log(setErrors);
            }
        } else {
            setError(true);
          console.log('Email is invalid');
        }
    };
      
    return (
        <section className="bg-stone-200 text-amber-800">
            <img src="https://drive.google.com/uc?export=view&id=1YhMv3KmG1tdIcONT0LaVjYoBsHBRlNIP" alt="Background Image" 
            className="absolute inset-0 w-full h-full object-cover blur-sm filter z-0"/>
            <div className="relative z-10 flex items-stretch place-items-center ">
                <div className="items-center  justify-center flex w-2/6 bg-gray-900 h-screen">
                    <div className="flex flex-col p-10 px-5 space-y-10">
                        
                        <div className="flex pb-10 justify-center border-b-2 border-stone-200 items-center">
                            <Link href="/">
                                <img src={src.src} className="h-28 " alt="Logo" />
                            </Link>
                        </div>

                        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="grid grid-cols-2 gap-8 md:grid-cols-2">
                                <div className="text-center pr-10 md:border-r">
                                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-white">4K</h6>
                                    <p className="text-sm font-medium tracking-widest text-gray-300 uppercase lg:text-base">
                                        5 Star Reviews
                                    </p>
                                </div>
                                <div className="text-center">
                                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-white">10.2K</h6>
                                    <p className="text-sm font-medium tracking-widest text-gray-300 uppercase lg:text-base">
                                        Deliveries
                                    </p>
                                </div>
                                <div className="text-center pr-10 md:border-r">
                                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-white">9.2K</h6>
                                    <p className="text-sm font-medium tracking-widest text-gray-300 uppercase lg:text-base">
                                        Subscribers
                                    </p>
                                </div>
                                <div className="text-center">
                                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-white">7.8K</h6>
                                    <p className="text-sm font-medium tracking-widest text-gray-300 uppercase lg:text-base">
                                        Cookies
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {session? 
                (<div className="flex flex-col p-5 justify-center place-items-start ml-5 mb-20">
                    
                        <div>
                            <p className="text-8xl tetx-white">Hello,</p>
                            <p className="text-4xl text-gray-900">{session.user.name}</p>
                        </div> 
                        <div className="flex flex-row mb-8 mt-8">
                            <Link href="/cart">
                            <div className="shadow-lg bg-amber-500 hover:bg-neutral-500  hover:text-gray-900 rounded-lg mt-5 p-5  justify-center flex flex-inline">
                                    <div>
                                        <svg className="w-16 h-16 text-gray-800 dark:text-white" aria-hidden="true" 
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                        d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
                                        </svg>
                                    </div>
                                    <div >
                                        <p className="text-6xl pl-5 text-white">
                                        {cartItems.length}</p>                                    </div>
                            </div>
                            </Link>

                            <Link href="/">
                            <div className="shadow-lg ml-5 bg-amber-500 hover:bg-neutral-500  hover:text-gray-900 rounded-lg mt-5 p-5  justify-center flex flex-inline">
                                    <div>
                                    <svg className="w-16 h-16 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z"/>
                                    </svg>
                                    </div>
                                    <div>
                                        <p className="text-6xl pl-5 text-white">Shop</p>
                                    </div>
                            </div>
                            </Link>
                        </div>
                        <div className="hover:bg-neutral-500 shadow-lg bg-gray-700 rounded-lg mt-5 py-3 px-5">
                                <button onClick={signOut} className="text-md text-semibold text-white">Sign Out</button>
                        </div>
                <div>
                        
                        </div>
                </div>)
                
                
                
                : (
                <div className="flex flex-col items-center justify-center mx-auto">
                    <div className="w-full bg-white border border-gray-200 rounded-lg shadow 
                    sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-4 w-96 h-auto" action="#" >
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign In </h5>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" value={email}
                                onChange={handleChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                placeholder="name@xyz.com" required/>
                            </div>
                            {error && <p className="text-sm">Email is invalid</p>}

                            <div className="container relative">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type={isPasswordVisible ? "text" : "password"} name="password" value={password} onChange={handlePasswordChange}
                                id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                <button onClick={togglePasswordVisibility} className="absolute inset-y-2 mt-6 right-0 flex items-center px-2 text-gray-600">
                                    
                                    {isPasswordVisible ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                    />
                                </svg>
                                ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                    />
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                )}
        </button>
                            </div>
                            {(!errors.minValueValidation && errors.loginpressed) && <p className="text-sm">Password must have at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.</p>}

                            <div className="flex items-center"> 
                                <hr className="flex-grow border-t border-gray-300"/>
                                <span className="px-3 text-gray-500"> 
                                    or 
                                </span> 
                                <hr className="flex-grow border-t border-gray-300"/> 
                            </div> 

                            <div className="flex flex-col max-w-sm gap-2">
                                <button type="button" onClick={handleSignIn}
                                    className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                                        </path>
                                    </svg>
                                    Sign in with Google
                                </button>

                                <button type="button" onClick={handleGithubSignIn} className="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792">
                                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                                        </path>
                                    </svg>
                                    Sign in with GitHub
                                </button>
                                {/*
                                <button type="button" onClick={handleFacebookSignIn} 
                                className="py-2 px-4 flex justify-center items-center  bg-blue-700 hover:bg-blue-900 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" width="20" height="20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 8 19">
    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
  </svg>
                                    Sign in with Facebook
                                </button>
                */}
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                                    </div>
                                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                                <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                            </div>

                            <button type="submit" onClick={handleSubmit} className="w-full text-white bg-gray-900 hover:bg-amber-600 
                            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
                            text-center">Login to your account</button>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered? <a href="/signup" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                                </div>
            
                        </form>
                    </div>
                </div>
                )}
            </div>
        </section>
    );
}