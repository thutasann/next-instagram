import { getProviders, signIn as SignIntoProvider } from 'next-auth/react';

// this is working on Browser...
function signin({ providers }) {
    return (
        <>
            {
                Object.values(providers).map((provider) =>(
                    <div key={provider.name}>
                        <button onClick={() => SignIntoProvider(provider.id)}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))
            }
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
