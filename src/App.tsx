import { Block } from "./components/Block";
import { useFetch } from "./hooks/fetch"

export function App() {
  const { data, error } = useFetch("./Document.json");
  if (!data && !error) {
    return <h1>Loading...</h1>
  } else if (error) {
    return <h1>Error: {error.message}</h1>
  }

  console.log("rerender")
  return (
    <Block block={data} />
  )
}