import { Suspense } from "react"
import { Loader2 } from "lucide-react"

function LoadingContent() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}

export default function Loading() {
  return (
    <Suspense fallback={<LoadingContent />}>
      <LoadingContent />
    </Suspense>
  )
}
