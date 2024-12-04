import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Basic } from "./Basic";
import { PersonTree } from "./PersonTree";
import { PersonGallery } from "./PersonGallery";
import { Documents } from "./Documents";
import { Notes } from "./Notes";

export default function Person() {
    return (
        <Tabs defaultValue="basic" className="mt-1">
            <div className="overflow-x-auto m-1">
                <TabsList className="flex justify-start p-0">
                    <TabsTrigger className="grow" value="basic">Informacje</TabsTrigger>
                    <TabsTrigger className="grow" value="tree">Drzewo</TabsTrigger>
                    <TabsTrigger className="grow" value="photos">Zdjęcia</TabsTrigger>
                    <TabsTrigger className="grow" value="documents">Dokumenty</TabsTrigger>
                    <TabsTrigger className="grow" value="notes">Notatki</TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value="basic">
                <Basic />
            </TabsContent>
            <TabsContent value="tree">
                <PersonTree />
            </TabsContent>
            <TabsContent value="photos">
                <PersonGallery />
            </TabsContent>
            <TabsContent value="documents">
                <Documents />
            </TabsContent>
            <TabsContent value="notes">
                <Notes />
            </TabsContent>
        </Tabs>
    );
}
