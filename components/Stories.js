import React, { useEffect, useState } from "react";
// import faker from "faker";
import { USERS } from "../data/users";
import Story from "./Story";
import { useSession } from "next-auth/react";


function Stories() {

    const { data: session }  = useSession();
    const [ suggestions, setSuggestions ] = useState([]);

    useEffect(()=>{
        setSuggestions(USERS);
    }, []);


    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200
        border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300">
            {
                session && (
                    <Story
                        name={session.user.name}
                        img={session.user.image}
                        alt={session.user.name}
                    />
                )
            }
            {
                suggestions.map(profile => (
                    <Story
                        key={profile.id}
                        name={profile.user}
                        img={profile.image}
                    />
                ))
            }
        </div>
    )
}

export default Stories

// useEffect(() =>{
//     const suggestions = [...Array(20)].map((_, i) => ({
//         ...faker.helpers.contextualCard(),
//         id: i,
//     }));
//     console.log(suggestions);
// }, []);
// const [ suggestions, setSuggestions ] = 