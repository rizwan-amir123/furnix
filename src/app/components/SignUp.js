"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';
import { useState } from "react";
export default function SignUp({src}) {
    const [email, setEmail] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [finalSubmit, setFinalSubmit] = useState(false);
    const [errors, setErrors] = useState({
        minValueValidation: false,
        numberValidation: false,
        capitalLetterValidation: false,
        specialCharacterValidation: false,
        signuppressed: false,
    });

    const [errorfirstname, setErrorFirstName] = useState({
        minValueValidation: false,
        signuppressed: false,
    });
    const [errorlastname, setErrorLastName] = useState({
        minValueValidation: false,
        signuppressed: false,
    });

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
        console.log("changing password");
    };
    
    const validatePassword = (password) => {
        setErrors({
          minValueValidation: password.length >= 8,
          numberValidation: /\d/.test(password),
          capitalLetterValidation: /[A-Z]/.test(password),
          specialCharacterValidation: /[^A-Za-z0-9]/.test(password),
          signuppressed: false,
        });
        if (errors["minValueValidation"] === true &&
        errors["numberValidation"] === true && errors["capitalLetterValidation"] === true
        && errors["specialCharacterValidation"] === true) {
            return true;
        }
        else {
            return false;
        }
    };

    const validateFirstName = (name) => {
        setErrorFirstName({
          minValueValidation: name.length >= 1,
          signuppressed: false,
        });
        console.log(name.length);
        if (errorfirstname["minValueValidation"] === true) {
            return true;
        }
        else {
            return false;
        }
    };

    const validateLastName = (name) => {
        setErrorLastName({
          minValueValidation: name.length >= 1,
          signuppressed: false,
        });
        if (errorlastname["minValueValidation"] === true) {
            return true;
        }
        else {
            return false;
        }
    };
  
    const handleChange = event => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        console.log("email value chnaged");
    };

    const handleChangeFirstName = event => {
        const newFirstName = event.target.value;
        setFirstName(newFirstName);
        validateFirstName(newFirstName);
        console.log("first name value chnaged");
    };

    const handleChangeLastName = event => {
        const newLastName = event.target.value;
        setLastName(newLastName);
        validateLastName(newLastName);
        console.log("last name value chnaged");
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
                if (validateFirstName(firstname)) {
                    console.log('first name ok');
                    if (validateLastName(lastname)) {
                        console.log('last name ok');
                            const submitData = {"email":email, "firstname": firstname, 
                            "lastname": lastname, "password":password, "cart":[], "manual":1};
                            const request = new Request('/api/createuser',{
                              method: 'POST',
                              body: JSON.stringify(submitData),
                              headers: {
                                'content-type': 'application/json'
                              }
                            })
                            fetch(request)
                            .then((response) => {
                                if (response.status === 200) {
                                    console.log("here");
                                    setFinalSubmit(true);
                                    return response.json();
                                } else {
                                throw new Error("Something went wrong on API server!");
                                }
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                        
                          //setName('')
                          //setAge('')
                    }
                    
                    else {
                        setErrorLastName({
                            "minValueValidation": false,
                            "signuppressed": true,
                        });
                        console.log('last name invalid');
                    }
                }
                else {
                    setErrorFirstName({
                        "minValueValidation": false,
                        "signuppressed": true,
                    });

                    console.log('first name invalid');
                }
            }
            else {
                console.log('password is invalid');
                setErrors({
                    minValueValidation: false,
                    numberValidation: false,
                    capitalLetterValidation: false,
                    specialCharacterValidation: false,
                    signuppressed: true,
                });
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
            <div className="relative flex items-stretch place-items-center z-10">
                <div className="items-center  justify-center flex w-2/6 bg-gray-900 h-screen">
                    <div className="pt-10 pb-10 px-5">
                        <div className="flex pb-10 justify-center border-b-2 border-stone-200 items-center">
                            <a href="/">
                                <img src={src.src} className="h-28 " alt="Logo" />
                            </a>
                        </div>

                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
            {finalSubmit ? (<div className="flex flex-col pl-4 justify-center">
                <p className="text-8xl ml-2 mb-2 text-white">Welcome,</p>
                <p className="text-2xl ml-3 text-gray-700 text-white">Sign Up was successful!</p>
                <div className="flex flex-row mt-10">
                <Link href="/">
                            <div className="shadow-lg ml-2 bg-amber-500 hover:bg-neutral-500  hover:text-gray-900 rounded-lg mt-5 p-5  justify-center flex flex-inline">
                                    <div>
                                    <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z"/>
                                    </svg>
                                    </div>
                                    <div>
                                        <p className="text-2xl pl-1 text-white">Shop</p>
                                    </div>
                            </div>
                </Link>
                <Link href="/login">
                            <div className="shadow-lg ml-2 bg-amber-500 hover:bg-neutral-500  hover:text-gray-900 rounded-lg mt-5 p-5 justify-center flex flex-inline">
                                    <div>
                                    <svg className="w-8 h-8 text-gray-800" aria-hidden="true" 
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
                                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
                                    </svg>
                                    </div>
                                    <div>
                                        <p className="text-2xl pl-1 text-white">Login</p>
                                    </div>
                            </div>
                </Link>
                </div>
                </div>) :
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                
    
                <div className="w-full p-8  bg-white border border-gray-200 rounded-lg shadow 
                sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-3 w-96 h-auto" action="#" >
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up </h5>
                        <div>
                            <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                            <input type="text" name="firstname" value={firstname}
                            onChange={handleChangeFirstName} id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            placeholder="" required/>
                        </div>
                        {(!errorfirstname.minValueValidation && errorfirstname.signuppressed) && <p className="text-sm text-red-900">First name is invalid</p>}
                        <div>
                            <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input type="text" name="lastname" value={lastname}
                            onChange={handleChangeLastName} id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            placeholder="" required/>
                        </div>
                        {(!errorlastname.minValueValidation && errorlastname.signuppressed)  && <p className="text-sm text-red-900">Last name is invalid</p>}
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" value={email}
                            onChange={handleChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            placeholder="name@xyz.com" required/>
                        </div>
                        {error && <p className="text-sm text-red-900">Email is invalid</p>}

                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name="password" value={password} onChange={handlePasswordChange}
                            id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                        </div>
                        {(!errors.minValueValidation && errors.loginpressed) && <p className="text-sm">Password must have at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.</p>}

                        <button type="submit" onClick={handleSubmit} className="w-full text-semibold text-white bg-gray-900 hover:bg-amber-600 
                        focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
                        text-center">Sign Up</button>
                    </form>
                </div>
            </div>}
        </div>
        </section>
    );
}