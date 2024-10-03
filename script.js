function play(move)
{
    console.log(move);
    document.getElementById('yu').innerHTML=move;
    // calculating computer move
    var compmove;
    var val=Math.random();
    console.log(val);
    if(val<=0.3)
    {
        compmove="Rock";
        document.getElementById('cmp').innerHTML=compmove;
    }
    else if(val>0.3 && val <=0.6)
    {
    compmove="Paper";
    document.getElementById('cmp').innerHTML=compmove;

    }
    else if(val>0.6 && val<=1)
    {
        compmove="Scissor";
        document.getElementById('cmp').innerHTML=compmove;
    }

    // valuating the answers 
      // for rock
    if(move==="Rock" && compmove==="Rock")
    {
        document.getElementById('results').innerHTML="TIE"
    }
    else if(move==="Rock" && compmove==="Paper")
    {
        document.getElementById('results').innerHTML="LOST"

    }
    else if(move==="Rock" && compmove==="Scissor")
    {
        document.getElementById('results').innerHTML="WON"

    }
    // for paper 
    if(move==="Paper" && compmove==="Paper")
        {
            document.getElementById('results').innerHTML="TIE"
        }
        else if(move==="Paper" && compmove==="Scissor")
        {
            document.getElementById('results').innerHTML="LOST"
    
        }
        else if(move==="Paper" && compmove==="Rock")
        {
            document.getElementById('results').innerHTML="WON"
    
        }
        // for scissor
        if(move==="Scissor" && compmove==="Scissor")
            {
                document.getElementById('results').innerHTML="TIE"
            }
            else if(move==="Scissor" && compmove==="Rock")
            {
                document.getElementById('results').innerHTML="LOST"
        
            }
            else if(move==="Scissor" && compmove==="Paper")
            {
                document.getElementById('results').innerHTML="WON"
        
            }


}