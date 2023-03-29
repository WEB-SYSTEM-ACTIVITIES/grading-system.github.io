function calculateBtn() {

    let avg, sum, english, science, math, filipino, pe, ap, tle;

    english = Number(document.getElementById('English').value);
    science = Number(document.getElementById('Science').value);
    math = Number(document.getElementById('Mathematics').value);
    filipino = Number(document.getElementById('Filipino').value);
    pe = Number(document.getElementById('PE').value);
    ap = Number(document.getElementById('AP').value);
    tle = Number(document.getElementById('TLE').value);

    sum = english + science + math + filipino + pe + ap + tle;
    avg = sum / 7;
    document.getElementById('avg').innerHTML = "Average: " + parseFloat(avg).toFixed(2);

    if (document.getElementById('English').value == '' || document.getElementById('Science').value == '' || document.getElementById('Mathematics').value == '' || document.getElementById('Filipino').value == '' || document.getElementById('PE').value == '' || document.getElementById('AP').value == '' || document.getElementById('TLE').value == '') {
        window.alert('Please supply a data in an empty forms.');
        document.getElementById('English').value = 'Invalid!';
        document.getElementById('Science').value = 'Invalid!';
        document.getElementById('Mathematics').value = 'Invalid!';
        document.getElementById('Filipino').value = 'Invalid!';
        document.getElementById('PE').value = 'Invalid!';
        document.getElementById('AP').value = 'Invalid!';
        document.getElementById('TLE').value = 'Invalid!';
        document.getElementById('avg').innerHTML = 'Average: Invalid!';
        document.getElementById('descriptor').innerHTML = 'Descriptor: Invalid!';
        document.getElementById('remarks').innerHTML = 'Remarks: Invalid!';
    } else if (avg >= 90 && avg <= 100){
        document.getElementById('descriptor').innerHTML = 'Descriptor: OUTSTANDING';
        document.getElementById('remarks').innerHTML = 'Remarks: PASSED';
    } else if (avg >= 85 && avg <= 89){
        document.getElementById('descriptor').innerHTML = 'Descriptor: VERY SATISFACTORY';
        document.getElementById('remarks').innerHTML = 'Remarks: PASSED';
    } else if (avg >= 80 && avg <= 84){
        document.getElementById('descriptor').innerHTML = 'Descriptor: SATISFACTORY';
        document.getElementById('remarks').innerHTML = 'Remarks: PASSED';
    } else if (avg >= 75 && avg <= 79){
        document.getElementById('descriptor').innerHTML = 'Descriptor: FAIRLY SATISFACTORY';
        document.getElementById('remarks').innerHTML = 'Remarks: PASSED';
    } else if (avg < 75) {
        document.getElementById('descriptor').innerHTML = 'Descriptor: DID NOT MEET EXPECTATIONS';
        document.getElementById('remarks').innerHTML = 'Remarks: FAILED';
    } else {
        document.getElementById('descriptor').innerHTML = 'Descriptor: DOES NOT EXISTS';
        document.getElementById('remarks').innerHTML = 'Remarks: DOES NOT EXISTS';
    }


}

function clearBtn(){
    sum = 0;
    avg = 0;
    document.getElementById('English').value = '';
    document.getElementById('Science').value = '';
    document.getElementById('Mathematics').value = '';
    document.getElementById('Filipino').value = '';
    document.getElementById('PE').value = '';
    document.getElementById('AP').value = '';
    document.getElementById('TLE').value = '';
    document.getElementById('avg').innerHTML = 'Average: ';
    document.getElementById('descriptor').innerHTML = 'Descriptor: ';
    document.getElementById('remarks').innerHTML = 'Remarks: ';
}
