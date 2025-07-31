import { Skeleton } from "@/components/ui/skeleton"

export default function DocsLoading() {
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

            <div className="grid gap-12 md:grid-cols-[1fr_3fr] lg:gap-20">
              <nav className="sticky top-24 hidden h-fit space-y-2 md:block">
                <Skeleton className="h-6 w-32 mb-4" />
                <ul className="space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i}>
                      <Skeleton className="h-5 w-48" />
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-12">
                {[1, 2, 3, 4, 5].map((i) => (
                  <section key={i} className="scroll-mt-24">
                    <Skeleton className="h-8 w-64 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6" />
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
