/* Popover declarations and content */

const lurkerLightbox = basicLightbox.create(`
    <div class="modal" id="lurkerModal">
        <p>
            They rarely post anything. 
            They’re neither loving or hating. 
            They’re just here for the comments. 
            Pass them the popcorn.
        </p>
    </div>
`);

const cheerleaderLightbox = basicLightbox.create(`
    <div class="modal" id="cheerModal">
        <p>
            These users genuinely love knowing you’re doing well. 
            They support you. They remember your birthday. 
            All the good stuff. We love them. Protect these people at all costs. 
            If someone comes for them, we ride at dawn.
        </p>
    </div>
`);

const haterLightbox = basicLightbox.create(`
    <div class="modal" id="haterModal">
        <p>
            Always trolling about everything and everybody, 
            but you keep following them because someone else is bound 
            to throw down on them…and it’s usually some really funny shit.
        </p>
    </div>
`);

const intsigatorLightbox = basicLightbox.create(`
    <div class="modal" id="instigatorModal">
        <p>
            The moment you read the words: 
            “I’m just gonna set this right here….” right before the meme, 
            you know they're start some nonsense. 
            (Lurkers secretly adore them.)
        </p>
    </div>
`);

const crypticLightbox = basicLightbox.create(`
    <div class="modal" id="crypticModal">
        <p>
            They post the most vague messages to get everyone wondering 
            what is going on and/or who it is meant to be about. Can they be 
            any more energy-draining? Just say you can’t stand the rest of us 
            and call it a day! 
        </p>
    </div>
`);

const basherLightbox = basicLightbox.create(`
    <div class="modal" id="basherModal">
        <p>
            These oh-so-lovely users are always “All Women This!” and/or 
            “All Men That!” Seriously. Who hurt you, sweetie? 
            Someone get these people a reiki healing, please. Thanks.
        </p>
    </div>
`);

const oversharerLightbox = basicLightbox.create(`
    <div class="modal" id="oversharerModal">
        <p>
            What these people post aren't a public service announcements
            by any stretch of the imagination. All we find ourselves thinking is 
            “TMI, honey. TMI.”
        </p>
    </div>
`);

const gPoliceLightbox = basicLightbox.create(`
    <div class="modal" id="gPoliceModal">
        <p>
          “No! It’s ‘their’, they’re, and ‘there’ aaaaannnnnd it’s ‘you’re, your, 
          and yore’.” (Personally, I love these people. Not sorry!)  
        </p>
    </div>
`);

const deluluLightbox = basicLightbox.create(`
    <div class="modal" id="deluluModal">
        <p>
            ‘Nuff said.
        </p>
    </div>
`);

/* Interaction response to .show() popover */

function showLightbox(incButton) {

    if (incButton == "lurker") {
        lurkerLightbox.show();
    }
    else if (incButton == "cheerleader") {
        cheerleaderLightbox.show();
    }
    else if (incButton == "hater") {
        haterLightbox.show();
    }
    else if (incButton == "instigator") {
        intsigatorLightbox.show();
    }
    else if (incButton == "cryptic") {
        crypticLightbox.show();
    }
    else if (incButton == "basher") {
        basherLightbox.show();
    }
    else if (incButton == "oversharer") {
        oversharerLightbox.show();
    }
    else if (incButton == "gPolice") {
        gPoliceLightbox.show();
    }
    else if (incButton == "delulu") {
        deluluLightbox.show();
    }
}