const BottomBarMapLayout = () => {
    return (
        <>
            <div className='w-full flex bg-white justify-between p-4 border-t-2 border-zinc-900'>
                <div className='bg-zinc-200 p-4 rounded-lg'>
                    <h5>Общая длина маршрута:</h5>
                    <h2>3,4 км</h2>
                </div>
                <div className='flex gap-4'>
                    <div className='bg-zinc-200 p-4 rounded-lg'>
                        <h5>Время прохождения:</h5>
                        <h2>2 часа 3 минуты</h2>
                    </div>
                    <div className='bg-zinc-200 flex p-4 rounded-lg gap-2 items-center'>
                        <h4>Скорость:</h4>
                        <h4>34 км/ч</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BottomBarMapLayout;