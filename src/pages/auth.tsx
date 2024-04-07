// Auth.tsx

import React, { useState, useCallback } from 'react';
import Input from '../../Components/input';
import { signIn } from 'next-auth/react';
import axios from 'axios'
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/navigation';
const Auth = () => {
    const router = useRouter();


    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');


    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/'
            });

            router.push('/profiles');
        } catch (error) {
            console.log(error);
        }
    }, [email, password, router]);

    const register = useCallback(async () => {
        try {
            const res = await axios.post('/api/register', {
                email,
                name,
                password
            });
            // login();
            // const res=await fetch("/api/register",{
            //     method:"POST",
            //     body:JSON.stringify({
            //         name:name,
            //         email:email,
            //         password:password
            //     })
            // })
            // const data:any=await res.json();
            console.log(res)
            if (res.status === 200) {
                router.push("/profiles")
                // login()
            }
            else {
                alert("Chal Chutiye")
            }
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, login]);

    return (
        <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" className="h-12" alt="Logo" />
                </nav>
                <div className='flex justify-center'>
                    <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md'>
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className='flex flex-col gap-4'>
                            {variant === 'register' && (
                                <Input
                                    id="name"
                                    type="text"
                                    label="Username"
                                    value={name}
                                    onChange={(e: any) => setName(e.target.value)}
                                />
                            )}
                            <Input
                                id="email"
                                type="email"
                                label="Email"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                            />
                            <Input
                                type="password"
                                id="password"
                                label="Password"
                                value={password}
                                onChange={(e: any) => setPassword(e.target.value)}
                            />
                        </div>
                        <button onClick={variant === 'login' ? login : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {variant === 'login' ? 'Sign in' : 'Sign up'}
                        </button>

                        <div className="flex flex-row items-center gap-4 mt-8 justify-center py-5">
                            <div onClick={() => signIn('google', { callbackUrl: '/profiles' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                                <FcGoogle size={32} />
                            </div>
                            <div onClick={() => signIn('github', { callbackUrl: '/profiles' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                                <FaGithub size={32} />
                            </div>
                        </div>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant === 'login' ? 'Create an account' : 'Login'}
                            </span>
                            .
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
