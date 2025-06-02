import { useMemo } from "react";
import { memo } from "react";
import { Avatar, AvatarNames } from "yadl-avatar";
import type { DragDropProps } from "yadl-preview";
import { useDnD } from "yadl-preview";
import { CONSTANTS } from "../constants";
import type { AvatarProps } from "yadl-avatar/dist/components/AvatarComponent";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const SearchAvatars = () => {
    const [_, setType] = useDnD();
    const onDragStart = (event: any, nodePayload: DragDropProps) => {
        if (setType) {
            setType(nodePayload);
        }
        event.dataTransfer.effectAllowed = "move";
    };

    const AvatarComponent = useMemo(() => {
        const listItems = Object.entries(AvatarNames)
            .map((text) => {
                const [key, textDetails] = text;
                return (
                    <div
                        key={key}
                        className={`m-2 cursor-grab px-5 size-[${CONSTANTS.iconPreviewSize}px]`}
                        onDragStart={(event) =>
                            onDragStart(event, {
                                type: "avatar",
                                data: {
                                    ...textDetails as AvatarProps,
                                    width: CONSTANTS.iconDropSize,
                                    height: CONSTANTS.iconDropSize
                                },
                            })
                        }
                        draggable
                    >
                        <HoverCard>
                            <HoverCardTrigger>
                                <Avatar
                                    {...textDetails as AvatarProps}
                                    width={CONSTANTS.iconPreviewSize}
                                    height={CONSTANTS.iconPreviewSize}
                                />
                            </HoverCardTrigger>
                            <HoverCardContent className="w-[200px] h-[200px]">
                                <Avatar
                                    {...textDetails as AvatarProps}
                                    width={CONSTANTS.iconHoverSize}
                                    height={CONSTANTS.iconHoverSize}
                                />
                            </HoverCardContent>
                        </HoverCard>

                    </div>
                );
            });
        return listItems;
    }, [top]);

    return (
        <>
            <div>
                <div
                    className={`flex flex-wrap overflow-auto w-full h-full`}
                >
                    {AvatarComponent}
                </div>
            </div>
        </>
    );
};

const Memo = memo(SearchAvatars);
export default Memo;
