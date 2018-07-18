const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("short"));

const diaries = [
    {id: 1, title: "Today was a little better", content: "I texted Sarah last night asking if she wanted to have lunch with me today, just the two of us, and she said sure. I told her that just because I’m hanging out with Jane, it doesn’t change anything about our friendship. After all, we’ve been friends since first grade! She said that she knows that, but she just felt like the third wheel because she doesn’t think that Jane likes her and because Jane and I have a lot of classes together. I told her not to worry about what Jane thought and that I’d talk to her about it. Sarah felt a lot better, and after we both cried a little, we spent the rest of lunch catching up on the latest gossip, which I missed! "},
    {id: 2, title: "As it Happens", content: "During English, I talked to Jane about what Sarah said. She said that it’s not that she doesn’t like Sarah; she just thinks that she gets too worked up about things sometime, like her breakup with Nick. I explained why Sarah was so upset about it and how Nick had cheated on her, which Jane didn’t know, and she felt bad for saying mean things about Sarah. I think Jane’s really cool, but I wish she wouldn’t assume things about people. I’m worried she was saying mean things about Sarah to our other friends when she didn’t know the truth. She sometimes likes to spread rumors even when she doesn’t know if they’re true"},
    {id: 3, title: "My Thought Failed Me", content: "I thought it would be fun for the three of us to get some coffee after school and try to make everything better. I’m not sure how well that worked, because even though Jane was trying really hard to be nice to Sarah, I could tell that Sarah was being really fake with Jane. When I texted Sarah later, she said everything was fine, but I know her well enough to know that’s not completely true."},
    {id: 4, title: "Why Is Everyone So Furious", content: "Jane also seemed mad all day because she could tell that Sarah was being fake nice to her. I hate being in the middle of all of this. What am I supposed to do? Sarah’s been my friend since forever, and Jane is my new friend, and I don’t want to hurt anyone’s feelings! But I think that Jane is right about Sarah. I think Sarah sometimes gets too dramatic about things. She’s being kind of a brat about all of this, but I don’t want to tell her that to her face, she’d never forgive me."}
];

//LANDING PAGE 
app.get("/", (req, res) => {
   res.send("Welcome to MyDiary App");
});

//SHOW ALL DIARY ENTRIES
app.get("/api/v1/diaries", (req, res) => {
    return res.json({
        diaries
    });
});

//POST ROUTE
app.post("/api/v1/diaries", (req, res) => {
    const id = diaries.length + 1;
    const title = req.body.title;
    const content = req.body.content;
    const newDiary = {id: id, title: title, content: content};
    diaries.push(newDiary);
    res.json([diaries]);
});
   
//SHOW ROUTE FOR SINGLE DIARY ENTRY
app.get("/api/v1/diaries/:diaryId", (req, res) => {
    for (let i = 0; i < diaries.length; i++ ) {
        if (diaries[i].id === parseInt(req.params.diaryId)) {
          return res.json({
            diaries: diaries[i],
            message: 'success',
          });
        }
      }
      return res.status(404).json({
        message: 'diary not found',
      });
});

app.listen(3002, () => {
    console.log("Server is up and listening on 3002");
});