import { StatusBar } from "expo-status-bar"
import { Post } from "./components/Post"


export default function App() {
  return (
   <>
    <Post />
    <StatusBar backgroundColor="white" translucent/>
   </>
  )
}