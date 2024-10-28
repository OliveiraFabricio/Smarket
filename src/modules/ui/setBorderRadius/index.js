export async function setBorderRadius(element, value){
  const[ 
    $element, 
    $value, 
  ] = await Promise.all([
    element(), 
    value(),
  ]);

  $element.style.borderRadius = $value;
}