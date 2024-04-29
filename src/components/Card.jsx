import React from "react";

function Card({user, handelRemove, id}) {
    return (
        <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
            <div className="image w-[3.5vw] h-[3.5vw] rounded-full bg-zinc-200 overflow-hidden">
                <img className="h-full w-full object-cover" src={user.image} />
            </div>
            <h1 className="mt-1 text-xl font-semibold text-center leading-none">{user.name}</h1>
            <h4 className="opacity-60 text-xs font-semiblod">{user.email}</h4>
            <p className="mt-1 text-center text-xs font-semibold leading-none leading-1 tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam fugiat temporibus?</p>
            <button onClick={()=>handelRemove(id)} className="px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4">Remove It</button>
        </div>
    )
}

export default Card;