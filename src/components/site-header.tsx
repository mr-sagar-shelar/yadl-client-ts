// import { Plus } from "lucide-react"
// import { Button } from "@/components/ui/button"
import { HeaderMenu } from "./layout/header-menu"
import { PresetShare } from "./layout/preset-share"
import { ThemeToggle } from "./layout/mode-toggle"
// import { useTheme } from "./theme-provider"

export function SiteHeader() {
  // const { theme } = useTheme()

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b print:hidden">
      {/* <a href="https://yadl.in">
        <img className="img img-dark pl-2 link" width="100"
          src={`/yadl-client-ts/images/logo${theme == "dark" ? "-darkmode" : ""}.png`} alt="YADL" />
      </a> */}
      <div className="flex h-(--header-height) w-full items-center gap-2 pr-4">
        <HeaderMenu />
        <div className="ml-auto px-3 flex gap-4">
          <PresetShare />
          {/* <Button >
            <Plus />
          </Button> */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
