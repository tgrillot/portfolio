function xdata() {
    return {
        colorThemes: {
            0: {id: 0, class:'theme-light', text:'Light'},
            1: {id: 1, class:'theme-dark', text:'Dark'},
            2: {id: 2, class:'theme-incredible', text:'Incredible'},
            3: {id: 3, class:'theme-sunny', text:'Sunny'},
            4: {id: 4, class:'theme-minty', text:"Minty"},
        },
        min768: [],
        showMenu: [],
        showSocial: [],
        themeClass: [],
        init() {
            if (this.themeClass == "") {
                if (!localStorage.getItem('themeClass')) {
                    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        this.themeClass = this.colorThemes[Object.keys(this.colorThemes)[1]].class
                    } else {
                        this.themeClass = this.colorThemes[Object.keys(this.colorThemes)[0]].class
                    }
                } else {
                    this.themeClass = localStorage.getItem('themeClass');
                }
            }
            var x = window.matchMedia("(min-width:768px)")
            if (x.matches) {
                this.min768 = true;
            } else {
                this.min768 = false;
            }
            if (this.min768 == true) {
                this.showMenu = true;
                this.showSocial = true;
            } else {
                this.showMenu = false;
                this.showSocial = false;
            }
            if (window.location.pathname.includes('contact')) {
                this.showSocial = true
            }
        },
        choiceClass(classID) {
            const classes = {'rounded-sm':true, 'md:px-3':true, 'md:py-1':true, 'text-headerfooterlink':true, 'hover:text-headerfooterlinkhov':true,};
            if (this.themeClass == this.colorThemes[Object.keys(this.colorThemes)[classID]].class) {
                classes['text-a-hover'] = true;
            } else {
                classes['text-a-hover'] = false;
            }
            return classes;
        },
        changeTheme(classID) {
            this.themeClass = this.colorThemes[Object.keys(this.colorThemes)[classID]].class;
            localStorage.setItem('themeClass', this.colorThemes[Object.keys(this.colorThemes)[classID]].class);
        },
        burgerClick() {
            this.showMenu = !this.showMenu
        },
        balloonClick() {
            this.showSocial = !this.showSocial
        }
    }
}