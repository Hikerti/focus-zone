import NavBar from "@/components-primary/widgets/header/components/navbar/havbar";
import ToolBar from "@/components-primary/widgets/header/components/toolbar/toolbar";
export default function Header() {
    return (
      <>
        <header className='absolute inset-0 z-10'>
            <NavBar></NavBar>
            <ToolBar></ToolBar>
        </header>
      </>
    );
  }
  