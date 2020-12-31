function hider(){
    let webTitle = prompt("Title");
    let webIcon = prompt("Icon URL");
    document.title = webTitle;
    let link = document.querySelector("link[rel~='icon']");
    if (!link){
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = webIcon;
}
