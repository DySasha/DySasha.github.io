function display_message(type, title, message, time){
    let block = document.createElement('div');
    block.classList.add('messageBox');

    let Content = document.createElement('div');
    Content.classList.add('messageContent');
    Content.classList.add(type);
    

    let Head = document.createElement('div');
    Head.classList.add('messageHead');
    Head.innerText = title;

    let Text = document.createElement('div');
    Text.classList.add('messageText');
    Text.innerText = message;
    
    let Line = document.createElement('div');
    Line.classList.add('messageLine');

    block.appendChild(Content)
    Content.appendChild(Head);
    Content.appendChild(Text);   
    Content.appendChild(Line);

    document.body.appendChild(block);


    Line.style.width = '100%';
    let difference = 1000/time;
    let MoveLine = setInterval(function(){
        Line.style.width = `${Number(Line.style.width.replace('%','')) - difference}%`
        if(Number(Line.style.width.replace('%','')) < 1){
          clearInterval(MoveLine);
          document.body.removeChild(block);
        }
        
    },10);
}
display_message('messageSucces', 'Tetst Head', 'Test message', 4000)