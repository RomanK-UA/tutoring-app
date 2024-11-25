// import DragImagesGame from "./pages/DragImagesGame";
import PressCorrectLetter from "./pages/PressCorrectLetter";
import BasicMathGame from "./pages/BasicMathGame";
enum Routes {
  PressCorrectLetter = '/PressCorrectLetter',
    // DragImagesGame = '/DragImagesGame',
    BasicMathGame = '/BasicMathGame',
  }
  
  interface MenuItem {
    name: string;
    path: Routes;
    component: React.FC;
  }
  
  export const menuItemsData: MenuItem[] = [
    { name: 'Game 1', path: Routes.PressCorrectLetter, component:  PressCorrectLetter },
    { name: 'Game 2', path: Routes.BasicMathGame, component: BasicMathGame },
    // { name: 'Game 2', path: Routes.DragImagesGame, component: DragImagesGame },
  ];
  