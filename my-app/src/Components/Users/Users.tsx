import { useCallback, useEffect, useState } from "react";
import { User } from "./User.types";
import UsersList from "./UsersList";

const Users = () => {
    const [data, setData] = useState<User[]>([])

    const getData = useCallback(async () => {
        const result = await fetch('https://dummyjson.com/users');
        const data = await result.json();
        setData(data.users)
        console.log(data)
    }, [])

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <div>
            <UsersList data={data}/>
        </div>
    ) 
}

export default Users;