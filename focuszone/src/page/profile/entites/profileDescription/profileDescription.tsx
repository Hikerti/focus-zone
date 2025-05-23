import LinkToEmail from "@/components-primary/shared/ui/linkToEmail.tsx";
import LinkToMap from "@/components-primary/shared/ui/linkToMap.tsx";
import LinkToTel from "@/components-primary/shared/ui/linkToTel.tsx";

import { ProfileDescriptionProps } from "../../interface/inetrface.ts";

export default function ProfileDescription({email, adress, phone}: ProfileDescriptionProps) {
    return (
      <>
        <div
            className="
                h-full w-full
                flex
                flex-col gap-2
            "
        >
            <h4>
                Контактная информация
            </h4>
            <LinkToEmail
                size={28}
                theme={'dark'}
                content={email}
            />
            <LinkToMap
                size={28}
                theme={'dark'}
                content={adress}
            />
            <LinkToTel
                size={28}
                theme={'dark'}
                content={phone}
            />
        </div>
      </>
    );
  }