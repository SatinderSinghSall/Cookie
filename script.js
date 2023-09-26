const TrickButton = document.getElementById('trick');
const ButtonContainer = document.querySelector('.button-container');

//Initial posotion.
ButtonContainer.style.flexDirection = 'row';

TrickButton.addEventListener('mouseover', (e)=>
{
    const CurrentDirection = ButtonContainer.style.flexDirection;

    if(CurrentDirection == 'row')
    {
        ButtonContainer.style.flexDirection = 'row-reverse';
    }

    else
    {
        ButtonContainer.style.flexDirection = 'row';
    }

} )