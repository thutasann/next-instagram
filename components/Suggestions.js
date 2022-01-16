import { useEffect, useState } from "react";
import { USERS } from "../data/users";

function Suggestions() {

    const [ suggestions, setSuggestions ] = useState([]);
    useEffect(() => {
        setSuggestions(USERS);
    }, []);

    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold">
                    See All
                </button>
            </div>
            {
                suggestions.map((suggestion) => (
                    <div key={suggestion.id} className="flex items-center justify-between mt-3">
                        <img 
                            className="w-10 h-10 object-contain bg-white rounded-full border p-[2px]"
                            src={suggestion.image} 
                            alt={suggestion.user}
                        />
                        <div className="flex-1 ml-4">
                            <h2 className="font-semibold text-sm">
                                {suggestion.user}
                            </h2>
                            <h3 className="text-xs text-gray-400">
                                Works at Facebok
                            </h3>
                        </div>

                        <button className="text-blue-400">
                            Follow
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default Suggestions
