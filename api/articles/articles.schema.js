const { Schema, model } = require("mongoose");

const articleSchema = Schema({
  title: String,
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

let Article;

module.exports = Article = model("Article", articleSchema);

 async function test() {
  const articles = await Article.find().populate({
    path: "user",
    select: "-password",
    match: { name: /ana/i },
  });
  console.log(articles.filter((article) => article.user));
}

test(); 

/*
async function test() {
  const articles = await Article.find();
  console.log(articles);
  new Article({
    title : "test",
    content:"contenu",
    user: "635ab191de7213accf200498"

  }).save();
  
  console.log(articles.filter((article) => article.user));
}
test(); */