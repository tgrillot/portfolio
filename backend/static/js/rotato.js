function rotato(sc) {
    return {
        timer:2000,
        skillindex: 0,
        skillcount: sc,
        getLastSkill() {
            if (this.skillindex == 0) {
                return document.getElementById(this.skillcount - 1);
            } else {
                return document.getElementById(this.skillindex - 1);
            }
        },
        rotateskill() {
            let activeskill = document.getElementById(this.skillindex);
            if (activeskill) {
                activeskill.setAttribute("x-show","true");
            }
            let inactiveskill = this.getLastSkill(this.skillcount);
            if (inactiveskill) {
                inactiveskill.setAttribute("x-show","false");
            }
            if (this.skillindex == this.skillcount - 1) {
                this.skillindex = 0;
            } else {
                this.skillindex += 1;
            }
        }
    }
}