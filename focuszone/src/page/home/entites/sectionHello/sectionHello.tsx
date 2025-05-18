import {Button} from "@/components/ui/button.tsx";
import BgForMainPage from '../../../../assets/images/bgformainpage.png'

export default function SectionHello() {
    return (
      <>
        <section className="w-screen">
            <div className="w-screen h-[84vh] flex flex-col items-center justify-center  gap-8">
                <div className='w-full h-full relative flex flex-col items-center justify-center gap-2'>
                    <img
                        src={BgForMainPage}
                        alt="bgformainpage"
                        className='absolute w-full h-full object-cover z-0'
                    />
                    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                    <div className='relative flex flex-col items-center justify-center gap-2 z-20'>
                        <h2
                            className='text-white'
                        >
                            Добро пожаловать на сайт,
                        </h2>
                        <h1
                            className='text-white'
                        >
                            Focus zone
                        </h1>
                        <h4
                            className='text-white'
                        >
                            Проходите новые маршруты и изучайте новые места
                        </h4>
                        <Button>Перейти к использованию</Button>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }
  