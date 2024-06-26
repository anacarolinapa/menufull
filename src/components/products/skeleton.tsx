import { Skeleton } from "@/components/ui/skeleton";

export default function TabsSkeleton() {
    return (
       <div>
            <Skeleton className="w-full h-10 rounded-xl" />

            <div className="mt-6 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {Array.from({ length: 6 }, (item, index) => (
                    <div key={index}>
                        <Skeleton className="w-full h-32 rounded-xl" />
                        <Skeleton className="w-full h-7 mt-2 rounded-xl" />
                        <Skeleton className="w-16 h-5 mt-2 rounded-xl" />
                        <Skeleton className="w-full h-9 mt-2 rounded-xl" />
                    </div>
                ))}
            </div>
       </div>
    );
}