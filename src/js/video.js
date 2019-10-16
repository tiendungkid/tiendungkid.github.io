const player = new Plyr("#video");
player.source = {
    type: "video",
    title: "Istagram downloader",
    sources: [{
        src: 'https://raw.githubusercontent.com/tiendungkid/instagram-images-downloader/master/node-dowload-images.mp4',
        type: 'video/mp4',
        size: 1080,
    }],
    poster: "../src/img/1000/9.jpg"
}