import { defineComponent } from "vue";
import { EffectSample } from "./Effect";
import { ElementRefSample, RefSample } from "./Ref";
import { StateSample } from "./State";
import { MemoSample } from "./Memo";
import { CallBackSample } from "./Callback";

export default defineComponent(() => () => {
  return (
    <div>
      <h1>State Sample</h1>
      <StateSample />
      <hr />

      <h1>Memo Sample</h1>
      <MemoSample />
      <hr />

      <h1>CallBack Sample</h1>
      <CallBackSample />
      <hr />

      <h1>Effect Sample</h1>
      <EffectSample />
      <hr />

      <h1>Ref Sample</h1>
      <RefSample />

      <h1>ElementRef Sample</h1>
      <ElementRefSample />
    </div>
  );
});
