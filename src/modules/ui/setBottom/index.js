export async function setBottom(element, value) {
  const[ 
    $element, 
    $value, 
  ] = await Promise.all([
    element(), 
    value(),
  ]);

  $element.style.bottom = $value;
}