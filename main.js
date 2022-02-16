function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Vo9rSU-HC/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }

    else
    {
        document.getElementById("results_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("results_confidence").innerHTML = "Accuracy - " + 
        (results[0].confidence*100).toFixed(2) + " %";  
        img = document.getElementById("result");

if (results[0].label == "Barking")
{
    img.src = 'dog.jpg';
}

else if (results[0].label == "Meowing")
{
    img.src = 'cat.jpg';
}

else if (results[0].label == "Roaring")
{
    img.src = 'lion.jpg';
}

else if (results[0].label == "Mooing")
{
    img.src = 'cow.jpg';
}
    }
}

