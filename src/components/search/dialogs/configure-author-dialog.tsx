import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useAtom } from 'jotai'
import { authorName, authorCaption, authorImageSrc } from '@/atoms/author-tag-atoms'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ConfigureTextProps {
    isOpen: boolean;
    onStatusChange: (isOpen: boolean) => void;
}

export function ConfigureAuthorDialog(props: ConfigureTextProps) {
    const [currentAuthorNameText, setAuthorNameText] = useAtom(authorName);
    const [currentAuthorCaptionText, setAuthorCaptionText] = useAtom(authorCaption);
    const [currentAuthorImageSource, setAuthorImageSource] = useAtom(authorImageSrc);


    return (
        <Dialog
            open={props.isOpen}
            onOpenChange={(isOpen) => {
                props.onStatusChange(isOpen)
            }}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Author Variant</DialogTitle>
                    <DialogDescription>
                        New variants added by you will be stored in your local cache and will be cleared if the cache is cleared.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="flex flex-wrap gap-5 pb-5">
                        <h3>Author</h3>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="author-name">Name</Label>
                        <Input
                            id="author-name"
                            value={currentAuthorNameText}
                            onChange={(event) => {
                                setAuthorNameText(event.target.value);
                            }}
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="author-caption">Caption</Label>
                        <Input
                            id="author-caption"
                            value={currentAuthorCaptionText}
                            onChange={(event) => {
                                setAuthorCaptionText(event.target.value);
                            }}
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="author-caption">Source (Base 64)</Label>
                        <Input
                            id="author-caption"
                            value={currentAuthorImageSource}
                            onChange={(event) => {
                                setAuthorImageSource(event.target.value);
                            }}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={() => { props.onStatusChange(false) }}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
