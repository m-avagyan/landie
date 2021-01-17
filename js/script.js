const home = document.getElementsByClassName('header')[0],
      about = document.getElementsByClassName('main-section')[0];
      contact = document.getElementsByClassName('aside')[0];

const scrollPage = lnk => {
    if (lnk == 1) {
        home.scrollIntoView()
    } else if (lnk == 2) {
        about.scrollIntoView()
    } else {
        contact.scrollIntoView()
    }
}