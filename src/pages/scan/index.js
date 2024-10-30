import { createFrame } from "../../modules/ui/createFrame/index.js";
import { setWidth } from "../../modules/ui/setWidth/index.js";
import { setHeight } from "../../modules/ui/setHeight/index.js";
import { setPosition } from "../../modules/ui/setPosition/index.js";
import { setMarginTop } from "../../modules/ui/setMarginTop/index.js";
import { setMarginLeft } from "../../modules/ui/setMarginLeft/index.js";
import { setBorder } from "../../modules/ui/setBorder/index.js";
import { setBorderRadius } from "../../modules/ui/setBorderRadius/index.js";
import { setBackgroundColor } from "../../modules/ui/setBackgroundColor/index.js";
import { setDisplay } from "../../modules/ui/setDisplay/index.js";
import { setPaddingTop } from "../../modules/ui/setPaddingTop/index.js";
import { setRight } from "../../modules/ui/setRight/index.js";
import { setMarginBottom } from "../../modules/ui/setMarginBottom/index.js";
import { setFontWeight } from "../../modules/ui/setFontWeight/index.js";
import { setFontSize } from "../../modules/ui/setFontSize/index.js";
import { setBottom } from "../../modules/ui/setBottom/index.js";

// container do scanner
const getDivScan = await createFrame();
const divScan = getDivScan();

document.body.appendChild(divScan);

await setHeight(() => divScan, () => '495px');
await setWidth(() => divScan, () => '360px');
await setPosition(() => divScan, () => 'flex');
await setMarginTop(() =>  divScan, () => '190px');
await setMarginLeft(() => divScan, () => '23px');
await setBorderRadius(() => divScan, () => '15px');
await setBackgroundColor(() => divScan, () => '#DBDBDB');
await setBorder(() => divScan, () => 'solid, #fff');

// container da miniatura do produto
const getContainerSpan = await createFrame();
const containerSpan = getContainerSpan();

document.body.appendChild(containerSpan);

await setDisplay(() => containerSpan, () => 'flex');
await setHeight(() => containerSpan, () => '90px');
await setWidth(() => containerSpan, () => '340px');
await setMarginLeft(() => containerSpan, () => '33px');
await setPaddingTop(() => containerSpan, () => '15px');
await setMarginTop(() => containerSpan, () => '50px');
await setBorderRadius(() => containerSpan, () => '15px');
await setBackgroundColor(() => containerSpan, () => '#fff');


const getDivImg = await createFrame();
const divImg = getDivImg();

containerSpan.appendChild(divImg);
  
await setBackgroundColor(() => divImg, () => "#EEEDED");
await setDisplay(() => divImg, () => 'flex');
await setHeight(() => divImg, () => '85px');
await setWidth(() => divImg, () => '85px');
await setMarginLeft(() => divImg, () => '0.7em');
await setBorderRadius(() => divImg, () => '10px');
await setPosition(() => divImg, () => 'relative');
await setMarginTop(() => divImg, () => '-4px');

const getDivName = await createFrame();
const divName = getDivName();

containerSpan.appendChild(divName);
  
await setWidth(() => divName, () => '140px');
await setHeight(() => divName, () => '60px');
await setMarginLeft(() => divName, () => '13px');
await setMarginTop(() => divName, () => '12px');

const getDivNameItem = await createFrame();
const divNameItem = getDivNameItem();

divName.appendChild(divNameItem);
  
await setWidth(() => divNameItem, () => '95px');
await setHeight(() => divNameItem, () => '20px');
await setMarginBottom(() => divNameItem, () => '10px');


const getTextNameItem = await createFrame();
const textNameItem = getTextNameItem();

divNameItem.appendChild(textNameItem);

textNameItem.innerText = 'Doritos';
await setFontWeight(() => textNameItem, () => 'bolder');
await setFontSize(() => textNameItem, () => '1.3em');
  
const getDivInfo = await createFrame();
const divInfo = getDivInfo();

divName.appendChild(divInfo);

await setWidth(() => divInfo, () => '120px');
await setHeight(() => divInfo, () => '20px');


const getTextInfo = await createFrame();
const textInfo = getTextInfo();

divInfo.appendChild(textInfo);

divInfo.innerText = 'Clique para mais';
await setFontWeight(() => textNameItem, () => 'bolder');
await setFontSize(() => textNameItem, () => '1.3em');


const getContainerBtn = await createFrame();
const containerBtn = getContainerBtn();

containerSpan.appendChild(containerBtn);

await setPosition(() => containerBtn, () => 'fixed')
await setWidth(() => containerBtn, () => '30px');
await setHeight(() => containerBtn, () => '30px');
await setRight(() => containerBtn, () => '65px');
await setBottom(() => containerBtn, () => '123px');

const btn = document.createElement('img');

containerBtn.appendChild(btn);

btn.src = './icons/icon-scan.svg';

await setWidth(() => btn, () => '11px');
await setMarginLeft(() => btn, () => '9px');
await setMarginTop(() => btn, () => '5px');