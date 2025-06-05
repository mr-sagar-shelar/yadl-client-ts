import { useMemo } from "react";
import { TextNames } from "yadl-ui-components";
import { memo } from "react";
import { Text } from "yadl-ui-components";
import type { DragDropProps } from "yadl-preview";
import { useDnD } from "yadl-preview";
import "react-fontpicker-ts/dist/index.css";
import { useAtom } from 'jotai'
import { fontFamily } from '@/atoms/text-tag-atoms'
import { loadFontFromObject } from "@/lib/utils";

const SearchTextComponents = () => {
    const currentText = "Lorem Ipsum";
    const [_, setType] = useDnD();
    const [currentFontFamily] = useAtom(fontFamily);


    const onDragStart = (event: any, nodePayload: DragDropProps) => {
        if (setType) {
            setType(nodePayload);
        }
        event.dataTransfer.effectAllowed = "move";
    };

    useMemo(() => {
        loadFontFromObject(currentFontFamily)
    }, [currentFontFamily]);

    const TextComponent = useMemo(() => {
        const listItems = Object.entries(TextNames)
            .map((text) => {
                const [key, textDetails] = text;
                return (
                    <div
                        key={key}
                        className="m-2 cursor-grab px-2  justify-center !w-full"
                        onDragStart={(event) =>
                            onDragStart(event, {
                                type: "text",
                                data: {
                                    icon: `${key}`,
                                    classes: `text-wrap ${textDetails.classes}`,
                                    text: currentText,
                                    fontFamily: currentFontFamily,
                                    props: {
                                        ...textDetails.props,
                                        width: 100,
                                        height: 20
                                    }
                                },
                            })
                        }
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
                    style={{ fontFamily: currentFontFamily }}
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
