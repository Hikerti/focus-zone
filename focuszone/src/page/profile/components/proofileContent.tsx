import { useGetUser } from "@/helpers/store/storeUser";
import ProfileDescription from "./profileDescription";
import ProfileHeader from "./profileHeader";
import { useEffect } from "react";
import { FindError } from "@/helpers/functions/findError";
import { FindLoading } from "@/helpers/functions/findLoading";

export default function ProfileContent() {

    const {users, isError, isPending, getUser} = useGetUser()

    useEffect(() => {
        getUser()
    }, [])

    FindError(isError)
    FindLoading(isPending)

    if (isPending || isError || users.length === 0) {
        return null;
      }
    
    const user = users[0];

    return (
      <>
        {!isPending && !isError &&
            (
                <>
                    <div className="w-8/10 flex flex-col justify-center">
                        <ProfileHeader
                            name={user.name}
                            surname={user.surname}
                            login={user.login}
                        > 
                        </ProfileHeader> 
                        <ProfileDescription
                            email={user.email}
                            adress={user.adress}
                            phone={user.phone}
                            description={user.description}
                        >
                        </ProfileDescription>
                    </div>
                </>
            )
        }
      </>
    );
  }