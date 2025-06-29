import { Suspense } from "react";
import ServerComponent from "./ServerComponent"
import ClientComponent from "./ClientComponent"

// top level here is server component, OK..... by default
// server components cannot be chidlren of client components but other way is OK.... have to mind that
// no hooks on server, must opt into client component
export default function App() {
  console.log("rendering app server component")
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <h1>Notes App</h1>
      <ServerComponent />
      <ClientComponent />
    </Suspense>
  )
}