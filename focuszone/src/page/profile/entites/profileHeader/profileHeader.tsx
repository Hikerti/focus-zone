import AvatarComponent from "@/components-primary/shared/ui/avatar.tsx";

import { ProfileHeaderProps } from "../../interface/inetrface.ts";

export default function ProfileHeader({name, surname, login}: ProfileHeaderProps) {
    return (
      <>
        <div
            className="
                flex
                flex-col gap-2
                w-full
            "
        >
            <AvatarComponent
                size="w-[160px] h-[160px]"
                url='user'
            />
            <div
                className="
                    h-full
                    flex flex-col
                "
            >
              <h4>
                  {name + " " + surname}
              </h4>
              <h4>
                  {login}
              </h4>
            </div>
        </div>
      </>
    );
  }