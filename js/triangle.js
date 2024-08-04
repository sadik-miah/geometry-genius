function calculateTriangleArea() {



    // base value
    const baseInput = document.getElementById('triangle-base');
    const triangleBaseText = baseInput.value;
    const base = parseFloat(triangleBaseText);

    // height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);

    // calculate area
    const calculate = 0.5 * base * height;

    //   display in area 
    const triangleAreaSpan = document.getElementById('Area');
    triangleAreaSpan.innerText = calculate;
    // console.log(triangleAreaSpan);






}