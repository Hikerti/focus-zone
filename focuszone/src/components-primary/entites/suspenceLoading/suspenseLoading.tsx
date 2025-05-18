import {Skeleton} from "@/components/ui/skeleton.tsx";

const SuspenseLoading = () => {
    return (
        <div>
            <Skeleton
                className='w-9/10 h-screen'
            />
        </div>
    );
};

export default SuspenseLoading;