'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM dc_video'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({ error: 0, data: response, })
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM dc_video WHERE id = ?'
        db.query(sql, [req.params.newsId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let newsId = req.params.newsId;
        let sql = 'UPDATE dc_video SET ? WHERE id = ?'
        db.query(sql, [data, newsId], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },
    store: (req, res) => {
        let cat = Math.floor(Math.random() * 6) + 1;
        let obj1 = {
            day_ago: new Date().toISOString().slice(0, 19).replace('T', ' '),
            category: cat
        };
        const data = Object.assign(obj1, req.body);
        let sql = 'INSERT INTO dc_video SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) {
                res.status(401).json({ message: err.message });
                throw err;
            }
            else { res.json({ message: 'Insert success!' }) }

        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM dc_video WHERE id = ?'
        db.query(sql, [req.params.newsId], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    }
}