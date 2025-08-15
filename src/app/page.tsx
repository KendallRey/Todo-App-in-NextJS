
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { getQueryClient } from "../lib/query"
import { getTodosOptions } from "../lib/queryOptions"
import TodoList from "@/components/shared/TodoList"
import { Header } from "@/ui/Header"

export default async function Page() {

  const queryClient = getQueryClient()

  void queryClient.prefetchQuery(getTodosOptions)

  return (
    <main className="md:max-w-[800px] mx-auto mt-24 flex flex-col gap-4">
      <Header />
      <div className="flex flex-col gap-5 ">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <TodoList/>
        </HydrationBoundary>
      </div>
    </main>
  )
}
