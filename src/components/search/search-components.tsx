import { Minus, Plus, Cog } from "lucide-react"
import { SearchForm } from "@/components/search/search-form"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { lazy, Suspense, useState } from "react";
const SearchAwsIconsLazy = lazy(() => import('./search-aws-icons'));
const SearchSkillIconsLazy = lazy(() => import('./search-skill-icons'));
const SearchAzureIconsLazy = lazy(() => import('./search-azure-icons'));
const SearchGcpIconsLazy = lazy(() => import('./search-gcp-icons'));
const SearchTextComponentsLazy = lazy(() => import('./search-text-components'));
const SearchBoxComponentsLazy = lazy(() => import('./search-box-components'));
const SearchAvatarsLazy = lazy(() => import('./search-avatars'));
// import SearchAvatars from "./search-avatars";
import { ConfigureTextDialog } from "./dialogs/configure-text-dialog";
import { ConfigureBoxDialog } from "./dialogs/configure-box-dialog";
import { ConfigureAvatarDialog } from "./dialogs/configure-avatar-dialog";

export function SearchComponents() {
  let [configureTextDialogOpen, setConfigureTextDialogOpen] = useState<boolean>(false);
  let [configureBoxDialogOpen, setConfigureBoxDialogOpen] = useState<boolean>(false);
  let [configureAvatarDialogOpen, setConfigureAvatarDialogOpen] = useState<boolean>(false);

  return (
    <>
      <SidebarContent className="gap-0">
        <SearchForm />
        <SidebarGroup>
          <SidebarMenu>
            <Collapsible
              key={"aws-icons"}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    AWS Icons
                    <Plus className="m-1 ml-auto group-data-[state=open]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <Minus className="m-1 ml-auto group-data-[state=closed]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <Suspense fallback={<div>Loading...</div>}>
                    <SearchAwsIconsLazy />
                  </Suspense>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            <Collapsible
              key={"azure-icons"}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    Azure Icons
                    <Plus className="m-1 ml-auto group-data-[state=open]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <Minus className="m-1 ml-auto group-data-[state=closed]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <Suspense fallback={<div>Loading...</div>}>
                    <SearchAzureIconsLazy />
                  </Suspense>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            <Collapsible
              key={"gcp-icons"}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    GCP Icons
                    <Plus className="m-1 ml-auto group-data-[state=open]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <Minus className="m-1 ml-auto group-data-[state=closed]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <Suspense fallback={<div>Loading...</div>}>
                    <SearchGcpIconsLazy />
                  </Suspense>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            <Collapsible
              key={"skill-icons"}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    Skill Icons
                    <Plus className="m-1 ml-auto group-data-[state=open]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <Minus className="m-1 ml-auto group-data-[state=closed]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <Suspense fallback={<div>Loading...</div>}>
                    <SearchSkillIconsLazy />
                  </Suspense>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            <Collapsible
              key={"text-components"}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    Text
                    <Cog onClick={(event) => { setConfigureTextDialogOpen(true); event.preventDefault(); }} className="m-1 ml-auto hover:bg-primary hover:text-secondary" />
                    <Plus className="m-1 group-data-[state=open]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <Minus className="m-1 group-data-[state=closed]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <Suspense fallback={<div>Loading...</div>}>
                    <SearchTextComponentsLazy />
                  </Suspense>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            <Collapsible
              key={"box-components"}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    Box
                    <Cog onClick={(event) => { setConfigureBoxDialogOpen(true); event.preventDefault(); }} className="m-1 ml-auto hover:bg-primary hover:text-secondary" />
                    <Plus className="m-1 group-data-[state=open]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <Minus className="m-1 group-data-[state=closed]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <Suspense fallback={<div>Loading...</div>}>
                    <SearchBoxComponentsLazy />
                  </Suspense>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            <Collapsible
              key={"avatar-components"}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    Avatar
                    <Cog onClick={(event) => { setConfigureAvatarDialogOpen(true); event.preventDefault(); }} className="m-1 ml-auto hover:bg-primary hover:text-secondary" />
                    <Plus className="m-1 group-data-[state=open]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                    <Minus className="m-1 group-data-[state=closed]/collapsible:hidden hover:bg-primary hover:text-secondary" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <Suspense fallback={<div>Loading...</div>}>
                    <SearchAvatarsLazy />
                  </Suspense>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      {/* <div className="p-1 absolute bottom-0">
        <Button variant="secondary" >
          <Plus /> More Shapes
        </Button>
      </div> */}
      <ConfigureTextDialog onStatusChange={(isOpen) => { setConfigureTextDialogOpen(isOpen) }} isOpen={configureTextDialogOpen} />
      <ConfigureBoxDialog onStatusChange={(isOpen) => { setConfigureBoxDialogOpen(isOpen) }} isOpen={configureBoxDialogOpen} />
      <ConfigureAvatarDialog onStatusChange={(isOpen) => { setConfigureAvatarDialogOpen(isOpen) }} isOpen={configureAvatarDialogOpen} />
    </>
  )
}
