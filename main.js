Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera');


function take_snapshot()
{
    Webcam,snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id="captured_images" src="'+data_url+'"/>'
    });
}


console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier( 'https://teachablemachine.withgoogle.com/models/C_Dplt2Nl/',modelLoaded);

function modelLoaded()
{
    console.log('model loaded');
}