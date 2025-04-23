import "./App.css";
import "@xyflow/react/dist/style.css";
import "yadl-preview/dist/yadl-preview.css";
import { Preview } from "yadl-preview";
import { YadlEditor, YadlEditorRef, YadlEditorResponse } from "yadl-editor";
import { Allotment } from "allotment";
import "./allotment.css";
import { useRef, useState } from "react";
import { Edge, Node } from "@xyflow/react";

function App() {
  const [currentNodes, setCurrentNodes] = useState<Node[]>([]);
  const [currentEdges, setCurrentEdges] = useState<Edge[]>([]);
  const editorReference = useRef<YadlEditorRef | null>(null);

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
        <div style={{ minHeight: "100vh", width: "100%" }}>
          <Allotment>
            <YadlEditor
              ref={editorReference}
              onChange={(code: YadlEditorResponse) => {
                setCurrentNodes(code.nodes as Node[]);
                setCurrentEdges(code.edges as Edge[]);
              }}
              code={`
aws-icon aWSAnalyticsAthena { position { x: 0 y: 100 } }

azure-icon azureAiMachineLearningAIStudio  { position { x: 0 y: 200 } }
`}
            />
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
                onNodeChange={(node: any) => {
                  editorReference.current?.onNodeChange(node);
                }}
              />
            </div>
          </Allotment>
        </div>
      </div>
    </div>
  );
}

export default App;
