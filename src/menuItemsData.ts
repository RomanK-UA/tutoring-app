import DragImagesGame from "./pages/DragImagesGame";
import PressCorrectLetter from "./pages/PressCorrectLetter";

enum Routes {
  PressCorrectLetter = '/PressCorrectLetter',
    DragImagesGame = '/DragImagesGame',
    SERVICES = '/services',
    CONTACT = '/contact',
  }
  
  interface MenuItem {
    name: string;
    path: Routes;
    component: React.FC;
  }
  
  export const menuItemsData: MenuItem[] = [
    { name: 'Game 1', path: Routes.PressCorrectLetter, component:  PressCorrectLetter },
    { name: 'Game 2', path: Routes.DragImagesGame, component: DragImagesGame },
  ];