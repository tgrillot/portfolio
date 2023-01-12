function theme() {
    return {
        colorThemes: {
            0: {id: 0, class:'theme-light', text:'Light'},
            1: {id: 1, class:'theme-dark', text:'Dark'},
            2: {id: 2, class:'theme-hulk', text:'Incredible Hulk'},
        },
        themeClass: [],
        setTheme() {
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
        },
        choiceClass(classID) {
            const classes = {'rounded-sm':true, 'px-3':true, 'py-1':true};
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
    }
}