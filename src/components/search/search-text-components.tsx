import { useMemo } from "react";
import { TextNames } from "yadl-ui-components";
import { memo } from "react";
import { Text } from "yadl-ui-components";
import type { DragDropProps } from "yadl-preview";
import { useDnD } from "yadl-preview";
import "react-fontpicker-ts/dist/index.css";

const SearchTextComponents = () => {
    const currentText = "Lorem Ipsum";
    const currentFont = "Audiowide";
    const [_, setType] = useDnD();
    const onDragStart = (event: any, nodePayload: DragDropProps) => {
        if (setType) {
            setType(nodePayload);
        }
        event.dataTransfer.effectAllowed = "move";
    };

    const TextComponent = useMemo(() => {
        const listItems = Object.entries(TextNames)
            .map((text) => {
                const [key, textDetails] = text;
                return (
                    <div
                        key={key}
                        className="m-2 cursor-grab px-5"
                        onDragStart={(event) =>
                            onDragStart(event, {
                                type: "text",
                                data: {
                                    icon: `${key}`,
                                    classes: `text-wrap ${textDetails.classes}`,
                                    text: currentText,
                                    fontFamily: currentFont,
                                    props: textDetails.props,
                                },
                            })
                        }
                        draggable
                        title={textDetails.name}
                    >
                        <Text
                            text={currentText}
                            classes={`${textDetails.classes}`}
                        />
                    </div>
                );
            });
        return listItems;
    }, []);

    return (
        <>
            <div>
                <div
                    style={{ fontFamily: currentFont }}
                    className={`grid grid-cols-1 overflow-auto w-full h-full`}
                >
                    {TextComponent}
                </div>
            </div>
        </>
    );
};

const Memo = memo(SearchTextComponents);
export default Memo;
