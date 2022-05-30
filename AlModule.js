/*
this project can convert link video addres youtube to link video HTML embed
https://youtu.be/rsFovUU_0FQ To -> <iframe width="853" height="480" src="https://www.youtube.com/embed/rsFovUU_0FQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/

const YoutubeLinkEmbedConverter = (link,title = "Youtube Video Player",isAllowFullscreen,widthFrame = 853,heightFrame = 480,...otherAtribute)=>{
    console.log("Author: [Muhammad Alghifari]");
    //jika link berbentuk list atau lebih dari satu
    if(typeof(link) != 'string'){
        //function bersarang
        const loopArr = (link,title = "Youtube Video Player",isAllowFullscreen,widthFrame = 853,heightFrame = 480,newArr = [],index = 0,...otherAtribute)=>{
            if(!link[index]) return newArr;
            var splitLink = link[index].split('/');
            var concateLink = splitLink[0] + "//www.youtube.com/embed/" + splitLink[3];
            var embedLink = `<iframe width="${widthFrame}" height="${heightFrame}" src="${concateLink}" title="${title}"  ${isAllowFullscreen == true ? "allowfullscreen" : ""} ${otherAtribute}></iframe>`;
            //rekursif function | terus memanggil function ini sampai isi array link habis
            return loopArr(link,title,isAllowFullscreen,widthFrame,heightFrame,[...newArr,embedLink],index+=1);
        }
        //return isi link
        return loopArr(link,title = "Youtube Video Player",isAllowFullscreen,widthFrame = 853,heightFrame = 480,...otherAtribute);
    }
    //jika hanya satu link
    var splitLink = link.split('/');
    var concateLink = splitLink[0] + "//www.youtube.com/embed/" + splitLink[3];
    var embedLink = `<iframe width="${widthFrame}" height="${heightFrame}" src="${concateLink}" title="${title}"  ${isAllowFullscreen == true ? "allowfullscreen" : ""} ${otherAtribute}></iframe>`;
    return embedLink;
}

//convert link video addres youtube more than 1
console.log("List Link");
console.log(YoutubeLinkEmbedConverter(['https://youtu.be/rsFovUU_0FQ','https://youtu.be/bbbU_0FQ','https://youtu.be/bbbU_0FQwewe']));

//convert link video addres youtube single link
console.log("Satu Link")
console.log(YoutubeLinkEmbedConverter('https://youtu.be/rsFovUU_0FQ'));
