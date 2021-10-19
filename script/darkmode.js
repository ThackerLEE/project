"use srtict";
let Links = {
    setColor: function (color) {
        $('h1').css('color', color);
    }
}
let Body = {
    setColor: function (color) {
        $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
        $('body').css('backgroundColor', color);
    }
}

function darkmode(self) {
    let target = document.querySelector('body');
    if (self.value === 'dark') {
        Body.setBackgroundColor('#a5a5a5a5');
        Body.setColor('#1b1b1b');
        self.value = 'light';


        Links.setColor('#ffff');
    } else {

        Body.setBackgroundColor('#1b1b1b');
        Body.setColor('black');
        self.value = 'dark';


        Links.setColor('black')
    }
}