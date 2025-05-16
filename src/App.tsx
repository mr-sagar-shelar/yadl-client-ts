import "./App.css";
import "@xyflow/react/dist/style.css";
import "yadl-preview/dist/yadl-preview.css";
import "react-fontpicker-ts/dist/index.css";
import { Preview, SearchComponents, DnDProvider } from "yadl-preview";
import { YadlEditor, YadlEditorRef, YadlEditorResponse } from "yadl-editor";
import { Allotment } from "allotment";
import "./allotment.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { Edge, Node } from "@xyflow/react";
import { debounce } from "lodash";

function App() {
  const [currentNodes, setCurrentNodes] = useState<Node[]>([]);
  const [currentEdges, setCurrentEdges] = useState<Edge[]>([]);
  const editorReference = useRef<YadlEditorRef | null>(null);
  const [codeVisible, setCodeVisible] = useState(true);
  const [previewVisible, setPreviewVisible] = useState(true);
  const [componentsVisible, setComponentsVisible] = useState(true);
  const [hasReadFromLocalStorage, setHasReadFromLocalStorage] = useState(false);
  const [sizes, setSizes] = useState<number[]>();


  const handleChange = useMemo(
    () =>
      debounce((sizes: any) => {
        localStorage.setItem("sizes", JSON.stringify(sizes));
      }, 100),
    []
  );

  useEffect(() => {
    const value = localStorage.getItem("sizes");

    if (value) {
      setSizes(JSON.parse(value));
    }

    setHasReadFromLocalStorage(true);
  }, []);


  return (
    <div>
      <DnDProvider>
        <div>
          <button
            className="btn btn-ghost"
            onClick={() => {
              setCodeVisible((codeVisible) => !codeVisible);
            }}
          >
            Code
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => {
              setPreviewVisible((previewVisible) => !previewVisible);
            }}
          >
            Preview
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => {
              setComponentsVisible((componentsVisible) => !componentsVisible);
            }}
          >Components</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
          <div style={{ minHeight: "100vh", width: "100%" }}>
            {hasReadFromLocalStorage &&
              <Allotment
                snap
                defaultSizes={sizes}
                onChange={handleChange}
              >
                <Allotment.Pane visible={codeVisible}>
                  <div style={{ height: "100vh", width: "100%" }}>
                    <YadlEditor
                      ref={editorReference}
                      onChange={(code: YadlEditorResponse) => {
                        setCurrentNodes(code.nodes as Node[]);
                        setCurrentEdges(code.edges as Edge[]);
                      }}
                      code={`
aws-icon aWSAnalyticsAthena { position { x: 0 y: 100 } dimension { width: 100 height: 100 } }

azure-icon azureAiMachineLearningAIStudio  { position { x: 0 y: 200 } }
`}
                    />
                  </div>
                </Allotment.Pane>
                <Allotment.Pane visible={previewVisible}>
                  <div style={{ height: "100vh", width: "100%" }}>
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
                </Allotment.Pane>
                <Allotment.Pane visible={componentsVisible}>
                  <SearchComponents />
                </Allotment.Pane>
              </Allotment>
            }
          </div>
        </div>
      </DnDProvider>
    </div>
  );
}

export default App;
