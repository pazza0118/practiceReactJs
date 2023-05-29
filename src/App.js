import LifeCycle from "./components/LifeCycle";
import ComponentWillUnmount from "./components/LifeCycle";
import ReactHook from "./components/ReactHook"
import {Cat, Mouse, MouseTracker} from "./components/RenderProps"
import UseEffect from "./components/UseEffect";
import { HocComponent } from "./components/HigherOrderComp";
import ClassComponent from "./components/ClassComponent";
import { FunctionComponent } from "./components/FunctionComponent";
import { CustomHook } from "./components/CustomHook";
import Ref from "./components/Ref";
import { ReduxClass, ReduxFunction } from "./components/Redux"
import { InputHandler } from "./components/InputHandler";
import { ReduxAge, ReduxName } from "./components/Redux2";

function App() {
  return (
    <div>
      <ClassComponent />
      {/* <FunctionComponent /> */}
      {/* <ReactHook /> */}
      {/* <InputHandler /> */}
      {/* <MouseTracker /> */}
      {/* <UseEffect /> */}
      {/* <LifeCycle /> */}
      {/* <HocComponent /> */}
      {/* <Ref /> */}
      {/* <CustomHook /> */}
      {/* <ReduxClass /> */}
      {/* <ReduxFunction /> */}
      {/* <ReduxName /> */}
      {/* <ReduxAge /> */}
    </div>
  );
}

export default App;
