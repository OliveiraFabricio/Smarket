export async function setRight(element, value){
  const[ 
    $element, 
    $value, 
  ] = await Promise.all([
    element(), 
    value(),
  ]);
  
  $element.style.right = $value;
}