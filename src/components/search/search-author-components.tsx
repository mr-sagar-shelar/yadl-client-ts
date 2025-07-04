import { useMemo } from "react";
import { AuthorNames } from "yadl-ui-components";
import { memo } from "react";
import { Author } from "yadl-ui-components";
import type { DragDropProps } from "yadl-preview";
import { useDnD } from "yadl-preview";
import "react-fontpicker-ts/dist/index.css";
import { useAtom } from 'jotai'
import { authorName, authorCaption, authorImageSrc, authorNameFontFamilyAtom, authorCaptionFontFamilyAtom } from '@/atoms/author-tag-atoms'

const SearchTextComponents = () => {
    const [currentAuthorNameText] = useAtom(authorName);
    const [currentAuthorCaptionText] = useAtom(authorCaption);
    const [currentAuthorImageSource] = useAtom(authorImageSrc);
    const [currentAuthorNameFontFamily] = useAtom(authorNameFontFamilyAtom);
    const [currentAuthorCaptionFontFamily] = useAtom(authorCaptionFontFamilyAtom);


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
                                    nameFontFamily: currentAuthorNameFontFamily,
                                    captionFontFamily: currentAuthorCaptionFontFamily,
                                    height: 100,
                                    width: 300
                                },
                            })
                        }
                        title={textDetails.name}
                    >
                        <Author
                            {...textDetails}
                            width={300}
                            name={currentAuthorNameText}
                            caption={currentAuthorCaptionText}
                            src={currentAuthorImageSource}
                            nameFontFamily={currentAuthorNameFontFamily}
                            captionFontFamily={currentAuthorCaptionFontFamily}
                        />
                    </div>
                );
            });
        return listItems;
    }, [currentAuthorNameText, currentAuthorCaptionText, currentAuthorImageSource, currentAuthorNameFontFamily, currentAuthorCaptionFontFamily]);

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
