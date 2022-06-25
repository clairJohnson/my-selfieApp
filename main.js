var speechRecognition=window.webkitSpeechRecognition;
var recognition= new speechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
 console.log(event);
 var content=event.results[0][0].transcript;
 document.getElementById("textbox").innerHTML=content;
 console.log(content);
 if(content=="take my selfie"){
     console.log("taking  selfie-----");
     speak();
 }   
}
function speak(){
    var synth=window.speechSynthesis;
    speakData="Taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speakData);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
    snapshot();
    save();
    },5000)

}
camera=document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">';
    });
}
function save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie_img").src;
    link.href=img;
    link.click();
}