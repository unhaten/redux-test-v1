import {FC, useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import {useActions} from "../hooks/useActions.ts";

const UserList: FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()
    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Loading ...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </>
    )
}

export default UserList;