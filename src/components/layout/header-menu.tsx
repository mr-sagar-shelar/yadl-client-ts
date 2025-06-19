import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarMenu,
    // MenubarRadioGroup,
    // MenubarRadioItem,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
// import { ScrollArea } from "@/components/ui/scroll-area"
import { useAtom } from 'jotai'
import { codeVisible, searchShapesVisible } from '@/atoms/application-config-atoms'
// import { ThemeNames } from "@/components/constants/ThemeNames";
import { useEffect } from "react";

export function HeaderMenu() {
    const [isCodeVisible, setCodeVisible] = useAtom(codeVisible);
    const [isSearchShapesVisible, setSearchShapesVisible] = useAtom(searchShapesVisible);
    // const [currentPreviewTheme, setPreviewTheme] = useAtom(previewTheme);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "e" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setCodeVisible((open) => !open)
            } else if (e.key === "s" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setSearchShapesVisible((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    // const renderThemeNames = () => {
    //     return ThemeNames.map(theme =>
    //         <MenubarRadioItem
    //             key={theme.value}
    //             value={theme.title}
    //             onClick={() => {
    //                 setPreviewTheme(theme)
    //             }}
    //         >
    //             {theme.title}
    //         </MenubarRadioItem>
    //     )
    // }

    return (
        <Menubar className="border-0 shadow-none">
            {/* <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Copy code</MenubarItem>
                    <MenubarItem>Format code</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Export</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>JPG</MenubarItem>
                    <MenubarItem>WEBP</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>MP4</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Capture Screen</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Convert to MP4.</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                </MenubarContent>
            </MenubarMenu> */}
            <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                    <MenubarCheckboxItem
                        checked={isCodeVisible}
                        onClick={() => setCodeVisible(!isCodeVisible)}
                    >
                        Editor <MenubarShortcut>⌘E</MenubarShortcut>
                    </MenubarCheckboxItem>
                    <MenubarCheckboxItem
                        checked={isSearchShapesVisible}
                        onClick={() => setSearchShapesVisible(!isSearchShapesVisible)}
                    >
                        Shapes <MenubarShortcut>⌘S</MenubarShortcut>
                    </MenubarCheckboxItem>
                    {/* <MenubarSeparator />
                    <MenubarItem inset>Toggle Fullscreen</MenubarItem> */}
                </MenubarContent>
            </MenubarMenu>
            {/* <MenubarMenu>
                <MenubarTrigger>Preview Theme</MenubarTrigger>
                <MenubarContent>
                    <ScrollArea className="h-72 w-48">
                        <MenubarRadioGroup
                            value={currentPreviewTheme.title}
                        >
                            {renderThemeNames()}
                        </MenubarRadioGroup>
                    </ScrollArea>
                </MenubarContent>
            </MenubarMenu> */}
        </Menubar>
    )
}
