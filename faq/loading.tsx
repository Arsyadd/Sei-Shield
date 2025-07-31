import { Skeleton } from "@/components/ui/skeleton"

export default function FAQLoading() {
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

            <div className="mx-auto max-w-3xl">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="border-b border-border/40 py-4">
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
