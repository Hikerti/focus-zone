import { useGetUser } from "@/helpers/store/storeUser";
import ProfileDescription from "./profileDescription";
import ProfileHeader from "./profileHeader";
import { FindError } from "@/helpers/functions/findError";
import { FindLoading } from "@/helpers/functions/findLoading";

export default function ProfileContent() {

    const {users, isError, isPending} = useGetUser()

    FindError(isError)
    FindLoading(isPending)

    if (isPending || isError || users.length === 0) {
        return null;
      }
    
    const user = users[0];
    console.log(user)

    return (
      <>
          <section className="w-9/10 flex flex-col justify-center mt-10 gap-8 bg-zinc-300 rounded-xl p-4">
              <ProfileHeader
                  name={user.name}
                  surname={user.surname}
                  login={user.login}>
              </ProfileHeader>
              <ProfileDescription
                  email={user.email}
                  adress={user.adress}
                  phone={user.phone}
                  description={user.description}
              >
              </ProfileDescription>
          </section>
      </>
    );
  }