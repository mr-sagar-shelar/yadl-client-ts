import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useAtom, useSetAtom } from 'jotai'
import { codeVisible, searchShapesVisible, previewTheme, videoData as videoDataAtom } from '@/atoms/application-config-atoms'
import { ThemeNames } from "@/components/constants/ThemeNames";
import { toPng, toJpeg, toSvg } from 'html-to-image';
import { fixWebmDuration } from "@fix-webm-duration/fix";
import getBlobDuration from "get-blob-duration";
import { useEffect, useState } from "react";
import { SettingsDialog } from "../settings-dialog";

interface HeaderMenuProps {
    onVisibilityChange: (isHidden: boolean) => void
}

export function HeaderMenu(props: HeaderMenuProps) {
    const [isCodeVisible, setCodeVisible] = useAtom(codeVisible);
    const setCurrentVideoData = useSetAtom(videoDataAtom);
    const [isSearchShapesVisible, setSearchShapesVisible] = useAtom(searchShapesVisible);
    const [currentPreviewTheme, setPreviewTheme] = useAtom(previewTheme);
    const [showExportDialog, setShowExportDialog] = useState<boolean>(false);

    const { onVisibilityChange } = props;
    let mediaStream: MediaStream = null;
    let settings: MediaTrackSettings = null;
    let videoEl: HTMLVideoElement = null;
    let mediaRecorder: MediaRecorder = null;
    let videoData: any = null;
    const mimeType = "video/webm;codecs=h264";

    const startRecording = async () => {
        onVisibilityChange(true);
        const blobSlice: BlobPart[] = [];
        mediaStream = await navigator.mediaDevices.getDisplayMedia({
            video: {
                width: 2056,
                height: 1329,
                frameRate: 60,

            },
            audio: false,

            // @ts-ignore
            preferCurrentTab: true,
        });

        videoEl.srcObject = mediaStream;
        settings = mediaStream.getVideoTracks()[0].getSettings();

        mediaRecorder = new MediaRecorder(mediaStream, {
            mimeType: mimeType,
        });
        mediaRecorder.addEventListener("dataavailable", async (event) => {
            var data = event.data;
            if (data && data.size > 0) {
                blobSlice.push(data);
            }
        });
        mediaRecorder.onstop = async () => {
            console.error(` $$$$ Stoppeding`);
            const finalBlob = new Blob([...blobSlice], { type: "video/webm" });
            const duration = await getBlobDuration(finalBlob);
            console.log(duration + " seconds");
            const fixedBlob = await fixWebmDuration(finalBlob, duration * 1000);
            videoData = finalBlob;
            setCurrentVideoData(finalBlob);
            videoEl.srcObject = null;
            videoEl.src = URL.createObjectURL(fixedBlob);
            onVisibilityChange(false);
            setShowExportDialog(true)

        };
        mediaRecorder.start();
    };

    useEffect(() => {
        videoEl = document.getElementById("video-el") as HTMLVideoElement;
    });

    const renderThemeNames = () => {
        return ThemeNames.map(theme =>
            <MenubarRadioItem
                key={theme.value}
                value={theme.title}
                onClick={() => {
                    setPreviewTheme(theme)
                }}
            >
                {theme.title}
            </MenubarRadioItem>
        )
    }

    return (
        <>
            <Menubar className={`border-0 shadow-none`}>
                <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Copy code</MenubarItem>
                        <MenubarItem>Format code</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Export</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem
                            onClick={() => {
                                onVisibilityChange(true);
                                const editorNode = document.getElementById("editor");
                                if (editorNode) {
                                    toJpeg(editorNode, { quality: 0.95 })
                                        .then(function (dataUrl) {
                                            var link = document.createElement('a');
                                            link.download = 'my-image-name.jpeg';
                                            link.href = dataUrl;
                                            link.click();
                                        }).finally(() => {
                                            onVisibilityChange(false);
                                        });
                                }
                            }}
                        >
                            JPEG
                        </MenubarItem>
                        <MenubarItem
                            onClick={() => {
                                onVisibilityChange(true);
                                const editorNode = document.getElementById("editor");
                                if (editorNode) {
                                    toPng(editorNode, { quality: 0.95 })
                                        .then(function (dataUrl) {
                                            var link = document.createElement('a');
                                            link.download = 'my-image-name.png';
                                            link.href = dataUrl;
                                            link.click();
                                        }).finally(() => {
                                            onVisibilityChange(false);
                                        });
                                }
                            }}
                        >
                            PNG
                        </MenubarItem>
                        <MenubarItem
                            onClick={() => {
                                onVisibilityChange(true);
                                const editorNode = document.getElementById("editor");
                                if (editorNode) {
                                    toSvg(editorNode, { quality: 0.95 })
                                        .then(function (dataUrl) {
                                            var link = document.createElement('a');
                                            link.download = 'my-image-name.svg';
                                            link.href = dataUrl;
                                            link.click();
                                        }).finally(() => {
                                            onVisibilityChange(false);
                                        });
                                }
                            }}
                        >
                            SVG
                        </MenubarItem>
                        <MenubarItem
                            onClick={() => {
                                startRecording();
                            }}
                        >
                            WEBP
                        </MenubarItem>
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
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>View</MenubarTrigger>
                    <MenubarContent>
                        <MenubarCheckboxItem
                            checked={isCodeVisible}
                            onClick={() => setCodeVisible(!isCodeVisible)}
                        >
                            Code
                        </MenubarCheckboxItem>
                        <MenubarCheckboxItem
                            checked={isSearchShapesVisible}
                            onClick={() => setSearchShapesVisible(!isSearchShapesVisible)}
                        >
                            Shapes
                        </MenubarCheckboxItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Preview Theme</MenubarTrigger>
                    <MenubarContent>
                        <ScrollArea className="h-72 w-48">
                            <MenubarRadioGroup
                                value={currentPreviewTheme.title}
                            >
                                {renderThemeNames()}
                            </MenubarRadioGroup>
                        </ScrollArea>
                        <MenubarSeparator />
                        <MenubarItem disabled inset>Make your theme.</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
            <SettingsDialog isOpen={showExportDialog} />
        </>
    )
}
