var posts=["posts/18155/","posts/16107/","posts/18155/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };