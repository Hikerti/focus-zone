import { useGetUser } from "@/helpers/store/storeUser.ts";
import ProfileDescription from "../../entites/profileDescription/profileDescription.tsx";
import ProfileHeader from "../../entites/profileHeader/profileHeader.tsx";
import { FindLoading } from "@/components-primary/entites/loading/findLoading.tsx";
import {UserFullData} from "@/helpers/interface/interface.ts";
import {useEffect, useState} from "react";
import ProfileAchievement from "@/page/profile/widgets/profileAchievement/profileAchievement.tsx";
import ProfileDiscounts from "@/page/profile/widgets/profileDiscounts/profileDiscounts.tsx";

export default function ProfileContent() {

    const {users, isError, isPending} = useGetUser()
    const [user, setUser] = useState<UserFullData | null>(null)

    useEffect(() => {
        if (users && users.length > 0) {
            setUser(users[0]);
        }
    }, [users]);

    FindLoading(isPending)

    if (isPending || isError || users?.length === 0) {
        return null;
    }

    return (
      <>
          {user && user !== null &&
              <section
                  className="w-9/10 flex flex-col items-center justify-center my-10 bg-zinc-200 rounded-xl p-4"
              >
                  <div
                      className='w-9/10 flex flex-col items-center justify-center gap-8 my-[4%]'
                  >
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
                      <ProfileAchievement/>
                      <ProfileDiscounts/>
                  </div>
              </section>
          }
      </>
    );
  }