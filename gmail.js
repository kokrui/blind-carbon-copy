function findToCc(){
    for (const fld of ['to','cc']){
        var elem = document.querySelector(`textarea[name='${fld}']`).parentElement;
        if(elem != null){
            emails = elem.querySelectorAll("div.vR");
            if(emails.length>0){
                alert("o(｀ω´ )o BCC ONLY!");
                chrome.runtime.sendMessage({closeThis: true});
                for(email of emails){
                    elem.removeChild(email);
                    // beware >:)
                    // this doesn't do what one might think it does xd
                }
            }
        }
    }

}

setInterval(findToCc, 500);