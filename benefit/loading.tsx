import { Skeleton } from "@/components/ui/skeleton"

export default function BenefitLoading() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Skeleton className="h-8 w-48 mx-auto mb-4" />
              <Skeleton className="h-12 w-full max-w-xl mx-auto mb-6" />
              <Skeleton className="h-6 w-full max-w-md mx-auto mb-8" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="h-full">
                  <Skeleton className="h-full w-full rounded-lg p-6 flex flex-col items-center text-center">
                    <Skeleton className="size-16 rounded-full mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-4" />
                    <Skeleton className="h-4 w-full flex-1" />
                    <Skeleton className="h-4 w-full" />
                  </Skeleton>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
