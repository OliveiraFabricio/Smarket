import { setPadding } from "./src/modules/ui/setPadding/index.js";
import { setDisplay } from "./src/modules/ui/setDisplay/index.js";
import { setMarginLeft } from "./src/modules/ui/setMarginLeft/index.js";
import { setMarginTop } from "./src/modules/ui/setMarginTop/index.js";
import { setMarginRight } from "./src/modules/ui/setMarginRight/index.js";
import { setMarginBottom } from "./src/modules/ui/setMarginBottom/index.js";
import { setPosition } from "./src/modules/ui/setPosition/index.js";
import { setHeight } from "./src/modules/ui/setHeight/index.js";
import { setWidth } from "./src/modules/ui/setWidth/index.js";
import { setFontSize } from "./src/modules/ui/setFontSize/index.js";
import { setBackgroundColor } from "./src/modules/ui/setBackgroundColor/index.js";
import { setBorderRadius } from "./src/modules/ui/setBorderRadius/index.js";
import { setAlignItems } from "./src/modules/ui/setAlignItems/index.js";
import { setFlexDirection } from "./src/modules/ui/setFlexDirection/index.js";
import { setFlex } from "./src/modules/ui/setFlex/index.js";
import { setJustifyContent } from "./src/modules/ui/setJustifyContent/index.js";
import { setRight } from "./src/modules/ui/setRight/index.js";
import { setBottom } from "./src/modules/ui/setBottom/index.js";
import { setLeft } from "./src/modules/ui/setLeft/index.js";
import { setTop } from "./src/modules/ui/setTop/index.js";
import { setColor } from "./src/modules/ui/setColor/index.js";
import { setBorder } from "./src/modules/ui/setBorder/index.js";
import { setPaddingLeft } from "./src/modules/ui/setPaddingLeft/index.js";
import { setPaddingBottom } from "./src/modules/ui/setPaddingBottom/index.js";
import { setFontWeight } from "./src/modules/ui/setFontWeight/index.js";
import { setPaddingTop } from "./src/modules/ui/setPaddingTop/index.js";
import { createFrame } from "./src/modules/ui/createFrame/index.js";


  const getIconContainer = await createFrame();   
  const iconContainer = getIconContainer();

  document.body.appendChild(iconContainer);

  await setPosition(() => iconContainer, () => 'fixed');
  await setWidth(() => iconContainer, () => '25px');
  await setHeight(() => iconContainer, () => '25px');
  await setMarginTop(() =>  iconContainer, () => '-40px');
  await setMarginLeft(() => iconContainer, () => '30px');
  

  const icon = document.createElement('img');

  iconContainer.appendChild(icon);

  icon.src = './assets/icons/chevron-left.svg';

  await setWidth(() => icon, () => '11px');
  await setMarginLeft(() => icon, () => '4px');
  await setMarginTop(() => icon, () => '3px');

  const getContainerProducts = await createFrame();   
  const containerProducts = getContainerProducts();

  document.body.appendChild(containerProducts);

  
  await setDisplay(() => containerProducts, () => 'flex');
  await setJustifyContent(() => containerProducts, () => 'center');
  await setPadding(() =>  containerProducts, () => '15px');
  await setMarginTop(() => containerProducts, () => '6.5em');
  await setMarginLeft(() => containerProducts, () => '1em');
  await setHeight(() => containerProducts, () => '570px');
  await setWidth(() => containerProducts, () => '350px');

  // Cria a lista de produtos
  const products = document.createElement('ul');

  containerProducts.appendChild(products);

  const createProduct = async () => {
    const product = document.createElement('li');
  
    setBackgroundColor(() => product, () => "#fff");
    setDisplay(() => product, () => 'flex');
    setHeight(() => product, () => '121px');
    setWidth(() => product, () => '346px');
    setMarginRight(() => product, () => '40px');
    setMarginBottom(() => product, () => '15px');
    setBorderRadius(() => product, () => '10px');
    
    const divImg = document.createElement('div');
    product.appendChild(divImg);
  
    setBackgroundColor(() => divImg, () => "#EEEDED");
    setDisplay(() => divImg, () => 'flex');
    setHeight(() => divImg, () => '85px');
    setWidth(() => divImg, () => '85px');
    setMarginTop(() => divImg, () => '1em');
    setMarginLeft(() => divImg, () => '1em');
    setBorderRadius(() => divImg, () => '10px');
    setPosition(() => divImg, () => 'relative');
  
    const qtd = document.createElement('div');
    divImg.appendChild(qtd);
  
    setBackgroundColor(() => qtd, () => "#D24543");
    setPosition(() => qtd, () => 'absolute');
    setRight(() => qtd, () => '-10px');
    setTop(() => qtd, () => '-10px');
    setHeight(() => qtd, () => '20px');
    setWidth(() => qtd, () => '19px');
    setBorderRadius(() => qtd, () => '4px');
  
    const textQtd = document.createElement('div');
    qtd.appendChild(textQtd);
    
    textQtd.innerText = '2';
    setColor(() => textQtd, () => '#fff');
    setFontSize(() => textQtd, () => '1em');
    setPadding(() => textQtd, () => '0.5px 5px 2px 5px');
  
    const divButtons = document.createElement('div');
    product.appendChild(divButtons);
  
    setPosition(() => divButtons, () => 'relative');
    setDisplay(() => divButtons, () => 'flex');
    setLeft(() => divButtons, () => '8.5em');
    setTop(() => divButtons, () => '2.6em');
    setWidth(() => divButtons, () => '100px');
    setHeight(() => divButtons, () => '50px');
  
    const btnMenos = document.createElement('div');
    divButtons.appendChild(btnMenos);
  
    setBorder(() => btnMenos, () => 'solid');
    setWidth(() => btnMenos, () => '36px');
    setHeight(() => btnMenos, () => '35px');
    setMarginRight(() => btnMenos, () => '5px');
    setBorderRadius(() => btnMenos, () => '4px');
  
    const textBtnMenos = document.createElement('div');
    btnMenos.appendChild(textBtnMenos);
  
    textBtnMenos.innerText = '-';
    setFontSize(() => textBtnMenos, () => '2em');
    setMarginLeft(() => textBtnMenos, () => '13px');
    setMarginTop(() => textBtnMenos, () => '-3px');
  
    const btnMais = document.createElement('div');
    divButtons.appendChild(btnMais);
  
    setBorder(() => btnMais, () => 'solid');
    setBackgroundColor(() => btnMais, () => '#000');
    setWidth(() => btnMais, () => '36px');
    setHeight(() => btnMais, () => '35px');
    setBorderRadius(() => btnMais, () => '4px');
  
    const textBtnMais = document.createElement('div');
    btnMais.appendChild(textBtnMais);
  
    textBtnMais.innerText = '+';
    setColor(() => textBtnMais, () => '#fff');
    setFontSize(() => textBtnMais, () => '2em');
    setPaddingLeft(() => textBtnMais, () => '9.5px');
    setPaddingBottom(() => textBtnMais, () => '15px');
  
    const divInfos = document.createElement('div');
    product.appendChild(divInfos);
  
    setPosition(() => divInfos, () => 'relative');
    setWidth(() =>divInfos, () => '100px');
    setHeight(() => divInfos, () => '50px');
    setRight(() => divInfos, () => '80px');
    setTop(() => divInfos, () => '30px');
  
    const divNameItem = document.createElement('div');
    divInfos.appendChild(divNameItem);
  
    setWidth(() => divNameItem, () => '100px');
    setHeight(() => divNameItem, () => '20px');
    setMarginBottom(() => divNameItem, () => '10px');
  
    const textNameItem = document.createElement('div');
    divNameItem.appendChild(textNameItem);
  
    textNameItem.innerText = 'Coca-cola';
    setFontWeight(() => textNameItem, () => 'bolder');
    setFontSize(() => textNameItem, () => '1.3em');
  
    const valueItem = document.createElement('div');
    divInfos.appendChild(valueItem);
  
    setWidth(() => valueItem, () => '100px');
    setHeight(() => valueItem, () => '20px');
    setRight(() => valueItem, () => '85px');
    setTop(() => valueItem, () => '70px');
  
    const textValueItem = document.createElement('div');
    valueItem.appendChild(textValueItem);
  
    textValueItem.innerText = 'R$4,99';
    setFontWeight(() => textValueItem, () => 'bolder');
    setFontSize(() => textValueItem, () => '1.2em');
  
    return product;
  };
  
  // Adiciona produtos à lista
  for (let i = 0; i < 4; i++) {
  
    const newProduct = await createProduct();
    console.log('kkk', newProduct);
    products.appendChild(newProduct);
    
  }
  
// div finalizar pagamento
const getContainerBtn = await createFrame();
const containerBtn = getContainerBtn();

document.body.appendChild(containerBtn);

//Posição do containerBtn

await setBackgroundColor(() => containerBtn, () => '#fff');
await setHeight(() => containerBtn, () => '250px');
await setWidth(() => containerBtn, () => '100%');
await setPosition(() => containerBtn, () => 'fixed');
await setLeft(() => containerBtn, () => '0px');
await setRight(() => containerBtn, () => '0px');
await setBottom(() => containerBtn, () => '-25px');
await setDisplay(() => containerBtn, () => 'flex');
await setFlexDirection(() => containerBtn, () => 'column');
await setJustifyContent(() => containerBtn, () => 'center');
await setBorderRadius(() => containerBtn, () => '33px');

// FIM div principal
                                         
// div total, preco
const getColumns = await createFrame();
const columns = getColumns();

containerBtn.appendChild(columns);

await setDisplay(() => columns, () => 'flex');
await setHeight(() => columns, () => '90px');
await setWidth(() => columns, () => '90%');
await setPaddingTop(() => columns, () => '15px')

// texto 'total' - filho de columns
const getText = await createFrame();
const text = getText();

columns.appendChild(text);

text.innerText = 'Total:';
await setFontSize(() => text, () => '2em');
await setMarginLeft(() => text, () => '1em');
await setDisplay(() => text, () => 'flex');
await setAlignItems(() => text, () => 'start');


// valor 'R$38,98' - filho de columns
 
const getValueTotal = await createFrame();
const valueTotal = getValueTotal();

columns.appendChild(valueTotal);

valueTotal.innerText = 'R$38,98';

await setFontSize(() => valueTotal, () => '1.8em');
await setFlex(() => valueTotal, () => '1');
await setDisplay(() => valueTotal, () => 'flex');
await setFlexDirection(() => valueTotal, () => 'column');
await setAlignItems(() => valueTotal, () => 'end');

// FIM div total, preco

const getDivBtn = await createFrame();   
const divBtn = getDivBtn();

containerBtn.appendChild(divBtn);

await setDisplay(() => divBtn, () => 'flex');
await setHeight(() => divBtn, () => '90px');
await setWidth(() => divBtn, () => '80%');
await setMarginLeft(() => divBtn, () => '3.7em');
await setPaddingTop(() => divBtn, () => '15px');

// estilização do botão
const button = document.createElement ('button');

divBtn.appendChild(button);

button.innerText = 'Fechar pedido';
await setFontSize(() => button, () => '1.2em');
await setHeight(() => button, () => '58px');
await setWidth(() =>button, () => '295px');
await setPadding(() =>button, () => '10px 30px');
await setBackgroundColor(() => button, () => '#D24543');
await setColor(() => button, () => '#fff');
await setBorderRadius(() => button, () => '15px');
// FIM div finalizar pagamento