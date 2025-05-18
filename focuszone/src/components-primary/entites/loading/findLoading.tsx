import { Skeleton } from "@/components/ui/skeleton"

export const FindLoading = (isPending?: boolean) => {
    return (
        <>
            {isPending &&
                <div>
                    <Skeleton
                    className='w-9/10 h-screen'
                    />
                </div>
            }
        </>
)
}