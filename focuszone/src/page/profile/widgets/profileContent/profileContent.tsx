import { useGetUser } from "@/helpers/store/storeUser.ts";
import ProfileDescription from "../../entites/profileDescription/profileDescription.tsx";
import ProfileHeader from "../../entites/profileHeader/profileHeader.tsx";
import { FindError } from "@/helpers/functions/findError.tsx";
import { FindLoading } from "@/helpers/functions/findLoading.tsx";
import {UserFullData} from "@/helpers/interface/interface/interface.ts";
import {useEffect, useState} from "react";
import ProfileAchievement from "@/page/profile/entites/profileAchievement/profileAchievement.tsx";
import ProfileDiscounts from "@/page/profile/entites/profileDiscounts/profileDiscounts.tsx";

export default function ProfileContent() {

    const {users, isError, isPending} = useGetUser()
    const [user, setUser] = useState<UserFullData | null>(null)

    useEffect(() => {
        if (users && users.length > 0) {
            setUser(users[0]);
        }
    }, [users]);

    FindError(isError)
    FindLoading(isPending)

    if (isPending || isError || users?.length === 0) {
        return null;
    }

    console.log(user)

    return (
      <>
          {user && user !== null &&
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
                  <ProfileAchievement></ProfileAchievement>
                  <ProfileDiscounts></ProfileDiscounts>
              </section>
          }
      </>
    );
  }