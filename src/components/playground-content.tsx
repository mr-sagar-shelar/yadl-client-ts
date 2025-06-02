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
import { useCallback, useMemo, useRef, useState } from "react";
import { Edge, Node } from "@xyflow/react";
import { Examples } from "../examples";


export default function PlaygroundContent() {
    const [isCodeVisible] = useAtom(codeVisible);
    const [isSearchShapesVisible] = useAtom(searchShapesVisible);
    const currentPreviewTheme = useAtomValue(previewTheme);
    const editorReference = useRef<YadlEditorRef | null>(null);
    const [currentNodes, setCurrentNodes] = useState<Node[]>([]);
    const [currentEdges, setCurrentEdges] = useState<Edge[]>([]);
    const [currentFonts, setCurrentFonts] = useState<string[] | undefined>([]);
    const [currentCode] = useState<string>(Examples[0].code);

    const loadFontFromObject = useCallback(
        (font: string) => {
            let cssId = 'google-font-' + font

            const cssIdAll = cssId + '-all'
            const existing = document.getElementById(cssId)
            const existingAll = document.getElementById(cssIdAll)
            if (!existing && !existingAll && font) {
                const link = document.createElement('link')
                link.rel = 'stylesheet'
                link.id = cssId
                link.href = `https://fonts.googleapis.com/css2?family=${font}&display=swap`;
                link.setAttribute('data-testid', cssId) // for react testing library
                document.head.appendChild(link)
            }
        },
        []
    );

    useMemo(() => {
        currentFonts?.forEach((fontName) => {
            loadFontFromObject(fontName)
        });
    }, [currentFonts?.length]);

    return (
        <div
            className="w-screen h-screen"
        >
            <ResizablePanelGroup
                direction="horizontal"
                className="w-full h-screen"
            >
                <ResizablePanel defaultSize={25} minSize={10} className={`${isCodeVisible ? 'block' : 'hidden'}`}>
                    <div className="flex h-full items-center justify-center">
                        <YadlEditor
                            ref={editorReference}
                            onChange={(code: YadlEditorResponse) => {
                                setCurrentNodes(code.nodes as Node[]);
                                setCurrentEdges(code.edges as Edge[]);
                                setCurrentFonts(code.fontsUsed);
                            }}
                            code={currentCode}
                            onLoad={() => { }}
                        />
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle className={`${isCodeVisible ? 'flex' : 'hidden'}`} />
                <ResizablePanel defaultSize={50} minSize={40}>
                    <div data-theme={currentPreviewTheme.value} className="flex h-full">
                        <Preview
                            initialNodes={currentNodes}
                            initialEdges={currentEdges}
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
                <ResizableHandle withHandle className={`${isSearchShapesVisible ? 'flex' : 'hidden'}`} />
                <ResizablePanel defaultSize={25} minSize={10} className={`${isSearchShapesVisible ? 'block' : 'hidden'}`}>
                    <div className="flex h-full justify-center">
                        <SearchComponents />
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}
