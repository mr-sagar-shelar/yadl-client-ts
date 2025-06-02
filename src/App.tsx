import { SiteHeader } from "@/components/site-header"
import "@xyflow/react/dist/style.css";
import "yadl-preview/dist/yadl-preview.css";
import "react-fontpicker-ts/dist/index.css";
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar";
import { DnDProvider } from "yadl-preview";
import PlaygroundContent from "./components/playground-content"

function App() {
  return (
    <ThemeProvider defaultTheme={"system"} storageKey="theme">
      <SidebarProvider>
        <DnDProvider>
          <div className="[--header-height:calc(theme(spacing.14))]">
            <SiteHeader />
            <PlaygroundContent />
          </div>
        </DnDProvider>
      </SidebarProvider>
    </ThemeProvider >
  )
}

export default App;


/*

var totalTexts = [];
document.getElementsByClassName("grid w-full grid-cols-[auto_auto] border-b border-gray-900/10 dark:border-white/10")[0].childNodes[1].childNodes.forEach(element => {
    console.log(element.childNodes[0].innerText);
    totalTexts.push(element.childNodes[0].innerText);
})

var totalTexts = [];
document.getElementsByClassName("grid w-full grid-cols-[auto_auto] border-b border-gray-900/10 dark:border-white/10")[0].childNodes[2].childNodes.forEach(element => {
    console.log(element.childNodes[0].innerText);
    totalTexts.push(element.childNodes[0].innerText);
})

copy(totalTexts.join(" "))

*/