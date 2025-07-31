import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Skeleton className="size-8 rounded-lg" />
            <Skeleton className="h-6 w-24" />
          </div>
          <div className="hidden md:flex gap-8">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
          </div>
          <div className="hidden md:flex gap-4 items-center">
            <Skeleton className="size-9 rounded-full" />
            <Skeleton className="h-10 w-32 rounded-full" />
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Skeleton className="size-9 rounded-full" />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Skeleton className="h-8 w-48 mx-auto mb-4" />
              <Skeleton className="h-12 w-full max-w-xl mx-auto mb-6" />
              <Skeleton className="h-6 w-full max-w-md mx-auto mb-8" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Skeleton className="h-12 w-40 rounded-full" />
              </div>
              <Skeleton className="h-4 w-64 mx-auto mt-6" />
            </div>
            <div className="relative mx-auto max-w-5xl">
              <Skeleton className="w-full h-[400px] rounded-xl" />
            </div>
          </div>
        </section>

        <section className="w-full py-12 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Skeleton className="h-4 w-48" />
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-8 w-24" />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Skeleton className="h-6 w-32 rounded-full" />
              <Skeleton className="h-10 w-full max-w-lg" />
              <Skeleton className="h-6 w-full max-w-2xl" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-48 w-full rounded-lg" />
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Skeleton className="h-12 w-48 rounded-full" />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-6 w-24" />
                <ul className="space-y-2 text-sm">
                  <li>
                    <Skeleton className="h-4 w-20" />
                  </li>
                  <li>
                    <Skeleton className="h-4 w-20" />
                  </li>
                  <li>
                    <Skeleton className="h-4 w-20" />
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <Skeleton className="h-4 w-48" />
            <div className="flex gap-4">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
