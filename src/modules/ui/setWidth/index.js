export async function setWidth(element, value){
  const[ 
    $element, 
    $value, 
  ] = await Promise.all([
    element(), 
    value(),
  ]);
  
  $element.style.width = $value;
} 