import LinkToEmail from "@/components-primary/shared/ui/linkToEmail.tsx";
import { ProfileDescriptionProps } from "../../interface/inetrface.ts";
import LinkToMap from "@/components-primary/shared/ui/linkToMap.tsx";
import LinkToTel from "@/components-primary/shared/ui/linkToTel.tsx";

export default function ProfileDescription({email, adress, description, phone}: ProfileDescriptionProps) {
    return (
      <>
        <div className="h-full flex flex-col justify-between">
            <h4>Контактная информация</h4>
            <LinkToEmail size={28} theme={'dark'} content={email}></LinkToEmail>
            <LinkToMap size={28} theme={'dark'} content={adress}></LinkToMap>
            <LinkToTel size={28} theme={'dark'} content={phone}></LinkToTel>
        </div>
        <div className="flex flex-col gap-4">
            <h3>Информация обо мне</h3>
            {description}
        </div>
      </>
    );
  }