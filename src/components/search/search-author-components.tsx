import { useMemo } from "react";
import { AuthorNames } from "yadl-ui-components";
import { memo } from "react";
import { Author } from "yadl-ui-components";
import type { DragDropProps } from "yadl-preview";
import { useDnD } from "yadl-preview";
import "react-fontpicker-ts/dist/index.css";
import { useAtom } from 'jotai'
import { authorName, authorCaption, authorImageSrc } from '@/atoms/author-tag-atoms'

const SearchTextComponents = () => {
    const [currentAuthorNameText] = useAtom(authorName);
    const [currentAuthorCaptionText] = useAtom(authorCaption);
    const [currentAuthorImageSource] = useAtom(authorImageSrc);


    const [_, setType] = useDnD();
    const onDragStart = (event: any, nodePayload: DragDropProps) => {
        if (setType) {
            setType(nodePayload);
        }
        event.dataTransfer.effectAllowed = "move";
    };

    const TextComponent = useMemo(() => {
        const listItems = Object.entries(AuthorNames)
            .map((text) => {
                const [key, textDetails] = text;
                return (
                    <div
                        key={key}
                        className="m-2 cursor-grab px-5"
                        onDragStart={(event) =>
                            onDragStart(event, {
                                type: "author",
                                data: {
                                    ...textDetails,
                                    name: currentAuthorNameText,
                                    caption: currentAuthorCaptionText,
                                    src: currentAuthorImageSource,
                                },
                            })
                        }
                        draggable
                        title={textDetails.name}
                    >
                        <Author
                            {...textDetails}
                            name={currentAuthorNameText}
                            caption={currentAuthorCaptionText}
                            src={currentAuthorImageSource}
                        />
                    </div>
                );
            });
        return listItems;
    }, [currentAuthorNameText, currentAuthorCaptionText, currentAuthorImageSource]);

    return (
        <>
            <div>
                <div
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
