export const strip = (text) => text.replace(/(<([^>]+)>)/ig,"");
/* the above RegExp strips summary from HTML tags parsed as plain text */
