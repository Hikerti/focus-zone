import {Link} from "react-router-dom";

import {Button} from "@/components/ui/button.tsx";

import BgForMainPage from '@/assets/images/bgformainpage.png'

export default function SectionHello() {
    return (
      <>
        <section
            className="w-screen"
        >
            <div
                style={{height: "calc(100vh - 64px)"}}
                className="
                    w-[100%]
                    flex
                    flex-col items-center justify-center gap-8
                "
            >
                <div
                    className='
                        relative
                        w-full h-full
                        flex
                        flex-col items-center justify-center gap-2
                    '
                >
                    <img
                        src={BgForMainPage}
                        alt="bgformainpage"
                        className='
                            absolute z-[-1]
                            w-full h-full
                            object-cover
                        '
                    />
                    <div
                        className="
                            absolute inset-0 z-0
                            bg-black
                            opacity-50
                        "
                    />
                    <div
                        className='
                            relative z-20
                            w-7/10
                            flex
                            flex-col items-center justify-center gap-2
                        '
                    >
                        <h2
                            className='
                                text-white
                                text-center
                                text-[24px]
                            '
                        >
                            Добро пожаловать на сайт,
                        </h2>
                        <h1
                            className='
                                text-white
                                text-center
                            '
                        >
                            Focus zone
                        </h1>
                        <h4
                            className='
                                text-white
                                text-center
                            '
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
  