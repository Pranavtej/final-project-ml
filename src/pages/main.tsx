/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yJIs4C6e1qT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="grid h-screen items-center gap-4 px-4 md:px-6">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-3xl font-bold tracking-normal sm:text-4xl lg:text-5xl/none">Disease Prediction</h1>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div className="w-full max-w-md space-y-2">
          <div className="relative">
            <select
              className="peer h-10 w-full border border-gray-200 rounded-lg text-gray-900 appearance-none bg-white peer dark:border-gray-800 dark:text-gray-50 dark:bg-gray-950"
              multiple
            >
              <option>Flu</option>
              <option>Cold</option>
              <option>Fever</option>
              <option>Cough</option>
              <option>Headache</option>
            </select>
            <div className="h-5 w-5 absolute right-3 top-3 peer pointer-events-none svg-transition:text-gray-400 dark:text-gray-400" />
          </div>
        </div>
        <Button className="w-full max-w-xs" variant="outline">
          Submit
        </Button>
      </div>
      <div className="grid gap-4 w-full max-w-sm justify-self-center">
        <Card>
          <CardHeader>
            <CardTitle>Result</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              You have selected Flu, Fever, and Cough. Your prediction will be ready in 24 hours.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

