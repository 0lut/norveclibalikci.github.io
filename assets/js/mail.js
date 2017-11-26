function pasteMail(id)
{
    alert("xd");
    var htmltag = "&#";
    var charlist = ['111', '108', '118', '116', '46', '115', '61', '104', '105', '110'];
    var personal_mail = "";
    for(int i = 0 ; charlist.length ; i++)
    {
        personal_mail += htmltag+charlist[i];
    }
    personal_mail += "@gmail.com";
    document.getElementById("pid").innerHTML = personal_mail;
}
