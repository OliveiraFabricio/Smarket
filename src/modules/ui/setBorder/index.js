export async function setBorder(element, value){
  const[ 
    $element, 
    $value, 
  ] = await Promise.all([
    element(), 
    value(),
  ]);

  $element.style.border = $value;
} 