export async function setAlignItems(element, value) {
  const[ 
    $element, 
    $value, 
  ] = await Promise.all([
    element(), 
    value(),
  ]);

  $element.style.alignItems = $value;
}