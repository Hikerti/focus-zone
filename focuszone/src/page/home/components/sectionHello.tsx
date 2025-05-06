import {Button} from "@/components/ui/button.tsx";

export default function SectionHello() {
    return (
      <>
        <section className="w-full">
            <div className="flex flex-col items-center justify-center h-[92vh] gap-8">
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h2>
                        Добро пожаловать на сайт,
                    </h2>
                    <h1>Focus zone</h1>
                    <h4>Проходите новые маршруты и изучайте новые места</h4>
                </div>

                <Button>Перейти к использованию</Button>
            </div>
        </section>
      </>
    );
  }
  