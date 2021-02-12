const express = require('express');
const router = express.Router();

const Note = require('../models').Note;

router.get("/new", (req, res) => {
    res.render("new.ejs");
});



router.get("/:id/edit", function (req, res) {
  Note.findByPk(req.params.id).then((notes) => {
    res.render('edit.ejs', { notes });
  });
});

//SHOW
router.get("/:id", (req, res) => {
    Note
    .findByPk(req.params.id)
    .then((notes) => {
        res.render('show.ejs', {
            notes
        })
    })
})

router.put("/:id", (req, res) => {
  Note.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((notes) => {
        res.redirect("/notes");
  });
});

router.get('/', (req, res) => {
    Note.findAll().then((notes) => {
        res.render('index.ejs', {
            notes
        })
    })
})

router.post("/", (req, res) => {
  Note.create(req.body).then((newNote) => {
    res.redirect("/notes");
  });
});

// DELETE USER
router.delete("/:id", (req, res) => {
    Note.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/notes"); //redirect back to index route
    });
});

module.exports = router;