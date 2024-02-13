// Area calculation function

function calculationArea(btnId, inputId1, inputId2) {
  const targetBtn = document.getElementById(btnId);
  // Get input1Field and value with parseFlote.
  const inputValue1 = document.getElementById(inputId1);
  const value1 = parseFloat(inputValue1.value);
  // Get input2Field and value with parseFlote.
  const inputValue2 = document.getElementById(inputId2);
  const value2 = parseFloat(inputValue2.value);

  if (targetBtn.id === "triangleBtn") {
    const result = 0.5 * value1 * value2;
    document.getElementById("triangleArea").innerText = result;
  } else if (targetBtn.id === "ractangleBtn") {
    const result = value1 * value2;
    document.getElementById("ractangleArea").innerText = result;
  } else if (targetBtn.id === "parallelogramBtn") {
    const result = value1 * value2;
    document.getElementById("parallelogramArea").innerText = result;
  } else if (targetBtn.id === "rhombusBtn") {
    const result = 0.5 * value1 * value2;
    document.getElementById("rhombusArea").innerText = result;
  } else if (targetBtn.id === "pentagonBtn") {
    const result = 0.5 * value1 * value2;
    document.getElementById("pentagonArea").innerText = result;
  } else if (targetBtn.id === "ellipseBtn") {
    const result = 3.1416 * value1 * value2;
    document.getElementById("ellipseArea").innerText = result;
  }
}
