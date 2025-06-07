import { atomWithStorage } from 'jotai/utils';

export const authorName = atomWithStorage("author-tag-name", "John Doe");
export const authorNameFontFamilyAtom = atomWithStorage("author-name-font-family", "Audiowide");
export const authorCaptionFontFamilyAtom = atomWithStorage("author-caption-font-family", "Audiowide");

export const authorCaption = atomWithStorage("author-tag-caption", "Web Developer");
export const authorImageSrc = atomWithStorage("author-tag-image-src", "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80");
