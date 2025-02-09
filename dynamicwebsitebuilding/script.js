function card(title, chname, views, time, thumbnail, duration) {
    let viewstr;
    if (views < 1000000) {
        viewstr = views / 1000 + "k";
    }
    else if (views >= 1000000) {
        viewstr = views / 1000000 + "m"
    }
    else {
        viewstr = views / 1000 + "k"
    }
    let html = ` <div class="container">
        <div class="pic">
            <img src=${thumbnail} alt="">
            <div class="time">${time}</div>
        </div>
        <div class="labels">
           <div class="header">${title}</div> 
           <div class="info">
            <div class="chname">${chname}</div>.
            <div class="views">${viewstr} views</div>.
            <div class="duration">${duration} months ago</div>
           </div>
        </div>
    </div>`
    document.querySelector(".main").innerHTML = document.querySelector(".main").innerHTML + html;
}
card("Introduction to backend || Sigma Web Deveopment Course #2", "codewithDev", 465000, "32:02", "https://i.ytimg.com/vi/WYazkpCQNQw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCqWabFaQdcnqskWMx5K1dd3BfwjQ", 2);


