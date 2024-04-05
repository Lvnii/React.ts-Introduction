import { User } from "./User.types"

type Props = {
    data: User[],
}

const UsersList = (props: Props) => {
    const { data } = props

    return (
        <div>
            {data.map(item => {
                return (
                    <div key={item.id}>
                        {item.firstName}
                    </div>
                )
            })}
        </div>
    )
}

export default UsersList;