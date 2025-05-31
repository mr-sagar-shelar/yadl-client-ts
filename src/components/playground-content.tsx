import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Preview } from "yadl-preview";
import { SearchComponents } from "@/components/search/search-components";
import { useAtom, useAtomValue } from 'jotai'
import { codeVisible, searchShapesVisible } from '@/atoms/application-config-atoms'
import { previewTheme } from '@/atoms/application-config-atoms'
import { YadlEditor, YadlEditorRef, type YadlEditorResponse } from "yadl-editor";
import { useRef } from "react";

export default function PlaygroundContent() {
    const [isCodeVisible] = useAtom(codeVisible);
    const [isSearchShapesVisible] = useAtom(searchShapesVisible);
    const currentPreviewTheme = useAtomValue(previewTheme);
    const editorReference = useRef<YadlEditorRef | null>(null);

    return (
        <div
            className="w-screen h-screen"
        >
            <ResizablePanelGroup
                direction="horizontal"
                className="w-full h-screen"
            >
                {isCodeVisible && <>
                    <ResizablePanel defaultSize={25} minSize={10}>
                        <div className="flex h-full items-center justify-center p-2">
                            <YadlEditor
                                ref={editorReference}
                                onChange={(code: YadlEditorResponse) => {
                                    console.error(` $$$$$$$$$$ Code Change Called ${code}`);
                                }}
                                code={"// This is hello world example"}
                                onLoad={() => { }}
                            />
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                </>
                }
                <ResizablePanel defaultSize={50} minSize={40}>
                    <div data-theme={currentPreviewTheme.value} className="flex h-full">
                        <Preview
                            initialNodes={[]}
                            initialEdges={[]}
                            onNodeSelect={(node) => {
                                editorReference.current?.onNodeSelect(node);
                            }}
                            onEdgeConnect={(edge: any) => {
                                editorReference.current?.onEdgeConnect(edge);
                            }}
                            onNodePositionChanged={(node: any) => {
                                editorReference.current?.onNodePositionChanged(node);
                            }}
                            onNodeRemoved={(node: any) => {
                                editorReference.current?.onNodeRemoved(node);
                            }}
                            onNodeResized={(node: any) => {
                                editorReference.current?.onNodeResized(node);
                            }}
                            onNodeAdded={(node: any) => {
                                editorReference.current?.onNodeAdded(node);
                            }}
                        />
                    </div>
                </ResizablePanel>
                {isSearchShapesVisible && <>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={25} minSize={10}>
                        <div className="flex h-full justify-center">
                            <SearchComponents />
                        </div>
                    </ResizablePanel>
                </>}
            </ResizablePanelGroup>
        </div>
    )
}
