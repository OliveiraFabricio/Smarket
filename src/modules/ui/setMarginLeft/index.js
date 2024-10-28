export async function setMarginLeft(element, value) {
  const[ 
    $element, 
    $value, 
  ] = await Promise.all([
    element(), 
    value(),
  ]);
  
  $element.style.marginLeft = $value;
  }