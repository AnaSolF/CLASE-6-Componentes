export default class Video{

    constructor(parentID, url, width, height) {
        this.parentID = parentID;
        this.url = url;
        this.width = width;
        this.height = height;
    }
    
    
    render() {
        let myApp = document.getElementById(this.parentID);

        const myVideoHTML = myApp.innerHTML + "<iframe src=" + this.url  + " width=" + this.width +  " height=" + this.height + ">";

        myApp.innerHTML = myVideoHTML; 

    }

}