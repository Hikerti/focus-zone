import {Button} from "@/components/ui/button.tsx";
import BgForMainPage from '@/assets/images/bgformainpage.png'
import {Link} from "react-router-dom";

export default function SectionHello() {
    return (
      <>
        <section
            className="w-screen"
        >
            <div
                className="w-[100%] h-[90vh] flex flex-col items-center justify-center gap-8"
            >
                <div
                    className='w-full h-full relative flex flex-col items-center justify-center gap-2'
                >
                    <img
                        src={BgForMainPage}
                        alt="bgformainpage"
                        className='absolute w-full h-full object-cover z-[-1]'
                    />
                    <div
                        className="absolute inset-0 bg-black opacity-50 z-0"
                    />
                    <div
                        className='relative w-7/10 flex flex-col items-center justify-center gap-2 z-20'
                    >
                        <h2
                            className='text-white text-center text-[24px]'
                        >
                            Добро пожаловать на сайт,
                        </h2>
                        <h1
                            className='text-white text-center'
                        >
                            Focus zone
                        </h1>
                        <h4
                            className='text-white text-center'
                        >
                            Проходите новые маршруты и изучайте новые места
                        </h4>
                        <Link
                            to='/map'
                        >
                            <Button
                                className='cursor-pointer'
                            >
                                Перейти к использованию
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }
  