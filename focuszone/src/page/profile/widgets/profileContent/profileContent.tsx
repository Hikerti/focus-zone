import { useGetUser } from "@/helpers/store/storeUser.ts";

import {UserFullData} from "@/helpers/interface/interface.ts";

import {useEffect, useState} from "react";

import ProfileDescription from "../../entites/profileDescription/profileDescription.tsx";
import ProfileHeader from "../../entites/profileHeader/profileHeader.tsx";

import { FindLoading } from "@/components-primary/entites/loading/findLoading.tsx";

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
              <div
                  className="
                      flex
                      flex-col justify-center
                      w-full
                      p-4
                      mt-[110px]

                      sm:w-8/10
                   "
              >
                  <div
                      className='
                          w-full
                          flex
                          flex-col
                          justify-center gap-8
                          my-[4%]
                      '
                  >
                      <div className='
                        flex
                        flex-col

                        lg:flex-row lg:gap-20
                      '
                      >
                          <div
                              className='
                                flex
                                flex-col justify-start gap-2
                          '
                          >
                               <ProfileHeader
                                  name={user.name}
                                  surname={user.surname}
                                  login={user.login}
                               />
                              <ProfileDescription
                                  email={user.email}
                                  adress={user.adress}
                                  phone={user.phone}
                                  description={user.description}
                              />
                          </div>
                          <div
                              className='
                                flex
                                flex-col gap-4
                                w-full
                                mt-[100px]
                              '
                          >
                              <ProfileAchievement/>
                              <ProfileDiscounts/>
                          </div>
                      </div>
                  </div>
              </div>
          }
      </>
    );
  }