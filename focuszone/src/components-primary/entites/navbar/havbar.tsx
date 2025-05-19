import {User, MapPinCheckInside, ListChecks, Goal} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip.tsx";

export default function NavBar() {
    const navigateIcon = [
        { icon: <Goal className='!w-6 !h-6'/>, label: "Главая страница", href: "/" },
        { icon: <User size={20} />, label: "Профиль", href: "/profile" },
        { icon: <MapPinCheckInside size={20} />, label: "Карта", href: "/map" },
        { icon: <ListChecks size={20} />, label: "Список кофе", href: "/cafelist" },
    ]

  return (
    <>
      <TooltipProvider>
        <aside 
        className="h-[90vh] w-[4vw] bg-zinc-900 text-white flex flex-col
        items-center pt-3 gap-4 absolute top-0 left-0 rounded-br-3xl shadow-lg shadow-zinc-700/50"
        >
          {navigateIcon.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                  <div>
                    <a href={item.href}>
                      <Button variant={'ghost'} size='icon' className="hover:bg-zinc-100">
                        {item.icon}
                      </Button>
                    </a>
                  </div>
              </TooltipTrigger>
              <TooltipContent side="right">{item.label}</TooltipContent>
            </Tooltip>
          ))}
        </aside>
      </TooltipProvider>
    </>
  );
}
