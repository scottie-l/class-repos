function askUserTojoin(){
    let userAnswer = prompt('Do you want to join the Empire?');

    if (userAnswer.toLowerCase() == 'yes'){
        document.write('APPLY');
    }
}

askUserTojoin();
