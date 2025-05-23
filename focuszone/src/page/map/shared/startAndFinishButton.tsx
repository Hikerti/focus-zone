import {Button} from "@/components/ui/button";
import {takeMapScreenshot} from "@/page/map/functions/takeScreenshot";
import {useMapData} from "@/page/map/store/store";

const StartAndFinishButton = () => {

    const setStartPath = useMapData(state => state.setStartPath)
    const setUrlScreen = useMapData(state => state.setUrlScreen);
    const setLength = useMapData(state => state.setLength);
    const setTime = useMapData(state => state.setTime);

    const handelRunPath = async () => {
        const url = await takeMapScreenshot()
        if (url) {
            setUrlScreen(url)
        }
    }

    return (
        <div
            className='
                flex
                flex-col gap-2
            '
        >
            <Button
                className='
                    w-full
                '
                onClick={() => {
                    setStartPath(true)
                    handelRunPath()
                }}
                variant='secondary'
            >
                Начать
            </Button>
            <Button
                className='
                    w-full
                '
                onClick={() => {
                    setStartPath(false)
                    setLength("0")
                    setTime(0)
                }}
                variant='secondary'
            >
                Закончить
            </Button>
        </div>
    );
};

export default StartAndFinishButton;