import {X} from "lucide-react";

import {useMapData} from "@/page/map/store/store.ts";

const AddPoints = () => {

    const titlePlaces = useMapData(state => state.titlePlaces)
    const points = useMapData(state => state.points);

    const deletePoints = useMapData(state => state.deletePoints);

    return (
            <div
                className='
                    flex
                    flex-col gap-4
                    h-screen
                    overflow-hidden
                '
            >
                <div
                    className="
                        flex-1
                        overflow-y-auto
                        rounded-md border-2 border-zinc-200
                    "
                >
                    {points.map((point, i) => (
                        <div
                            key={i}
                            className='
                                flex
                                flex-col
                                p-4
                            '
                        >
                            <div
                                className='
                                    w-full
                                    flex
                                    items-center justify-between gap-4
                                '
                            >
                                <span>
                                    {i + 1}
                                </span>
                                <div>
                                    <h6>
                                        Координаты:
                                    </h6>
                                    <div
                                        className='flex gap-2'
                                    >
                                        <p
                                            className='text-[12px]'
                                        >
                                            {point.lng.toFixed(4)}
                                        </p>
                                        <p
                                            className='text-[12px]'
                                        >
                                            {point.lat.toFixed(4)}
                                        </p>
                                    </div>
                                </div>
                                <X
                                    className='cursor-pointer'
                                    onClick={(e) => deletePoints(point, e)}
                                />
                            </div>
                            {
                                titlePlaces[i] == 'Маркер'
                                ?
                                    <h4>
                                        Маркер {i + 1}
                                    </h4>
                                :
                                    <h4>
                                        {titlePlaces[i]}
                                    </h4>
                            }
                            <span
                                className='
                                    h-[1px] w-full
                                    bg-zinc-900
                                    mt-2
                                '
                            />
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default AddPoints;