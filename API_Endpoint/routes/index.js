const express = require("express");
const router = express.Router();

//LANDING PAGE 
router.get("/", (req, res) => {
    res.send("Welcome to MyDiary App");
 });
 
 //SHOW ALL DIARY ENTRIES
 router.get("/api/v1/diaries", (req, res) => {
     return res.json({
         diaries
     });
 });
 
 //POST ROUTE
 router.post("/api/v1/diaries", (req, res) => {
     const id = diaries.length + 1;
     const title = req.body.title;
     const content = req.body.content;
     const newDiary = {id: id, title: title, content: content};
     diaries.push(newDiary);
     res.json([diaries]);
 });

 //SHOW ROUTE FOR SINGLE DIARY ENTRY
 router.get("/api/v1/diaries/:diaryId", (req, res) => {
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
 
 //UPDATE ROUTE
 router.put("/api/v1/diaries/:diaryId", (req, res) => {
     for (let i = 0; i < diaries.length; i++) {
         if (diaries[i].id === parseInt(req.params.diaryId)) {
           diaries[i].title = req.body.title;
           diaries[i].content = req.body.content;
           return res.json({
             diaries,
             message: 'diary updated successfully',
           });
         }
       }
       return res.status(404).json({
         message: 'diary not found',
       });
 });
 
 //DELETE ROUTE
 router.delete("/api/v1/diaries/:diaryId", (req, res) => {
     for (let i = 0; i < diaries.length; i += 1) {
         if (diaries[i].id === parseInt(req.params.diaryId)) {
           diaries.splice(i, 1);
           return res.json({
             message: 'diary removed successfully',
           });
         }
       }
       return res.status(404).json({
         message: 'diary not found',
       });
 });
