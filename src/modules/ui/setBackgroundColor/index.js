export async function setBackgroundColor(element, value) {
  
  const[ 
    $element, 
    $value, 
  ] = await Promise.all([
    element(), 
    value(),
  ]);
  
  $element.style.backgroundColor = $value;
}