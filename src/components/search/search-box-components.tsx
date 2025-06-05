import { useMemo } from "react";
import * as Boxes from "yadl-ui-components";
import { memo } from "react";
import { BoxNames } from "@/components/constants/BoxNames";
import type { DragDropProps } from "yadl-preview";
import { useDnD } from "yadl-preview";


const SearchBoxes = () => {
    const [_, setType] = useDnD();
    const onDragStart = (event: any, nodePayload: DragDropProps) => {
        if (setType) {
            setType(nodePayload);
        }
        event.dataTransfer.effectAllowed = "move";
    };

    const IconsComponent = useMemo(() => {
        const listItems = Object.entries(BoxNames)
            .map((icon) => {
                const [key, boxDetails] = icon;
                // @ts-ignore
                let Box = Boxes[boxDetails.component];

                if (Box) {
                    return (
                        <div
                            key={key}
                            className="m-2 cursor-grab px-2"
                            title={boxDetails.name}
                            onDragStart={(event) =>
                                onDragStart(event, {
                                    type: "box",
                                    data: {
                                        component: boxDetails.component,
                                        props: {
                                            ...boxDetails.props,
                                            classes: `${boxDetails.props.classes}`,
                                        }
                                    },
                                })
                            }
                            draggable
                        >
                            {Box && <Box {...boxDetails.props} classes={`${boxDetails.props.classes}`} />}
                        </div>
                    );
                }
                return null;
            });
        return listItems;
    }, []);

    return (
        <>
            <div className="h-full">
                <div className="flex flex-wrap overflow-auto h-full">
                    {IconsComponent}
                </div>
            </div>
        </>
    );
};

const Memo = memo(SearchBoxes);
export default Memo;
