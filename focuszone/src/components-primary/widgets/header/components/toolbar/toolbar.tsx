import { Input } from "@/components/ui/input.tsx"
import { Search } from "lucide-react";
import SheetHeaderComponents from "@/components-primary/widgets/sheetHeader/sheetHeader.tsx";

export default function ToolBar() {
  return (
    <>
      <div className="absolute top-0 right-0 py-2 w-[96%] ms-[4%] px-4 flex justify-between items-center bg-zinc-900">
          <div className="relative w-4/10">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-white" size={20} />
            <Input type="text" placeholder="Поиск" className="pl-10 text-white " />
          </div>
          <SheetHeaderComponents></SheetHeaderComponents>
      </div>
    </>
  );
}
