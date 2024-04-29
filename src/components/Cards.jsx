import React from "react";
import Card from "./Card";
function Cards({users, handelRemove}) {
    return (
        <div className="w-full max-h-56 overflow-auto p-4 flex justify-center gap-4 flex-wrap">
            {users.map((item,index)=> {
                return <Card handelRemove={handelRemove} id={index} user={item} key={index}/> 
            })}
        </div>
    )
}

export default Cards;