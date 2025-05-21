import {User, MapPinCheckInside, ListChecks, Goal} from "lucide-react";

import { Button } from "@/components/ui/button.tsx";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip.tsx";

export default function NavBar() {
    const navigateIcon = [
        { icon: <Goal size={20}/>, label: "Главая страница", href: "/" },
        { icon: <User size={20}/>, label: "Профиль", href: "/profile" },
        { icon: <MapPinCheckInside size={20}/>, label: "Карта", href: "/map" },
        { icon: <ListChecks size={20}/>, label: "Список кофе", href: "/cafelist" },
    ]

  return (
    <>
      <TooltipProvider>
        <aside
            className="
              hidden absolute top-0 left-0 z-100
              h-screen w-[8vw]
              flex-col items-center pt-4 gap-2
              bg-zinc-900 text-white
              rounded-br-3xl shadow-lg shadow-zinc-700/50

              sm:flex
              lg:gap-4 lg:w-[6vw]
              xl:w-[4vw]
            "
        >
          {navigateIcon.map((item, index) => (
            <Tooltip
                key={index}
            >
              <TooltipTrigger asChild>
                  <div>
                    <a
                        href={item.href}
                    >
                      <Button
                          variant={'ghost'}
                          size='icon'
                          className="hover:bg-zinc-100"
                      >
                        {item.icon}
                      </Button>
                    </a>
                  </div>
              </TooltipTrigger>
              <TooltipContent
                  side="right"
              >
                  {item.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </aside>
      </TooltipProvider>
    </>
  );
}
