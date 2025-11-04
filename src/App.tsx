import { useState, useRef } from "react";
import { Sidebar } from "./components/Sidebar";
import { FeedCard } from "./components/FeedCard";
import { RightPanel } from "./components/RightPanel";
import { MobileHeader } from "./components/MobileHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./components/ui/sheet";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import { useIsMobile } from "./components/ui/use-mobile";
import { MessageSquare } from "lucide-react";
import type { ImperativePanelHandle } from "react-resizable-panels@2.1.7";

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] =
    useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [rightPanelSize, setRightPanelSize] = useState(35);
  const isMobile = useIsMobile();

  const sidebarRef = useRef<ImperativePanelHandle>(null);
  const feedRef = useRef<ImperativePanelHandle>(null);
  const rightPanelRef = useRef<ImperativePanelHandle>(null);

  const handleToggleCollapse = () => {
    const newCollapsed = !sidebarCollapsed;
    setSidebarCollapsed(newCollapsed);

    // Get current right panel size to preserve it
    const currentRightSize = rightPanelRef.current?.getSize() || rightPanelSize;

    if (newCollapsed) {
      // When collapsing, shrink sidebar and expand feed
      // Feed takes up: 100% - sidebar (5%) - right panel (current size)
      sidebarRef.current?.resize(5);
      feedRef.current?.resize(100 - 5 - currentRightSize);
    } else {
      // When expanding, restore original sizes
      // Feed takes up: 100% - sidebar (15%) - right panel (current size)
      sidebarRef.current?.resize(15);
      feedRef.current?.resize(100 - 15 - currentRightSize);
    }
  };

  const feedContent = (
    <div className="h-full overflow-y-auto bg-slate-50 dark:bg-slate-950 p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
        <div className="mb-6 md:mb-8">
          {!isMobile && (
            <h1 className="text-slate-800 dark:text-slate-100 mb-4">
              Job<span className="text-orange-500">eee</span>
            </h1>
          )}
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-slate-300 dark:border-slate-600 flex-shrink-0"
              ></div>
            ))}
          </div>
        </div>

        <FeedCard
          type="quizz"
          title="Quizz"
          tags={["Tag", "Tag", "Tag"]}
        />

        <FeedCard type="thread" title="Thread" liked={true} />

        <FeedCard type="article" title="Clickfraud" />
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className="h-screen flex flex-col overflow-hidden">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <MobileHeader
            onMenuClick={() => setSheetOpen(true)}
          />
          <SheetContent
            side="left"
            className="p-0 w-64"
            aria-describedby={undefined}
          >
            <Sidebar isMobile={true} />
          </SheetContent>
        </Sheet>

        <Tabs
          defaultValue="feed"
          className="flex-1 flex flex-col overflow-hidden"
        >
          <div className="flex-1 overflow-hidden">
            <TabsContent value="feed" className="h-full m-0">
              {feedContent}
            </TabsContent>
            <TabsContent
              value="discussion"
              className="h-full m-0"
            >
              <RightPanel />
            </TabsContent>
          </div>
          <TabsList className="w-full rounded-none border-t h-14 grid grid-cols-2">
            <TabsTrigger
              value="feed"
              className="data-[state=active]:bg-slate-100"
            >
              Feed
            </TabsTrigger>
            <TabsTrigger
              value="discussion"
              className="data-[state=active]:bg-slate-100"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Discussion
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          ref={sidebarRef}
          defaultSize={15}
          minSize={5}
          maxSize={20}
          collapsible={true}
          className="min-w-[74px]"
        >
          <Sidebar
            isCollapsed={sidebarCollapsed}
            onToggleCollapse={handleToggleCollapse}
          />
        </ResizablePanel>

        <ResizableHandle />

        <ResizablePanel
          ref={feedRef}
          defaultSize={50}
          minSize={30}
        >
          {feedContent}
        </ResizablePanel>

        <ResizableHandle />

        <ResizablePanel
          ref={rightPanelRef}
          defaultSize={35}
          minSize={20}
          maxSize={55}
          onResize={(size) => setRightPanelSize(size)}
        >
          <RightPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}