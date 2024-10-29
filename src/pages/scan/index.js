import { createFrame } from "../../modules/ui/createFrame";
import { setWidth } from "../../modules/ui/setWidth";
import { setHeight } from "../../modules/ui/setHeight";
import { setPosition } from "../../modules/ui/setPosition";
import { setMarginTop } from "../../modules/ui/setMarginTop";
import { setMarginLeft } from "../../modules/ui/setMarginLeft";

const getDivScan = await createFrame();
const divScan = getDivScan();

document.body.appendChild(divScan);

await setHeight(() => divScan, () => '25px');
await setWidth(() => divScan, () => '25px');
await setPosition(() => divScan, () => 'fixed');
await setMarginTop(() =>  divScan, () => '-40px');
await setMarginLeft(() => divScan, () => '30px');

console.log(getDivScan);


const getButton = await createFrame();
const button = getButton();

document.body.appendChild(button);
