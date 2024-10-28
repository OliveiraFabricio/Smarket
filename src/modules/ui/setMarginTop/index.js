export async function setMarginTop(element, value) {
  const[ 
    $element, 
    $value, 
  ] = await Promise.all([
    element(), 
    value(),
  ]);
  
  $element.style.marginTop = $value;
}