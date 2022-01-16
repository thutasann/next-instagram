import { getProviders, signIn as SignIntoProvider } from 'next-auth/react';
import Header from '../../components/Header';
import Head from 'next/head';

// this is working on Browser...
function signin({ providers }) {
    return (
        <>
            <Head>
                <title>Instagram | Sign In</title>
                <link rel="icon" href="logo.png" />
            </Head>
            <Header/>
            <div className='flex flex-col items-center justify-center py-2 px-14 text-center mt-20'>
                <img className='w-80' src="https://links.papareact.com/ocw" alt="Instagram" />
                <div className='mt-10'>
                    {
                        Object.values(providers).map((provider) =>(
                            <div key={provider.name}>
                                <button 
                                    className='p-3 bg-blue-500 rounded-lg text-white'
                                    onClick={() => SignIntoProvider(provider.id,{ callbackUrl: "/" })}
                                >
                                    Sign in with {provider.name}
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

// This is working on Middle server
export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props:{
            providers
        }
    }
};

export default signin
