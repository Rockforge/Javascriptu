export default loadImage;
function loadImage(url) {
    return new Promise((resolve, reject) => {

        let image = new Image();

        // Setup those listerers
        image.onload = function() {
            resolve(null, image);
        }
        image.onerror = function() {
            let message = 'Could not load image at ' + url;
            reject(new Error(msg));
        } 

        image.src = url;
    });
}


