import NavBar from "@/components-primary/entites/navbar/havbar";
import ToolBar from "@/components-primary/entites/toolbar/toolbar";
export default function Header() {
    return (
      <>
        <header
            className='
                absolute inset-0
            '
        >
            <NavBar/>
            <ToolBar/>
        </header>
      </>
    );
  }
  